<template>
    <div>
        <mt-navbar v-model="nav_active">
            <mt-tab-item id="1">
                <img src="../assets/001.png" slot="icon">教育</mt-tab-item>
            <mt-tab-item id="2">
                <img src="../assets/025.png" slot="icon">科技</mt-tab-item>
            <mt-tab-item id="3">
                <img src="../assets/039.png" slot="icon">数码</mt-tab-item>
            <mt-tab-item id="4">
                <img src="../assets/054.png" slot="icon">军事</mt-tab-item>
        </mt-navbar>

        <!-- 面板容器组件 tabContainer -->
        <mt-tab-container v-model="nav_active" style="margin-top:5px">
            <mt-tab-container-item id='1'>面板1</mt-tab-container-item>
            <mt-tab-container-item id='2'>面板2</mt-tab-container-item>
            <mt-tab-container-item id='3'>面板3</mt-tab-container-item>
            <mt-tab-container-item id='4'>面板4</mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nav_active: "1"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>