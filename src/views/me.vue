<template>
    <div>
        <!-- Header标题栏 -->
        <mt-header title="学前端，到达内">
            <div slot="right">
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
            面板2
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
                selected:"me",
            }
        },
        activated(){
            this.selected = "me"
        },
        watch: {
            selected(newValue, oldValue) {
                console.log(newValue);
                if(newValue=='home'){
                    this.$router.push(`/`)
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