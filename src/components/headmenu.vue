<template>
	<div class='main-head'>
    <div class="head">
	<x-header @on-click-back="goPre" :left-options="{showBack: showback,preventGoBack: goback}" :right-options="{showMore: true}" @on-click-more="showMenu">{{title}}</x-header>

</div>
	<transition name="right-menu">
    	<div v-if="showMenus">
    		<div class="left_blank" @click="hideMenu"></div>
    		<div class="menu">
    			<div>
    				<div v-if="this.$store.state.status == 'landing'">
    				<blur :blur-amount=40 :url="user.head_img">
				      <p class="center"><img :src="user.head_img" @click="showPopup"></p>
              <p style="text-align:center">{{user.nickname}}</p>
				    </blur>
				    </div>
				    	
				    <div v-else>
             <blur :blur-amount=40 :url="'/static/img/xl.jpg'">
              <p class="center"><img :src="'/static/img/xl.jpg'"></p>
              <p style="text-align:center"><router-link :to="'/login'">未登陆,点击登陆</router-link></p>
            </blur>
				    
				    </div>
    			</div>
    			<div>
    				<!-- <ul class="set_ul">
    					<li><icon slot="icon" icon-style="menu-iconf" icon-class="xiugai"></icon><span>个人设置</span></li>
    					<li><icon slot="icon" icon-style="menu-iconf" icon-class="xiugai"></icon><span>我的收藏</span></li>
    					<li><icon slot="icon" icon-style="menu-iconf" icon-class="xiugai"></icon><span>我的帖子</span></li>
    			
    				</ul> -->
    			</div>
    		</div>
    	</div>
    </transition>
	</div>
</template>

<script>
import { XHeader, Blur, Popup, TransferDom} from 'vux'
import store  from '../store/store'
import icon from '../page/common/icon'
export default{
  data () {
    return {
      user: store.getters.userpro,
      showMenus: false,
    }
  },
  props: ['title','showback','goback'],
  directives: {
    TransferDom
  },
  components: {
  	Popup,
  	XHeader,
  	Blur,
  	icon
  },
  methods: {
    goPre: function(){
      var name = this.$route.name;
      //固定路由
      if (name == 'posts') {
         this.$router.push({
          'path': "/bbs"
         })
      }
      if (name == 'commentpage') {
        var post_id = this.$route.query.post_id;
         this.$router.push({
          'path': `/posts/${post_id}`
         })
      }

  
    },
  	showPopup: function(){
      this.hideMenu();
  		this.$router.push({
                path: "setting"
              })
  	},
  	hideMenu: function(){
  		this.showMenus = !this.showMenus;
  		var mo=function(e){e.preventDefault();};
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
  	},
  	showMenu: function(){
  		this.showMenus = !this.showMenus
	  	var mo=function(e){e.preventDefault();};
	    document.body.style.overflow='hidden';
	    document.addEventListener("touchmove",mo,false);//禁止页面滑动
  	}
  },
  mounted () {
    let ss = store.state.userpro;
    console.log();
  },
}
</script>

<style scoped>

		
    .head{
      width: 100%;
      position: fixed;
      left: 0px;
      top: 0px;
      z-index: 100;
    }
    .menu{
    	
    	width: 80%;
    	height: 1000px;
       /* background: rgb(50, 60, 60);*/
        background: #c5c5c5;
	    position: fixed;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    padding-top: 46px;
	    z-index: 1001;
    }
    .left_blank{
    	width: 20%;
    	height: 1000px;
	    position: fixed;   
	    top: 0;   
	    left: 0;        
	    background-color: black;   
	    z-index:1001;   
	    -moz-opacity: 0.3;   
	    opacity:.30;   
	    filter: alpha(opacity=30);
    }
    .center {
	  text-align: center;
	  padding-top: 20px;
	  color: #fff;
	  font-size: 18px;
	}
	.center img {
	  width: 100px;
	  height: 100px;
	  border-radius: 50%;
	  border: 4px solid #ececec;
	}
	.set_ul li{
		list-style-type: none;
		color: #ffffff;
	}
	.set_ul span{
		margin-left: 40px;
		line-height: 48px;
		color: "red";
	}
	.menu-icon{
	
	}
</style>