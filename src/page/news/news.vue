<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">资讯</x-header>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="newselected === item" v-for="(item, index) in list2" @click.native="newselected = item">{{item}}</tab-item>
      </tab>
          <div v-for="(item, index) in list2" :key="index" v-if="newselected === item" class="panel-new">
            <news-list :newselected="newselected" :listname='list'></news-list> 
          </div>

    </div>
 
    <tabbar>
      <tabbar-item selected>
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">咨询</span>
      </tabbar-item>
      <tabbar-item link="gameshow">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">赛事</span>
      </tabbar-item>
      <tabbar-item link="recordshow">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">战绩</span>
      </tabbar-item>
       <tabbar-item link="data">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">资料</span>
      </tabbar-item>
      <tabbar-item link="tongji">
       <icon slot="icon" icon-style="iconf" icon-class="fuwurizhi"></icon>
        <span slot="label">统计
        </span>
       
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Tabbar, TabbarItem, Group, Cell, XHeader } from 'vux'
import newsList from '../../components/newslist'
import icon from '../common/icon'
const list = () => ['最新', '电竞', '娱乐', '版本']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    newsList,
    icon
  },
  data () {
    return {
      list2: list(),
      newselected: '最新',
      index: 0
    }
  },
  async mounted () {
    // console.log(this.$router)
    // console.log(this.router)
    // this.$axios.get('/api/school').then(function (response) {
    //   console.log(response.data)
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    // const gg = await newsNew()
    // console.log(gg)
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.iconf{
    width: 27px; 
    height: 27px;
    vertical-align: -0.15em;
    fill: #bfcbd9;
    overflow: hidden;
}

.weui-tabbar{
  position:fixed;
}
.panel-new{
  padding-top:83px;
  padding-bottom:77px;
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
