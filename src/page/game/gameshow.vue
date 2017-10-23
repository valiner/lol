<template>
	<div>
		<x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">全部赛事</x-header>
		<game-list></game-list>
		<div v-for="item in gamesdata" :gamedata='item'>
		{{item[0].game_date}}
		</div>	
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { gameshow } from '../../service/getData'
export default {
  data () {
    return {
      gamesdata: []
    }
  },
  components: {
    XHeader
  },
  async mounted () {
    const games = await gameshow()
    this.gamesdata = games.data.data
    console.log(games.data.data)
  }
}
</script>