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
import { etmNews } from '../../../service/getData'
import { Panel, Group, Radio } from 'vux'
import loading from '../../../components/loading'
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
    // handleScroll () {
    //   console.log(window.scrollY)
    //   console.log(this.bottom)
    //   if (window.scrollY >= this.bottom) {
    //     console.log('load-more')
    //     let page = this.currentPage + 1
    //     let that = this
    //     this.$parent.$axios.get('/api/newNews?page=' + page).then(function (response) {
    //       // his.list = newdata.data.data
    //       that.currentPage = page
    //       that.list = [...that.list, ...response.data.data]
    //       that.bottom += 938
    //       console.log(that.list)
    //     })
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    //   }
    // },
    // onImgError (item, $event) {
    //   console.log(item, $event)
    // },
    // clickItem (item) {
    //   this.$parent.$router.push({ path: `/newsdetails/${item.newid}` })
    // }
  },
  watch: {
  },
  created () {
    console.log('xxxaa')
  },
  async mounted () {
    // console.log(this.$axios)
    // this.$axios.get('/api/school').then(function (response) {
    //   console.log(7777777777777777)
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    const newdata = await etmNews()
    this.lastPage = newdata.data.message.lastPage
    this.currentPage = newdata.data.message.currentPage
    this.list = newdata.data.data
    console.log(this.list)
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