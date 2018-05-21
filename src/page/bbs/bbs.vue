<template>
  <div class="main">
  <head-menu :title="'讨论'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>
    <div class="bbs_list">
   	  <div v-for='item in bbsList'>
        <bbs-item :bbsItem="item"></bbs-item>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
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
      bbsList: [
        { "title" : "测试",
          "headImg" : "/static/img/ez.jpg",
          "username" : "ss",
          "view" : "11",
          "hf" : "12",
          "time" : "10"
        }, { "title" : "测试",
          "headImg" : "/static/img/ez.jpg",
          "username" : "ss",
          "view" : "11",
          "hf" : "12",
          "time" : "10"
        }
      ]
      // showloading: true
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
  }
}
</script>

<style scoped>
.main{
  background-color: #f6f6f6;
}



</style>