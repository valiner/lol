<template>
  <div style="position: relative">

  <head-menu :title="'资讯'"></head-menu>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="newselected === item" v-for="(item, index) in list2" @click.native="newselected = item"><router-link :to="'newslist'+(index+1)" class="full">{{item}}</router-link></tab-item>
      </tab>
    <!--       <div v-for="(item, index) in list2" :key="index" v-if="newselected === item" class="panel-new">
          <keep-alive>
            <news-list :newselected="newselected" :listname='list'></news-list> 
          </keep-alive>
          </div> -->

          <div class="panel-new">

           <!-- <keep-alive >
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
 
          </div> -->

            <router-view></router-view>
          </div>

    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Tabbar, TabbarItem, Group, Cell, XHeader } from 'vux'
import newsList from '../../components/newslist'
import headMenu from '../../components/headMenu'
import icon from '../common/icon'
const list = () => ['最新', '电竞', '娱乐', '版本']
export default {
  components: {
    Tab,
    headMenu,
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
  methods: {
  },
  created () {
  },
  async mounted () { 
;
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.full{
  display: block;
  width:100%;
  height:100%;
}
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
  padding-bottom:77px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}

.vux-tab {
   width: 100%;
    position: fixed;
    left: 0px;
    top: 40px;
    z-index: 100;
}
</style>
