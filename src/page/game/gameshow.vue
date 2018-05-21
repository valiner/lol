<template>
	<div>
    <head-menu :title="'全部赛事'"></head-menu>
    <div class='main'>
    <loading v-if="showloading"></loading>
		<div v-for="item in gamesdata">
		    <div class="title">{{item[0].game_date}}</div>
    <match-list :gamedata='item'></match-list>
		</div>	
	</div>


  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
import { gameshow } from '../../service/getData'
import matchList from '../../components/matchlist'
import headMenu from '../../components/headMenu'
import loading from '../../components/loading'
import icon from '../common/icon'
export default {
  data () {
    return {
      gamesdata: [],
      showloading: true
    }
  },
  components: {
    XHeader,
    matchList,
    Tabbar,
    TabbarItem,
    icon,
    loading,
    headMenu
  },
  async mounted () {
    const games = await gameshow()
    this.gamesdata = games.data
    console.log(games);
    this.showloading = false
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