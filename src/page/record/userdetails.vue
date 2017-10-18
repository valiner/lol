<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{username}}</x-header>
  <div class="main_usd">
    <div class="usd_top">
      <blur :blur-amount=40 :url="iconurl">
      <p class="center"><img :src="iconurl"></p>
      </blur>
      <div class="usd_info">
        <span class="sp1">{{datalist.game_zone.alias}}:{{datalist.pn}}</span>
        <span class="sp2">段位：{{ranklist[datalist.tier-1]}}{{datalist.rank}}</span>
      </div>
    </div>
    <div class="usd_history" v-if='datalist.formatted_ranked_history'>
      <group label-width="5em" title="战绩概要">
      <cell title="S7单双排" value="">胜场：{{datalist.formatted_ranked_history.s7.w}}  总场: {{datalist.formatted_ranked_history.s7.w+datalist.formatted_ranked_history.s7.lo}} 段位:{{ranklist[datalist.tier-1]}}{{datalist.rank}}</cell>
      <cell title="s6排位" value="">胜场：{{datalist.formatted_ranked_history.s6.w}}  总场: {{datalist.formatted_ranked_history.s7.w+datalist.formatted_ranked_history.s6.lo}} 段位:{{ranklist[datalist.formatted_ranked_history.s6.t-1]}}</cell>
     </group>
      
    </div>
  </div>
    
  </div>
  </div>
</template>

<script>
import { Tab, TabItem, Tabbar, TabbarItem, XHeader, Selector, Group, XInput, XButton, Blur, Cell } from 'vux'
// import { searchRecord } from '../../service/getData'
const ranklist = () => ['青铜', '白银', '黄金', '白金', '钻石', '大师', '王者']
export default {
  components: {
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    Selector,
    Group,
    XInput,
    XButton,
    XHeader,
    Blur,
    Cell
  },
  data () {
    return {
      area: '',
      username: '',
      datalist: {},
      iconurl: '',
      ranklist: ranklist()
    }
  },
  mounted () {
    this.area = this.$route.params.area
    this.username = this.$route.params.username
    const that = this
    this.$axios.get('/api/searchRecord/' + this.area + '/' + this.username).then(function (response) {
      console.log(response.data)
      if (response.data.status === 0) {
        that.datalist = response.data.data
        that.iconurl = 'http://static.lolbox.duowan.com/images/profile_icons/' + that.datalist.icon + '.jpg'
        // console.log(this.datalist)
      } else {
        alert(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.center {
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-size: 18px;
}
.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
.usd_info{
}
.usd_info .sp1{
  position:absolute;
  bottom:15px;
  left:20px
}
.usd_info .sp2{
  position:absolute;
  right:20px;
  bottom:15px;
}
.usd_top{
  position:relative;
  height:200px;
}
.main_usd{
  padding-top:46px;
  height: 100%;
  position: relative;
  overflow: auto;
}
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
}
.vux-tab {
   width: 100%;
    position: fixed;
    left: 0px;
    top: 40px;
    z-index: 100;
}
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>