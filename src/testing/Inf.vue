<template>
    <div>
        <div class="list" v-infinite-scroll="loadmore"
        infinite-scroll-distance="20"
        infinite-scroll-disabled="busy"
        :infinite-scroll-immediate-check="true">
        <!-- 针对于首屏不够的情况 -->
            <p class="list-item" v-for="i in n" :key="i">列表项</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                n: 50,
                busy:false
            }
        },
        methods: {
            loadmore() {
                this.busy = true//禁用后续loadmore
                console.log('loadmore...');
                setTimeout(()=>{
                    this.n +=20
                    this.busy = false
                },2000)
            }
        },
    }
</script>

<style scoped>
.list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid black;
    margin:0px 10px;
}
</style>