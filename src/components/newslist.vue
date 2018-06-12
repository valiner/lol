<template>
	<div>
       <loading class="loading" v-if="showloading"></loading>
  
       <router-link v-for="item in list" :to="'/newsdetails/'+item.newid" class="item">
       <div v-if="item.src">
          <div class="info">
            <div class="title">
              {{item.title}}
            </div>
            <span>{{item.meta.source}}</span>

          </div>
          <div class="dimg">
            <img :src="item.src" height="72" width="100">
          </div>
        </div>
        <div v-else>
          <div class="info info2">
            <div class="title">
              {{item.title}}
            </div>
            <span>{{item.meta.source}}</span>

          </div>
        </div>
  
       </router-link>

      

	</div>
</template>

<script>
import { verNews, newNews, lplNews, etmNews } from '../service/getData'
import { Panel, Group, Radio } from 'vux'
import loading from './loading'
export default{
  data () {
    return {
      newsdata: [],
      showloading: true,
      currentPage: 0,
      lastPage: 1,
      type: '5',
      bottom: 0,
      list: []
    }
  },
  components: {
    Panel,
    Group,
    Radio,
    loading
  },
  methods: {
  },
  props: ['newselected'],
  watch: {
  },
  created () {
  },
  async mounted () {
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    this.bottom = 938 - height + 160
    window.addEventListener('scroll', this.handleScroll)
    if (this.newselected === '最新') {
      const newdata = await newNews()
      this.lastPage = newdata.data.message.lastPage
      this.currentPage = newdata.data.message.currentPage
      this.list = newdata.data.data
    }
    if (this.newselected === '电竞') {
      const lpldata = await lplNews()
      this.list = lpldata.data.data
    }
    if (this.newselected === '娱乐') {
      const etmdata = await etmNews()
      this.list = etmdata.data.data
    }
    if (this.newselected === '版本') {
      const verdata = await verNews()
      this.list = verdata.data.data
    }
    this.showloading = false
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