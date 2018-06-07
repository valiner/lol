<template>
  <div class="container">
    <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
    <div>
      <div>
            <div v-if="this.$store.state.status == 'landing'">
            <blur :blur-amount=40 :url="user.head_img==''?imgurl:user.head_img">
              <p class="center"><img :src="user.head_img==''?imgurl:user.head_img" @click="showPopup"></p>
            </blur>
            </div>
              
            <div v-else>
              未登录{{this.$store.state.status}}
            </div>
          </div>

           <div v-transfer-dom>
            <popup v-model="show" position="bottom" max-height="50%">
              <span v-for="item in imgarr" class="item">
                <span class="himg" @click="savePic(item)"><img :src="item" width="64" height="64"></span>
              </span>
              
            </popup>
          </div>

    </div>
   
  </div>
</template>

<script type="application/ecmascript">
  import { XHeader, Blur, TransferDom, Popup} from 'vux'
  import { userpro } from '../../service/getData'
  import store  from '../../store/store'
  import { updateImg } from '../../service/getData'
  export default {
    components: {
      XHeader,
      TransferDom, 
      Popup,
      Blur
    },
    directives: {
    TransferDom
    },
    data () {
      return {
        title: "个人设置",
        imgurl: '/static/img/xx.jpg',
        user: {},
        show: false,
        imgarr: ['/static/img/xx.jpg','/static/img/ez.jpg','/static/img/wj.jpg']
      }
    },
    async mounted(){
      var res = await userpro();
      this.user = res.data.data;
      
    },
    methods: {
      showPopup: function(){
        this.show = true;
      },
      savePic: function(item){
       
        new updateImg(item).then(res => {
            new userpro().then(res => {
              this.user = res.data.data;
               console.log(res.data.data);
            }) 

            this.$store.commit('SET_HEAD_IMG', item);


        })
      }
    }
  }
</script>


<style scoped rel="stylesheet/scss" type="text/css">
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

</style>