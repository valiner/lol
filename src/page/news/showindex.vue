<template>
  <div>

    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"></router-view>


    <tabbar>
  
      <tabbar-item selected link="news">
        <icon slot="icon" icon-style="iconf" icon-class="neirong2"></icon>
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item link="gameshow">
        <icon slot="icon" icon-style="iconf" icon-class="huodongxiangqu"></icon>
        <span slot="label">赛事</span>
      </tabbar-item>
      <tabbar-item link="recordshow">
        <icon slot="icon" icon-style="iconf" icon-class="sousuo"></icon>
        <span slot="label">战绩</span>
      </tabbar-item>
       <tabbar-item link="data">
         <icon slot="icon" icon-style="iconf" icon-class="qitadingdan"></icon>
        <span slot="label">资料</span>
      </tabbar-item>
      <tabbar-item link="tongji">
       <icon slot="icon" icon-style="iconf" icon-class="paihang"></icon>
        <span slot="label">统计
        </span> 
      </tabbar-item>
      <tabbar-item link="bbs">
       <icon slot="icon" icon-style="iconf" icon-class="xiaoxi"></icon>
        <span slot="label">讨论
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
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.weui-tabbar{
  position:fixed;
}
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
}

.panel-new{
  padding-top:83px;
  padding-bottom:77px;
  height: 100%;
  position: relative;
  overflow: auto;
}

.vux-tab {
   width: 100%;
    position: fixed;
    left: 0px;
    top: 40px;
    z-index: 100;
}
</style>
