<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{username}}</x-header>
  <div class="main_usd">
    <div class="usd_top">
      <div><img :src="iconurl"></div>
      <div><span></span><span></span></div>
    </div>
  </div>
    
  </div>
  </div>
</template>

<script>
import { Tab, TabItem, Tabbar, TabbarItem, XHeader, Selector, Group, XInput, XButton } from 'vux'
// import { searchRecord } from '../../service/getData'
export default {
  components: {
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    Selector,
    Group,
    XInput,
    XButton,
    XHeader
  },
  data () {
    return {
      area: '',
      username: '',
      datalist: '',
      iconurl: ''
    }
  },
  mounted () {
    this.area = this.$route.params.area
    this.username = this.$route.params.username
    const that = this
    this.$axios.get('/api/searchRecord/' + this.area + '/' + this.username).then(function (response) {
      console.log(response.data)
      if (response.data.status === 0) {
        that.userdata = response.data.data
        that.iconurl = 'http://static.lolbox.duowan.com/images/profile_icons/' + that.userdata.icon + '.jpg'
        // console.log(this.datalist)
      } else {
        alert(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.usd_top{
  height:100px;
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