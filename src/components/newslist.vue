<template>
	<div>
    	<panel :list="list" :type="type" @on-img-error="onImgError" @on-click-item="clickItem"></panel>
	</div>
</template>

<script>
import { verNews, newNews, lplNews, etmNews } from '/lol/src/service/getData'
import { Panel, Group, Radio } from 'vux'
export default{
  data () {
    return {
      newsdata: [],
      currentPage: 0,
      lastPage: 1,
      type: '5',
      bottom: 0,
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        newid: 23,
        meta: {
          source: '来源信息:duowan',
          date: '时间'
        }
      }, {
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题yi',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        newid: 23,
        meta: {
          source: '来源信息:duowan',
          date: '时间'
        }
      }]
    }
  },
  components: {
    Panel,
    Group,
    Radio
  },
  methods: {
    handleScroll () {
      console.log(window.scrollY)
      console.log(this.bottom)
      if (window.scrollY >= this.bottom) {
        console.log('load-more')
        let page = this.currentPage + 1
        let that = this
        this.$parent.$axios.get('/api/newNews?page=' + page).then(function (response) {
          // his.list = newdata.data.data
          that.currentPage = page
          that.list = [...that.list, ...response.data.data]
          that.bottom += 938
          console.log(that.list)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    clickItem (item) {
      this.$parent.$router.push({ path: `/newsdetails/${item.newid}` })
    }
  },
  props: ['newselected'],
  watch: {
  },
  async mounted () {
    // console.log(this.$axios)
    // this.$axios.get('/api/school').then(function (response) {
    //   console.log(7777777777777777)
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    this.bottom = 938 - height + 160
    window.addEventListener('scroll', this.handleScroll)
    if (this.newselected === '最新') {
      const newdata = await newNews()
      this.lastPage = newdata.data.message.lastPage
      this.currentPage = newdata.data.message.currentPage
      this.list = newdata.data.data
    }
    if (this.newselected === '电竞') {
      const lpldata = await lplNews()
      this.list = lpldata.data.data
    }
    if (this.newselected === '娱乐') {
      const etmdata = await etmNews()
      this.list = etmdata.data.data
    }
    if (this.newselected === '版本') {
      const verdata = await verNews()
      this.list = verdata.data.data
    }
  }
}
</script>

<style type="text/css" scoped>
	.weui-media-box__info{
		margin-top: -7px;
    	padding-bottom: 0px;
	}
	.weui-media-box{
		padding: 5px;
	}
</style>