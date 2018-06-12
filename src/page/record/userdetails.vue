<template>
  <div style="position: relative">
  <div v-if='reload'><button @click='load'>刷新</button></div>
  <div v-else>
  <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{username}}</x-header>
  <div class="main_usd">
    <div class="usd_top">
      <blur :blur-amount=40 :url="iconurl">
      <p class="center"><img :src="iconurl"></p>
      </blur>
      <div class="usd_info">
        <span class="sp1">{{datalist.player_list[0].game_zone.alias}}:{{datalist.player_list[0].pn}}</span>
        <span class="sp2">段位：{{datalist.player_list[0].formatted_ranked_history.s7.t_zh}}{{datalist.player_list[0].formatted_ranked_history.s7.r_zh}}</span>
      </div>
    </div>
    <div class="usd_history" v-if='datalist.player_list[0].formatted_ranked_history'>
      <group label-width="5em" title="战绩概要">
      <cell title="匹配" value="">胜场：{{datalist.player_list[0].total_win_normal}}  总场: {{datalist.player_list[0].total_win_normal+datalist.player_list[0].total_lose_normal}} </cell>
      <cell title="S7单双排位" value="">胜场：{{datalist.player_list[0].formatted_ranked_history.s7.w}}  总场: {{datalist.player_list[0].formatted_ranked_history.s7.w+datalist.player_list[0].formatted_ranked_history.s7.lo}} 段位:{{datalist.player_list[0].formatted_ranked_history.s7.t_zh}}{{datalist.player_list[0].formatted_ranked_history.s7.r_zh}}</cell>
      <cell title="S7灵活排位" value="">胜场：{{datalist.player_list[0].formatted_ranked_history.flex_sr.w}}  总场: {{datalist.player_list[0].formatted_ranked_history.flex_sr.w+datalist.player_list[0].formatted_ranked_history.flex_sr.lo}} 段位:{{datalist.player_list[0].formatted_ranked_history.flex_sr.t_zh}}{{datalist.player_list[0].formatted_ranked_history.flex_sr.r_zh}}</cell>
      <cell title="s6排位" value="">胜场：{{datalist.player_list[0].formatted_ranked_history.s6.w}}  总场: {{datalist.player_list[0].formatted_ranked_history.s7.w+datalist.player_list[0].formatted_ranked_history.s6.lo}} 段位:{{datalist.player_list[0].formatted_ranked_history.s6.t_zh}}{{datalist.player_list[0].formatted_ranked_history.s6.r_zh}}</cell>
     </group>    
    </div>
    <div>
     <group label-width='5em' title='最近战绩' v-if='datalist.player_list[0].game_recent_list'>
       <game-list :gamedata='datalist.player_list[0].game_recent_list'></game-list>
       <div class="lookall" @click='lookall'>
         查看全部
       </div>
     </group>
     <group label-width='5em' title='最近战绩' v-else>
        最近无比赛记录
     </group>
      
    </div>
  </div>
    
  </div>
  </div>
  </div>
</template>

<script>
import { XHeader, Selector, Group, XInput, XButton, Blur, Cell } from 'vux'
// import { searchRecord } from '../../service/getData'
import gameList from '../../components/gamelist'
const ranklist = () => ['青铜', '白银', '黄金', '白金', '钻石', '大师', '王者']
export default {
  components: {
    gameList,
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
      areaid: '',
      userid: '',
      datalist: {},
      iconurl: '',
      ranklist: ranklist(),
      reload: false
    }
  },
  mounted () {
    this.areaid = this.$route.params.areaid
    this.userid = this.$route.params.userid
    // dx3/2955752234
    // this.areaid = 'dx3'
    // this.userid = 2955752234

    const that = this
    this.$axios.get('/api/lsDetails/' + this.areaid + '/' + this.userid + '/').then(function (response) {

      if (!response.data) {
        alert('服务器繁忙，稍后再试')
      } else if (response.data.status === 0) {
        that.datalist = response.data.data
        that.iconurl = 'http://static.lolbox.duowan.com/images/profile_icons/' + that.datalist.player_list[0].icon + '.jpg'
        that.reload = false
        // console.log(this.datalist)
      } else {
        that.reload = true

      }
    })
    .catch(function (error) {

    })
  },
  methods: {
    lookall: function (argument) {
      this.$router.push({ path: `/recordlist/${this.areaid}/${this.userid}` })
    },
    load: function (argument) {
      window.location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.lookall{
  height: 50px;
  text-align:center;
  font-size:16px;
  padding-top:25px;
}
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