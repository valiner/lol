<template>
  <div class="main">
  <head-menu :title="'评论'" :showback="'true'" :goback="'true'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>

  
    <div v-for="item in comments">
    <div class="item">
      <div class="author">
          <div class="left">
            <div class="author-avator" :style="{backgroundImage: 'url(' + item.user.data.head_img + ')'}"></div>
            <span class="author-name">{{item.user.data.nickname}}</span>
          </div>
          <div class="right">{{item.add_time}}</div>
        </div>
        <div class="desc">
          <p class="title">{{item.content}}</p>
          <div class="desc-icon">

          </div>
        </div>
      </div>
    
  </div>


  <router-link :to="{path:'/addpost',query: {type: 'replycomment',post_id: post_id,parent_id: comment_id}}" :title="回复帖子"><span class="add_post"><icon slot="icon" icon-style="iconm" icon-class="xiugai"></icon></span></router-link>
    
  </div>
</template>

<script>
import { commentChildList } from '../../service/getData'
import headMenu from '../../components/headMenu'
import comment from '../../components/comment'
import icon from '../common/icon'
import loading from '../../components/loading'

export default {
  components: {
    icon,
    headMenu,
    comment,
    icon,
    loading
  },
  data () {
    return {
      comment_id: '',
      post_id: '',
      comments: []
      // showloading: true
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
     this.comment_id = this.$route.params.id;
     this.post_id = this.$route.query.post_id;
     var res = await commentChildList(this.comment_id);
     this.comments = res.data.data;

  }
}
</script>

<style scoped>
.main{
  padding-top: 46px;
}
.add_post{
    position: fixed;
    bottom: 73px;
    right: 17px; 
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #ececec;
}
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