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
123 <icon icon-style="iconf" icon-class="fuwurizhi"></icon>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import { dtype } from '../../service/getData'
import icon from '../common/icon'
export default {
  components: {
    XHeader,
    icon
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