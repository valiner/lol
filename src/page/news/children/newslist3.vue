<template>
	<div>
       <loading class="loading" v-if="showloading"></loading>
  
       <router-link v-for="item in list" :to="'/newsdetails/'+item.id" class="item">
       <div v-if="item.new_pic">
          <div class="info">
            <div class="title">
              {{item.new_title}}
            </div>
            <span>{{item.new_from}}</span>

          </div>
          <div class="dimg">
            <img :src="item.new_pic" height="72" width="100">
          </div>
        </div>
        <div v-else>
          <div class="info info2">
            <div class="title">
              {{item.new_title}}
            </div>
            <span>{{item.new_from}}</span>

          </div>
        </div>
  
       </router-link>
        <load-more :tip="tip" :show-loading="true" v-if="showloadmore"></load-more>

      

	</div>
</template>

<script>
import { etmNews } from '../../../service/getData'
import { Panel, Group, Radio, LoadMore} from 'vux'
import loading from '../../../components/loading'
export default{
  data () {
    return {
      tip:"正在加载",
      showloading: true,
      showloadmore: false,
      currentPage: 1,
      lastPage: 1,
      type: '5',
      bottom: 0,
      list: []
    }
  },
  components: {
    Panel,
    LoadMore,
    Group,
    Radio,
    loading
  },
  methods: {
    loadMore(){
    let _this = this;
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
        var clientHeight=document.documentElement.clientHeight; //document.documentElement获取数据
        //var scrollTop=document.documentElement.scrollTop; //document.documentElement获取数据
        //兼容手机浏览器
        if(document.body.scrollTop){ 
        var scrollTop=document.body.scrollTop;
        }
        else{ 
        var scrollTop=document.documentElement.scrollTop;
        }
        var scrollHeight=document.documentElement.scrollHeight;//document.documentElement获取数据
        if(clientHeight+scrollTop+20>=scrollHeight){
            this.currentPage++;
            new etmNews(this.currentPage).then(res=>{

                if (res.data.data.length == 0) {
                  _this.tip="暂无数据";
                
                }else{
                   for (var i = res.data.data.length - 1; i >= 0; i--) {
                  _this.list.push(res.data.data[i]);
                  }
                }
                
            })
        }
    },100);
   },
  },
  watch: {
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.loadMore,true);
  },
  created () {
  },
  async mounted () {
    window.addEventListener('scroll',this.loadMore,true);
    const newdata = await etmNews(this.currentPage)
    this.list = newdata.data.data
    this.showloading = false
    this.showloadmore = true
  }
}
</script>

<style type="text/css" scoped>
	.weui-media-box__info{
		margin-top: -7px;
    	padding-bottom: 0px;
	}
	.weui-media-box{
		padding: 5px;
	}
  .item{
    position: relative;
    height: 80px;
    padding: 5px;
    margin: 0 10px;
    border-bottom: 1px solid #c7c7c7;
    display: block;

  }
  .dimg{
     position: absolute;
     right: 14px;
     top: 9px;
     height: 72px;
     width:100px;
  }
  .dimg img{
    border-radius: 5px;
  }
  .info{
    height: 80px;
    margin-right: 120px;
  }
  .info2{
    margin: 0;
  }
  .title{
    height: 50px;
    overflow: hidden;
    padding-top: 2px;
  }
  .info span{
    position: absolute;
    left: 2px;
    bottom: 5px;
    font-size: 10px;
    color: #c7c7c7;
  }
</style>