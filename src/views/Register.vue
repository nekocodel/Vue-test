<template>
    <div>
        <mt-header title="注册">
            <div slot="left"><mt-button  icon="back"></mt-button></div>
            <router-link to="login" slot="right">登录</router-link>
        </mt-header>
        <mt-field type="text"
                  placeholder="请输入用户名"
                  v-model="name"
                  :state="nameState"
                  @blur.native.capture="checkName"
                  label="用户名">
        </mt-field>
         <mt-field type="password"
                  placeholder="请输入密码"
                  v-model="pwd"
                  :state="pwdState"
                  @blur.native.capture="checkPwd"
                  label="密码">
        </mt-field>
         <mt-field type="password"
                  placeholder="再次输入密码"
                  v-model="repwd"
                  :state="repwdState"
                  @blur.native.capture="checkRepwd"
                  label="确认密码">
        </mt-field>
        <mt-button type="primary" size="large" @click="checkForm">快速注册</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                nameState:"",
                pwd:"",
                pwdState:"",
                repwd:"",
                repwdState:"",
            }
        },
        methods:{
            checkForm(){
                // 验证表单
                if(this.checkName()&&this.checkPwd()&&this.checkRepwd()){
                    //发送axios请求，执行注册业务
                    let uname = this.name
                    let upwd = this.pwd
                    this.axios.post('/register',
                    `username=${uname}&password=${upwd}`).then(res=>{
                        console.log(res);
                        if(res.data.code==200){
                           this.$toast({
                               message:'注册成功',
                               duration:3000,
                               position:'bottom'});
                        this.$router.push('/login')
                        }else{
                        //注册失败
                        this.$messagebox('提示','该用户已存在')
                    }
                    })
                    
                }
                   
            },
            checkPwd(){
                let reg = /^\w{6,15}$/
                if(reg.test(this.pwd)){
                    this.pwdState="success"
                    return true
                }else{
                    this.pwdState="error"
                    return false
                }
            },
            checkRepwd(){
                let reg = /^\w{6,15}$/
                if((this.pwd==this.repwd)&&reg.test(this.repwd)){
                     this.repwdState="success"
                     return true
                }else{
                    this.repwdState="error"
                     return false
                }
            },
            checkName(){
                //验证用户名 6-15位单词字符
                let reg = /^\w{6,15}$/;
                if(reg.test(this.name)){
                    this.nameState="success"
                    return true
                }else{
                    this.nameState="error"
                    return false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>