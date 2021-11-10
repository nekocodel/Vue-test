<template>
    <div>
        <!-- Header标题栏 -->
        <mt-header title="学前端，到学问">
            <div slot="right" v-if="$store.state.isLogin">欢迎:{{$store.state.name}}</div>
            <div slot="right" v-else>
                <router-link to="/register" class="link">注册&nbsp;</router-link>
                <router-link to="/login" class="link">登录</router-link>
            </div>
        </mt-header>
         <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img :src="require(`@/assets/common/main_${selected=='home'?'1':'0'}.png`)" slot="icon">首页</mt-tab-item>
            <mt-tab-item id="me">
                <img :src="require(`@/assets/common/me_${selected=='me'?'1':'0'}.png`)" slot="icon">我的</mt-tab-item>
        </mt-tabbar>
         <mt-tab-container>
                <Nav/>
        </mt-tab-container>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
    export default {
  components: {Nav},
        data() {
            return {
                nav_active: '1',
                selected:"home",
                cats:[],
            }
        },
        activated(){
            this.selected = "home"
        },
        watch: {
            selected(newValue, oldValue) {
                console.log(newValue);
                if(newValue=='me'){
                    this.selected = newValue
                    this.$router.push('/me')
                }
            }
        },

    }
</script>

<style scoped>
.link{
    color: #fff;
}
</style>