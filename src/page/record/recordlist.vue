<template>
	<div>
	<div v-if='reload'><button @click='load'>刷新</button>
	</div>
	<div v-else>
	 <group label-width='5em' title='历史战绩'>
       <game-list :gamedata='gamedata'></game-list>
     </group>
    </div>
	</div>
</template>

<script>
import { XHeader, Group, XButton, Blur, Cell } from 'vux'
import { recordlist } from '../../service/getData'
import gameList from '../../components/gamelist'
export default{
  data () {
    return {
      areaid: '',
      userid: '',
      reload: false,
      gamedata: []
    }
  },
  components: {
    XHeader,
    Group,
    XButton,
    Blur,
    Cell,
    gameList
  },
  mounted () {
    this.areaid = this.$route.params.areaid
    this.userid = this.$route.params.userid
    recordlist(this.areaid, this.userid).then(res => {
      if (!res.data) {
        alert('服务器繁忙，稍后再试')
      } else if (res.data.status === 0) {
        this.gamedata = res.data.data
        this.reload = false
      } else {
        this.reload = true
      }
    })
  },
  methods: {
    load: function (argument) {
      window.location.reload()
    }
  }
}
</script>