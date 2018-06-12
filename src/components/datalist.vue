<template>
	<div>
    	<group-title>  </group-title>
      <router-link v-for='item in herolist' class='heroitem' :to="tourl + item.id">
        <span class="himg"><img :src="getSrc(item)" width="64" height="64"></span>
        </br>
        <span class="hname">{{getName(item)}}</span>
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
  methods: {
    getSrc: function(item){
      var src_name = this.dtype + '_img';
      var src = eval("item." + src_name);
      return src;
    },
    getName: function(item){
      var src_name = this.dtype + '_name';
      var src = eval("item." + src_name);
      return src;
    }
  },
  computed: {
  },
  props: ['selectedurl', 'tourl', 'dtype'],
  async mounted () {
    this.$axios.get(this.selectedurl).then((response) => {
      this.herolist = response.data.data
    })
    .catch(function (error) {
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