<template>
  <div>
   <head-menu :title="'联盟资料'"></head-menu>
  <loading class="loading" v-if="showloading"></loading>
    <div class="main">
   	 <router-link v-for="item in dlist" class="item" :to="'dtype/' + item.dtype_url">
   	 	<span class="himg"><img :src="item.dtype_img" width="64" height="64"></span>
        </br>
        <span class="hname">{{item.dtype_name}}</span>
   	  </router-link>
 
    </div>
    
    
  </div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem } from 'vux'
import { dtype } from '../../service/getData'
import icon from '../common/icon'
import headMenu from '../../components/headMenu'
import loading from '../../components/loading'
export default {
  components: {
    headMenu,
    XHeader,
    icon,
    Tabbar,
    TabbarItem,
    loading
  },
  data () {
    return {
      dlist: [],
      showloading: true
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
    let res = await dtype()
    this.dlist = res.data
    this.showloading = false
  }
}
</script>

<style scoped>
.item{
  float: left;
  width: 33%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
}
.item img{
  border-radius:10px
}
.main{
   padding-top:46px;
}



</style>