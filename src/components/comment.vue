<template>
  <div class="main">
  <loading class="loading" v-if="showloading"></loading>

  <div v-for="item in list">
    <div class="item">
      <div class="author">
          <div class="left">
            <div class="author-avator" :style="{backgroundImage: 'url(' + item.user.data.head_img + ')'}"></div>
            <span class="author-name">{{item.user.data.nickname}}</span>
          </div>
          <div class="right">{{item.created_at}}</div>
        </div>
        <div class="desc">
          <p class="title">{{item.content}}</p>
          <div class="desc-icon">
          
            <div class="desc-item" @click="goComments(item.id)">{{item.commentcount.meta.count}} <icon slot="icon" icon-style="icons" icon-class="xiaoxi"></icon></div>
          </div>
        </div>
      </div>
    
  </div>


  <router-link :to="'addpost'"><span class="add_post"></span></router-link>
    
  </div>
</template>

<script>
import icon from '../page/common/icon'

export default {
  components: {
    icon,
  },
  data () {
    return {
    }
  },
  methods: {
    goComments : function(id){
      this.$router.push({path: `/comments/${id}/comments?post_id=${this.post_id}`});
    }
  },
  computed: {
  },
  props: ['list','post_id'],
  async mounted () {

  }
}
</script>

<style scoped>
.item{
    padding: 12px 16px;
    background-color: #fff;
    margin-bottom: 5px;
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