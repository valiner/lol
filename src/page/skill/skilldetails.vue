<template>
	<div>
		<x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">物品详情</x-header>
	    <div>
		<blur :blur-amount=40 :url="skillinfo.skill_img" :height='150'>
	      <p class="pimg"><img :src="skillinfo.skill_img" width="120" height="120"></p>
	      <div class="binfo">
	      <span class="pname">{{skillinfo.skill_name}}</span>
	      <span class="lev">{{skillinfo.skill_level}}</span>
	      </br>
	      <div class="ptype">{{skillinfo.skill_type}}</div>
	      </br>
	      </div>
	    </blur>
	    </div>
	    <divider>详情</divider>
	    <div v-html='skillinfo.skill_des' class="des"></div>
	</div>
</template>

<script>
import { skilldetails } from '../../service/getData'
import { XHeader, Blur, Cell, Divider } from 'vux'
export default{
  data () {
    return {
      skillinfo: {}
    }
  },
  components: {
    XHeader,
    Blur,
    Cell,
    Divider
  },
  async mounted () {
    let id = this.$route.params.skillid
    const res = await skilldetails(id)
    this.skillinfo = res.data.data
  },
  computed: {
  }
}
</script>
<style scoped>
	.pimg{
	margin: 15px 5px;
}
.binfo{
 position: absolute;
 left: 140PX;
 top: 40PX;
}
.pname{
	font-size: 16px;
	color: #87CEEB;
}
.ptype{
	color:#FFD700;
}
.lev{
	color: #eee;
	font-size: 12px;
}
.pgold{
  color: #D1D1D1;
}
.skillimg{
  float: left;
  width: 20%;
  height: 100px;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
}
.skilltitle{
	border-bottom: 1px solid #D1D1D1;
	padding-bottom: 3px;
	margin: 0 5px;
	color: #87CEEB;
}

</style>
<style>
.des{
	padding: 10px;
}
.item-attr{
	list-style-type: none;
	padding: 0;
}
.item-attr span{
}
.item-attr-desc strong{
	display: block;
}
.attr-desc strong{
	color: #87CEEB;
}
</style>