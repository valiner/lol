<template>	
<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">赛事详情</x-header>
	<div class="main">
		<div class="mlist">
	   <div class="teaml">
        <div class="fonts">{{gamedata.game_type}}</div>
        <div><img :src="gamedata.game_team1img" height="64" width="64"></div>
        <div class="fontb">{{gamedata.game_team1name}}</div>
      </div>
      <div class="score">
        <div class="fonts">bo{{gamedata.game_bo}}</div>
        <div class="fontb sc">{{gamedata.is_over==1?gamedata.game_score:'0:0'}}</div>
        <div class="fonts">{{gamedata.is_over==1?"已结束":"未开始"}}</div>
      </div>
      <div class="teamr">
        <div class="fonts">{{gamedata.game_remark?gamedata.game_remark:"---"}}</div>
        <div><img :src="gamedata.game_team2img" height="64" width="64"></div>
        <div class="fontb">{{gamedata.game_team2name}}</div>
      </div>
	</div>

	<div class="gvideo">
		<section v-for="item in videolist" class="gvs" @click='govideo(item)'>
			<div class="gvimg"><img src="http://img4.dwstatic.com/lol/1709/370031437200/1506076250279.jpg" width="64" height="64"></div>
			<div class="gvn">{{item.gvideo_name}}</div>
		</section>
	</div>
	</div>
</div>
</template>

<script>
import { XHeader } from 'vux'
import { gamedetails, gvideo } from '../../service/getData'
export default{
  data () {
    return {
      game_id: '',
      gamedata: {},
      videolist: ''
    }
  },
  components: {
    XHeader
  },
  async mounted () {
    this.game_id = this.$route.params.game_id
    const dd = await gamedetails(this.game_id)
    const gv = await gvideo(this.game_id)
    this.gamedata = dd.data.data
    this.videolist = gv.data.data
  },
  methods: {
    govideo: function (item) {
      // this.$router.push({ path: `/videopaly/${item.gvideo_url}` })
      this.$router.push({name: 'videopaly', params: { urls: item.gvideo_url }})
    }
  }
}
</script>

<style scoped>
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
  }
  .main{
  	padding-top: 46px;
  	position: relative;
  }
 .gvs{
 	height: 120px;
 }
 .gvimg{
 	float: left;
 	padding:20px 10px;
 }
 .gvn{
 	padding: 20px 10px;
 	text-align: left;
 }
 .teaml{
    float: left;
    padding-left: 10px;
    text-align: center;
  }
  .teamr{
    float: right;
    padding-right: 10px;
    text-align: center;
  }
  .score{
    position: absolute;
    left: 50%;
    margin-left: -35px;
    width: 70px;
    text-align: center;
    top: 70px;

  }

  .mlist{
  	padding-top: 50px;
    height: 150px;
    position: relative;
    background-color: #333;
    color: #fff
  }
  .fonts{
    font-size: 12px;
    color: #A9A9A9;
  }
  .fontb{
    font-size: 20px;
    font-weight: 500;
  }
   .sc{
  	font-size: 30px;
  }
</style>