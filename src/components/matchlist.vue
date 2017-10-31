<template>
	<div>
		<section v-for='item in gamedata' class="mlist" @click='matchdetails(item)'>
      <div class="teaml">
        <div class="fonts">{{item.game_type}}</div>
        <div><img :src="item.team1img" height="64" width="64"></div>
        <div class="fontb">{{item.team1name}}</div>
      </div>
      <div class="score">
        <div class="fonts">bo{{item.game_bo}}</div>
        <div class="fontb">{{item.is_over==1?item.game_score:'0:0'}}</div>
        <div class="fonts">{{item.is_over==1?"已结束":"未开始"}}</div>
      </div>
      <div class="teamr">
        <div class="fonts">{{item.game_remark?item.game_remark:"---"}}</div>
        <div><img :src="item.team2img" height="64" width="64"></div>
        <div class="fontb">{{item.team2name}}</div>
      </div>
    </section>
	</div>
</template>

<script>
  export default{
    data () {
      return {

      }
    },
    props: ['gamedata'],
    methods: {
      matchdetails: function (item) {
        this.$router.push({ path: `/matchdetails/${item.game_id}` })
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
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
    margin-left: -25px;
    width: 50px;
    text-align: center;
    top: 44px;

  }
  .mlist{
    height: 130px;
    position: relative;
  }
  .fonts{
    font-size: 12px;
    color: #A9A9A9;
  }
  .fontb{
    font-size: 20px;
    font-weight: 500;
  }


</style>