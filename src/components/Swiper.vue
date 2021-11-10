<template>
    <div>
        <mt-swipe 
        :style="{height:h}" 
        :continuous="true" 
        :showIndicators="false">
        <!-- 针对于首屏不够的情况 -->
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

        <div>
            <article-item :articles="items"></article-item>
        </div>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue';
    export default {
  components: { ArticleItem },
        props:["items"],
        data() {
            return {
                h: '210px',
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
            this.h = swipeH;


        },
    }
</script>

<style scoped>
img{
    width: 100%;
}
</style>