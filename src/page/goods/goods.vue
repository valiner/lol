<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">物品</x-header>
    <div>
       <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="newselected === item" v-for="(item, index) in list2" @click.native="newselected = item">{{item}}</tab-item>
      </tab>
          <div v-for="(item, index) in list2" :key="index" v-if="newselected === item" class="panel-new">
            <data-list :selectedurl="selectedurl" :tourl="'/goodsdetails/'" :dtype="'goods'"></data-list> 
          </div>

    </div>

  </div>
</template>

<script>
import { Tab, TabItem, Tabbar, TabbarItem, XHeader } from 'vux'
// import { newsNew } from '../../service/getData'
import dataList from '../../components/datalist'
const list = () => ['攻击', '魔法', '防御', '移动', '工具', '其他']
export default {
  components: {
    Tab,
    TabItem,
    Tabbar,
    TabbarItem,
    XHeader,
    dataList
  },
  data () {
    return {
      list2: list(),
      newselected: '攻击',
      index: 0
    }
  },
  methods: {
  },
  computed: {
    selectedurl: function () {
      return '/api/goods/type/' + this.index
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