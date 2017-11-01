<template>
	<div>
		<x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">物品详情</x-header>
	    <div>
		<blur :blur-amount=40 :url="goodsinfo.goods_img" :height='150'>
	      <p class="pimg"><img :src="goodsinfo.goods_img" width="120" height="120"></p>
	      <div class="binfo">
	      <span class="pname">{{goodsinfo.goods_name}}</span>
	      <span class="ptype">{{goodsinfo.goods_type}}</span>
	      </br>
	      </br>
	      <span class="pgold">{{goodsinfo.goods_gold}}</span>
	      </div>
	    </blur>
	    </div>
	    <divider>详情</divider>
	    <div v-html='goodsinfo.goods_des' class="des"></div>
	</div>
</template>

<script>
import { goodsdetails } from '../../service/getData'
import { XHeader, Blur, Cell, Divider } from 'vux'
export default{
  data () {
    return {
      goodsinfo: {}
    }
  },
  components: {
    XHeader,
    Blur,
    Cell,
    Divider
  },
  async mounted () {
    let id = this.$route.params.goodsid
    const goodsdetail = await goodsdetails(id)
    this.goodsinfo = goodsdetail.data.data
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
	background-color:#FFD700;
	border-radius: 5px;
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