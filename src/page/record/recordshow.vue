<template>
  <div style="position: relative">
  <head-menu :title="'战绩'"></head-menu>
  <div class="main_record">
    <group>
      <selector title="大区" :options="list" v-model="defaultValue"></selector>
    </group>

     <group>
      <x-input title="召唤师名称" :is-type="be2333" placeholder="" v-model="username"></x-input>
    </group>
	</br>
	<div style="float:left;position:absolute;left: 50%;margin-left: -36.3px">
		<x-button mini @click.native="search">查看</x-button>
	</div>
    
  </div>

  </div>
</template>

<script>
import { Tab, TabItem, Tabbar, TabbarItem, XHeader, Selector, Group, XInput, XButton } from 'vux'
import icon from '../common/icon'
import headMenu from '../../components/headMenu'
// import { searchRecord } from '../../service/getData'
export default {
  components: {
    Tab,
    headMenu,
    TabItem,
    Tabbar,
    TabbarItem,
    Selector,
    Group,
    XInput,
    XButton,
    XHeader,
    icon
  },
  data () {
    return {
      username: '',
      defaultValue: 'dx1',
      list: [{key: 'dx1', value: '艾欧尼亚'}, {key: 'dx2', value: '祖安'}, {key: 'dx3', value: '洛克萨斯'}, {key: 'dx4', value: '班德尔城'}, {key: 'dx5', value: '皮尔特沃夫'}, {key: 'dx6', value: '战争学院'}, {key: 'dx7', value: '巨神峰'}, {key: 'dx8', value: '雷瑟守备'}, {key: 'dx9', value: '裁决之地'}, {key: 'dx10', value: '黑色玫瑰'}, {key: 'dx11', value: '暗影岛'}, {key: 'dx12', value: '钢铁烈阳'}, {key: 'dx13', value: '均衡教派'}, {key: 'dx14', value: '水晶之痕'}, {key: 'dx15', value: '影流'}, {key: 'dx16', value: '守望之海'}, {key: 'dx17', value: '征服之海'}, {key: 'dx18', value: '卡拉曼达'}]
    }
  },
  async mounted () {
  },
  methods: {
    search () {
      const that = this
      this.$axios.get('/api/searchRecord/' + this.defaultValue + '/' + this.username).then(function (response) {
        if (!response.data) {
          alert('服务器繁忙稍后再试')
        } else if (response.data.status === 0) {
          let areaid = response.data.data.areaid
          let userid = response.data.data.user_id
          that.$router.push({ path: `/userdetails/${areaid}/${userid}` })
        } else {
          alert(response.data.message)
        }
      })
    }
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