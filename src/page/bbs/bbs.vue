<template>
  <div class="main">
  <head-menu :title="'讨论'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>
    <div class="bbs_list">
   	  <div v-for='item in bbsList'>
        <bbs-item :bbsItem="item"></bbs-item>
      </div>
    </div>
    <router-link :to="'addpost'"><span class="add_post"></span></router-link>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
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
  },
  computed: {
  },
  async mounted () {
    var res = await posts();
    this.bbsList = res.data.data;
    console.log(this.bbsList)
  }
}
</script>

<style scoped>
.main{
  background-color: #f6f6f6;
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