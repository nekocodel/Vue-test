<template>
    <div>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="shouye">
                <img :src="require(`../assets/common/main_${selected=='shouye'?'1':'0'}.png`)" slot="icon">首页</mt-tab-item>
                <mt-tab-item id="gouwuche">
                <img v-if="selected=='gouwuche'"
                src="../assets/common/cart_1.png" slot="icon">
                <img v-else src="../assets/common/cart_0.png" slot="icon">
                购物车</mt-tab-item>
                <mt-tab-item id="wode">
                 <img :src="require(`../assets/common/me_${selected=='wode'?'1':'0'}.png`)" slot="icon">我的</mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nav_active: '1',
                selected:"shouye"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>