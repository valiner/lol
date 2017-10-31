<template>
	<div>
    	<group-title> 英雄列表 </group-title>
      <div v-for='item in herolist' class='heroitem'>
        <span class="himg"><img :src="item.hero_img" width="64" height="64"></span>
        </br>
        <span class="hname">{{item.hero_name}}</span>
      </div>
	</div>
</template>

<script>
import { herotype } from '../service/getData'
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
  },
  props: ['newselected'],
  watch: {
  },
  async mounted () {
    if (this.newselected === '战士') {
      const hero = await herotype(0)
      this.herolist = hero.data.data
    }
    if (this.newselected === '法师') {
      const hero = await herotype(1)
      this.herolist = hero.data.data
    }
    if (this.newselected === '刺客') {
      const hero = await herotype(2)
      this.herolist = hero.data.data
    }
    if (this.newselected === '坦克') {
      const hero = await herotype(3)
      this.herolist = hero.data.data
    }
    if (this.newselected === '射手') {
      const hero = await herotype(4)
      this.herolist = hero.data.data
    }
    if (this.newselected === '辅助') {
      const hero = await herotype(5)
      this.herolist = hero.data.data
    }
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