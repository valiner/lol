<template>
	<div><x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">视频播放</x-header>
	<div class="main">
	<iframe frameborder="0" width="100%" height="" :src="url" allowfullscreen></iframe>
	<div>评论</div>
	</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
export default{
  data () {
    return {
      url: ''
    }
  },
  components: {
    XHeader
  },
  mounted () {
    this.url = this.$route.params.url
  }
}
</script>
<style scoped>
.main{
}
</style>