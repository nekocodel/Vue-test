<template>
    <div>
        <mt-navbar v-model="nav_active">
            <mt-tab-item 
            :id="item.id+''" 
            v-for="(item,i) in cats" :key="i">{{item.category_name}}</mt-tab-item>
        </mt-navbar>
         <mt-tab-container 
         style="margin-top:3px"
         class="item" 
         :style="{height:hv}"
         v-infinite-scroll="loadmore"
         infinite-scroll-distance="20"
         infinite-scroll-disabled="busy"
         :infinite-scroll-immediate-check="true">
            <mt-tab-container-item><swiper :items="data"/></mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import Swiper from './Swiper.vue'
    export default {
  components: { Swiper },
         data() {
            return {
                nav_active: "1",
                hv:'',
                cats:[],
                data:"",
                page:1,
                busy:false//控制是否禁用无限滚动
            }
        },
        mounted(){
            let screenH = window.screen.height;
            this.hv = (screenH-141)+"px"; 
            // 加载类别列表
            this.loadCats();
            // this.axios.get('/articles?cid=1&page=1').then(res=>{   
            //     this.data = res.data.results;
            // })
            this.loadArticles(1,1,(data)=>{
                this.data = data
            })
        },
        //调整mintui无限滚动的问题
        activated(){
            this.busy = false
        },
        deactivated(){
            this.busy = false
        },
        methods: {
            loadCats() {
                this.axios.get('/category').then(res=>{
                    // console.log(res);
                    this.cats = res.data.results
                })
            },
            loadmore(){
                this.busy = true;
                this.page++;
                let cid = this.nav_active;
                let page = this.page;
                // console.log(`loadmore() cid:${cid} page:${page}`);
                // this.axios.get(`/articles?cid=${cid}&page=${page}`).then(res=>{
                //     //将结果追加到当前文字列表的末尾 打散添加
                //     this.data.push(...res.data.results);
                //     console.log("loadmore");
                //     this.busy = false //数据请求完之后再重新启用
                // })
                this.loadArticles(cid,page,(data)=>{
                    this.data.push(...data);
                    this.busy = false
                })
            },
        
            //封装加载文章列表
            loadArticles(cid,page,callback){
                //弹出等待框
                this.$indicator.open({
                    text:'加载中...',
                    spinnerType:'fading-circle'
                })
                this.axios.get(`/articles?cid=${cid}&page=${page}`).then(res=>{
                    let arts = res.data.results
                    callback(arts)//自定义函数 当封装的函数中有异步任务的时候需要采用回调
                    this.$indicator.close()
                })
            }
        },
        watch:{
            //监听顶部导航
            nav_active(newValue,oldValue){
                // console.log(newValue);
                // newValue是当前选中项的id属性，也是该类别的数据库id字段值
                this.loadArticles(newValue,1,(data)=>{
                    this.data = data;
                })
            }
        }
    }
</script>

<style scoped>
.item{
    text-align: center;
    overflow-Y: auto;
}
</style>