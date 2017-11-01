<template>
	<div>
    	<group-title> 英雄列表 </group-title>
      <router-link v-for='item in herolist' class='heroitem' :to="tourl + item.id">
        <span class="himg"><img :src="item.img" width="64" height="64"></span>
        </br>
        <span class="hname">{{item.name}}</span>
      </router-link>
	</div>
</template>

<script>
import { Panel, Group, Radio, Grid, GridItem, GroupTitle } from 'vux'
export default{
  data () {
    return {
      herolist: []
    }
  },
  components: {
    Panel,
    Group,
    Radio,
    Grid,
    GridItem,
    GroupTitle
  },
  props: ['selectedurl', 'tourl'],
  async mounted () {
    this.$axios.get(this.selectedurl).then((response) => {
      this.herolist = response.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style type="text/css" scoped>
	.weui-media-box__info{
		margin-top: -7px;
    	padding-bottom: 0px;
	}
	.weui-media-box{
		padding: 5px;
	}
  .grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.heroitem{
  float: left;
  width: 25%;
  height: 100px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
}
.himg{

}
.hname{

}
</style>