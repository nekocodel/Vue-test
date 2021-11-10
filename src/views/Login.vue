<template>
    <div>
        <mt-header title="登录">
            <div slot="left"><mt-button  icon="back"></mt-button></div>
            <router-link to="/register" slot="right">登录</router-link>
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
        <mt-button type="primary" size="large" @click="checkForm">登录</mt-button>
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
            }
        },
        methods:{
            checkForm(){
                // 验证表单
                if(this.checkName()&&this.checkPwd()){
                   
                    let uname = this.name
                    let upwd = this.pwd
                    this.axios.post('/login',
                    `username=${uname}&password=${upwd}`).then(res=>{
                        console.log(res);
                        if(res.data.code==200){
                           this.$toast({
                               message:'登录成功',
                               duration:3000,
                               position:'bottom'});
                               this.$store.commit('loginOK',this.name)
                               //将islogin与name存入sessionStorage
                               sessionStorage.setItem('islogin',true)
                               sessionStorage.setItem('name',this.name)
                        this.$router.push('/')
                        }else{
                        //注册失败
                        this.$messagebox('提示','账户密码输入错误')
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