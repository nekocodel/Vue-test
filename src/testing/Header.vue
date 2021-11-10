<template>
    <div>
        <mt-header title="学前端 到达内" class="mheader">
            <div slot="left">
                <mt-button icon="back"></mt-button></div>
            <div slot="right">
                <router-link to="/button" style="color:white">分享</router-link></div>
        </mt-header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.mheader{
    background: rgb(0, 0, 0);
}
</style>