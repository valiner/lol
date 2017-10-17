<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">战绩</x-header>
  <div class="main_record">
    <group>
      <selector title="大区" :options="list" v-model="defaultValue"></selector>
    </group>

     <group>
      <x-input title="召唤师名称" :is-type="be2333" placeholder=""></x-input>
    </group>
	</br>
	<div style="float:left;position:absolute;left: 50%;margin-left: -36.3px">
		<x-button mini>查看</x-button>
	</div>
    
  </div>

    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">咨询</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">赛事</span>
      </tabbar-item>
      <tabbar-item selected link="recordshow">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">战绩</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/logo.png">
        <span slot="label">其他</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tab, TabItem, Tabbar, TabbarItem, XHeader, Selector, Group, XInput, XButton } from 'vux'
// import { newsNew } from '../../service/getData'
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
      defaultValue: 'gd',
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}]
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
.main_record{
  padding-top:40px;
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