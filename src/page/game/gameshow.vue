<template>
	<div>
		<x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">全部赛事</x-header>
    <div class='main'>
		<div v-for="item in gamesdata">
		    <div class="title">{{item[0].game_date}}</div>
    <match-list :gamedata='item'></match-list>
		</div>	
	</div>

     <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">咨询</span>
      </tabbar-item>
      <tabbar-item link="gameshow" selected>
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">赛事</span>
      </tabbar-item>
      <tabbar-item link="recordshow">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">战绩</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">其他</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
import { gameshow } from '../../service/getData'
import matchList from '../../components/matchlist'
export default {
  data () {
    return {
      gamesdata: []
    }
  },
  components: {
    XHeader,
    matchList,
    Tabbar,
    TabbarItem
  },
  async mounted () {
    const games = await gameshow()
    this.gamesdata = games.data.data
    console.log(games.data.data)
  }
}
</script>

<style scoped>
 .title{
   text-align: center;
   background-color: #e0e0e0;
   height: 20px;
   font: 14px/20px Verdana;
 }
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
  .main{
    padding-top: 46px;
    padding-bottom: 77PX;
  }
   .weui-tabbar{
  position:fixed;
}
</style>