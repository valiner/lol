<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">联盟资料</x-header>
    <div class="main">
   	 <router-link v-for="item in dlist" class="item" :to="'dtype/' + item.dtype_id">
   	 	<span class="himg"><img :src="item.dtype_img" width="64" height="64"></span>
        </br>
        <span class="hname">{{item.dtype_name}}</span>
   	  </router-link>
    </div>

    <tabbar>
      <tabbar-item link="news">
        <icon slot="icon" icon-style="iconf" icon-class="neirong2"></icon>
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item  link='gameshow'>
        <icon slot="icon" icon-style="iconf" icon-class="huodongxiangqu"></icon>
        <span slot="label">赛事</span>
      </tabbar-item>
      <tabbar-item selected>
        <icon slot="icon" icon-style="iconf" icon-class="sousuo"></icon>
        <span slot="label">战绩</span>
      </tabbar-item>
       <tabbar-item link="data">
         <icon slot="icon" icon-style="iconf" icon-class="xiugai"></icon>
        <span slot="label">资料</span>
      </tabbar-item>
      <tabbar-item link="tongji">
       <icon slot="icon" icon-style="iconf" icon-class="paihang"></icon>
        <span slot="label">统计
        </span>
      
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { XHeader, TabItem, Tabbar } from 'vux'
import { dtype } from '../../service/getData'
import icon from '../common/icon'
export default {
  components: {
    XHeader,
    icon,
    TabItem, 
    Tabbar
  },
  data () {
    return {
      dlist: []
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
    let res = await dtype()
    this.dlist = res.data.data
  }
}
</script>

<style scoped>
.item{
  float: left;
  width: 33%;
  height: 100px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
}

.iconf{
    width: 2em; 
    height: 2em;
    vertical-align: -0.15em;
    fill: #bfcbd9;
    overflow: hidden;
}


</style>