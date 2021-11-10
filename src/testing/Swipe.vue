<template>
    <div>
        <mt-swipe 
        :style="{height:h}" 
        :speed="3000" 
        :auto="5000" 
        :continuous="true" 
        :showIndicators="false">
            <mt-swipe-item>
                <img src="/images/1.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/images/2.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/images/3.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                h: '210px'
            }
        },
        // 页面挂载完毕后执行
        mounted(){
            // 根据屏幕的宽度动态计算轮播图容器的高度
            // 设置data.h
            let screenW = window.screen.width;
            let picW = 1242;
            let picH = 698;
            let swipeH =Math.floor(picH*screenW/picW)+"px";
            this.h = swipeH
        }
    }
</script>

<style scoped>
img{
    width: 100%;
}
</style>