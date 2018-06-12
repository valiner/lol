<template>
  <div class="main">
  <head-menu :title="'讨论'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>
  <div class="chat" @click="gochat">聊天室</div>

  

    <div class="bbs_list">
   	  <div v-for='item in bbsList'>
        <bbs-item :bbsItem="item"></bbs-item>
      </div>
    </div>
    <router-link :to="{path:'/addpost',query: {type: 'post'}}"><span class="add_post"><icon slot="icon" icon-style="iconm" icon-class="xiugai"></icon></span></router-link>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'
import { posts } from '../../service/getData'
import headMenu from '../../components/headMenu'
import bbsItem from '../../components/bbsItem'
import icon from '../common/icon'
import loading from '../../components/loading'

export default {
  components: {
    headMenu,
    bbsItem,
    icon,
    Tabbar,
    TabbarItem,
    loading
  },
  data () {
    return {
      bbsList: []
      // showloading: true
    }
  },
  methods: {
    gochat: function(){
      this.$router.push({'path':'/checkuser'});
    }
  },
  computed: {
  },
  activated: function() {  
    new posts().then(res => {
      this.bbsList = res.data.data;
    })
  },
  async mounted () {
    var res = await posts();
    this.bbsList = res.data.data;
  }
}
</script>

<style scoped>
.chat{
  color: #fff;
  font-weight: 700;
  text-align: center;
  height: 60px;
  line-height: 60px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 5px;
  background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528438941344&di=8ebe2d073918d2447705877ba1234dc8&imgtype=0&src=http%3A%2F%2Fimg3.dwstatic.com%2Flol%2F1606%2F330692227927%2F1466737379976.jpg);
  -moz-background-size:360px 60px; /* 老版本的 Firefox */
  background-size:360px 60px;
}
.main{
  background-color: #f6f6f6;
   padding-top:46px;
   padding-bottom: 77px;
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




</style>