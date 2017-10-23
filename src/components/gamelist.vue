<template>
	<div v-if='gamedata'>
			<section v-for="item in gamedata" style="border-bottom: 1px solid rgb(189, 176, 136); width: 100%; overflow: hidden; padding: 5px 0px;list-style-type:none;">
			<div style="display: block; width: 20%; float: left; text-align: center;">
				<img :src="'http://ossweb-img.qq.com/images/lol/img/champion/'+item.champion.name+'.png'" style="width: 80%;">
			</div>
			<div style="display: block; width: 80%; float: left; font-size: 14px; position: relative;">
				{{item.champion.display_name}} {{item.champion.title}}
				<br/>
				{{item.created}}
				<br/>
				{{item.game_type.name_cn}}
				<span class="result" :class="{active: item.battle_result}">{{item.battle_result?'胜利':'失败'}}</span>
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
  mounted () {
  },
  props: ['gamedata']
}
</script>

<style scoped>
 .result{
 	color: rgb(0, 204, 153); 
 	position: absolute; 
 	right: 10px; 
 	top: 10px; 
 	font-size: 16px;
 }
 .active
 {
 	color:rgb(204, 0, 51);
 }

</style>