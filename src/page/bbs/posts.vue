<template>
  <div class="main-post">
  <head-menu :title="'评论'" :showback="true" :goback="'true'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>
    <div class='posts'>
        <div class="post_title">{{post.title}}</div>
        <div class="info">
          <span class="post_name">{{post.user.data.nickname}}</span>
          <span class="post_date">{{post.created_at}}</span>
        </div>  
        <div class="post_content">
          {{post.content}}
         
        </div>
    </div>

    <comment :list="comments" :post_id="post_id">
      
    </comment>



  <router-link :to="{path:'/addpost',query: {type: 'reply',id: post_id}}" :title="回复帖子"><span class="add_post"><icon slot="icon" icon-style="iconm" icon-class="xiugai"></icon></span></router-link>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
import { postdetails } from '../../service/getData'
import { commentlist } from '../../service/getData'
import headMenu from '../../components/headMenu'
import comment from '../../components/comment'
import icon from '../common/icon'
import loading from '../../components/loading'

export default {
  components: {
    headMenu,
    comment,
    icon,
    Tabbar,
    TabbarItem,
    loading
  },
  data () {
    return {
      post:{},
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
     this.post_id = this.$route.params.id;
     var res = await postdetails(this.post_id);
     this.post = res.data.data;
     var res = await commentlist(this.post_id);
     this.comments = res.data.data;
  }
}
</script>

<style scoped>
.main-post{
  padding-top: 46px;
  background-color: #f6f6f6;
}
.posts{
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
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
.post_title{
    font-size: 30px;
    text-align: center;
    padding: 5px 10px;
  }
  .post_form{
    float: left;
  }
  .post_date{
    float: right;
  }
  .info{
    font-size: 12px;
    height: 16px;
    line-height: 16px;
    color: #cccccc;
    padding: 0 10px;
  }
  .post_content{
    padding: 20px 10px;
    font-size: 16px;
    line-height: 24px;
      overflow: hidden;
  }

  



</style>