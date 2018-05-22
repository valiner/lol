<template>
	<div>
    	<div class="item">
        <div class="author">
          <div class="left">
            <div class="author-avator" :style="{backgroundImage: 'url(' + bbsItem.user.data.head_img + ')'}"></div>
            <span class="author-name">{{bbsItem.user.data.nickname}}</span>
          </div>
          <div class="right">{{bbsItem.add_time}}</div>
        </div>
        <div class="desc">
          <p class="title">{{bbsItem.title}}</p>
          <div class="desc-icon">
            <div class="desc-item" >{{bbsItem.comments}}</div>
            <div class="desc-item">{{bbsItem.comments}}</div>
          </div>
        </div>
        
      </div>
	</div>
</template>

<script>
import { Panel } from 'vux'
export default{
  data () {
    return {
      herolist: []
    }
  },
  components: {
    Panel
  },
  methods: {
  },
  computed: {
  },
  props: ['bbsItem'],
  async mounted () {
  }
}
</script>

<style type="text/css" scoped>
	.item{
    padding: 12px 16px;
    background-color: #fff;
    margin-bottom: 10px;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }
  .author,.author .left{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .author {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .desc .desc-icon .desc-item, .desc .desc-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .desc .title[data-v-7564448d] {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    color: #333;
    text-align: justify;
 }
  .author .author-avator{
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #ececec;
}
  .author .author-name{
      font-size: 14px;
      color: #666;
      margin-left: 10px;
  }
  .author .right{
    float: right;
    font-size: 13px;
    color: #999;
  }
  .author .left{
  }
  .desc{
    padding: 16px 0 0;
  }
  .desc .desc-icon .desc-item{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 12px;
    color: #a8b8c8;
    min-width: 25%;
    max-width: 50%;
    margin-top: 10px;
}
</style>