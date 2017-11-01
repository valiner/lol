<template>
	<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{username}}</x-header>
	    <div>
		<blur :blur-amount=40 :url="heroinfo.hero_img" :height='150'>
	      <p class="pimg"><img :src="heroinfo.hero_img" width="120" height="120"></p>
	      <div class="binfo">
	      <span class="pname">{{heroinfo.hero_name}}</span>
	      <span class="ptype">{{heroinfo.hero_type}}</span>
	      </br>
	      </br>
	      <span class="pgold">{{heroinfo.hero_gold}}</span>
	      </div>
	    </blur>
	    <div>
	    	<divider>英雄技能</divider>
	    	<div>
				<div class="skillimg" @click="selectedskill = 0">
					<span class="himg"><img :src="heroinfo.hero_skill0img" width="64" height="64"></span>
				</div>
				<div class="skillimg" @click="selectedskill = 1">
					<span class="himg"><img :src="heroinfo.hero_skill1img" width="64" height="64"></span>
				</div>
				<div class="skillimg" @click="selectedskill = 2">
					<span class="himg"><img :src="heroinfo.hero_skill2img" width="64" height="64"></span>
				</div>
				<div class="skillimg" @click="selectedskill = 3">
					<span class="himg"><img :src="heroinfo.hero_skill3img" width="64" height="64"></span>
				</div>
				<div class="skillimg" @click="selectedskill = 4">
					<span class="himg"><img :src="heroinfo.hero_skill4img" width="64" height="64"></span>
				</div>
			</div>
			<div class="des">
			    <div class='skilltitle'>
			    	{{getskillname}}
			    </div>
			    <div v-html="getskilldes">
			    	
			    </div>
				
			</div>

			<div class="bg">
			  <divider>英雄背景</divider>
			  <div v-html="heroinfo.hero_bg"></div>			
			</div>
	    </div>
	    </div>
	</div>
</template>
<script>
import { herodetails } from '../../service/getData'
import { XHeader, Blur, Cell, Divider } from 'vux'
export default{
  data () {
    return {
      heroinfo: {},
      selectedskill: 0
    }
  },
  components: {
    XHeader,
    Blur,
    Cell,
    Divider
  },
  async mounted () {
    let id = this.$route.params.heroid
    const herodetail = await herodetails(id)
    this.heroinfo = herodetail.data.data
  },
  computed: {
    getskillname: function () {
      switch (this.selectedskill) {
        case 0:
          return this.heroinfo.hero_skill0name
        case 1:
          return this.heroinfo.hero_skill1name
        case 2:
          return this.heroinfo.hero_skill2name
        case 3:
          return this.heroinfo.hero_skill3name
        case 4:
          return this.heroinfo.hero_skill4name
      }
    },
    getskilldes: function () {
      switch (this.selectedskill) {
        case 0:
          return this.heroinfo.hero_skill0des
        case 1:
          return this.heroinfo.hero_skill1des
        case 2:
          return this.heroinfo.hero_skill2des
        case 3:
          return this.heroinfo.hero_skill3des
        case 4:
          return this.heroinfo.hero_skill4des
      }
    }
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