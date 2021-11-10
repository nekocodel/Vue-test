<template>
    <div>
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="/images/1.jpg"></van-swipe-item>
  <van-swipe-item><img src="/images/2.jpg"></van-swipe-item>
  <van-swipe-item><img src="/images/3.jpg"></van-swipe-item>
</van-swipe>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  img{
      width: 100%;
  }
</style>