<template>
  <div class="container">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
    <form @submit.prevent="register">  
          <group>
            <x-input title="邮箱" v-model="email" is-type="email" required></x-input>
            <x-input title="昵称" v-model="nickname" required></x-input>
            <x-input title="发送验证码" class="weui-vcode" v-model="code" required>
              <x-button slot="right" action-type="button" @click.native="sendCode" :text="codetext" :disabled="btn_disable" mini></x-button>
            </x-input>
            <x-input title="请输入密码" type="password" placeholder="" v-model="password" @on-change="change" required></x-input>
            <x-input title="请确认密码" v-model="password2" type="password" placeholder="" :equal-with="password" required></x-input>
          </group>  
          <x-button type="primary" action-type="submit">提交</x-button>
          <x-button link="BACK" action-type="button">取消</x-button>       
    </form> 

  </div>
</template>

<script type="application/ecmascript">
  import { XHeader, XInput, Group, XButton, Cell} from 'vux'
  import { verification, register} from '../../service/getData'
  import * as types from '../../store/types'
  import { userpro } from '../../service/getData'
  import { updateImg } from '../../service/getData'
  import axios from 'axios'
  export default {
    components: {
      XHeader,
      XInput,
      Group,
      XButton,
      Cell
    },
    data () {
      return {
        title: '注册',
        nickname:'',
        msg: '',
        email: '',
        password: '',
        password2: '',
        codetext: '发送验证码',
        wait: 60,
        code: '',
        btn_disable: false,
        imgarr: ['/static/img/xx.jpg','/static/img/ez.jpg','/static/img/wj.jpg','/static/img/dw.jpg','/static/img/gd.jpg','/static/img/hz.jpg','/static/img/sd.jpg','/static/img/xl.jpg','/static/img/tm.jpg','/static/img/lt.jpg','/static/img/fyt.jpg','/static/img/hn.jpg']
      }
    },
    mounted(){
      localStorage.clear();
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      sendCode: function(){
 
        axios.get('/api/verification/' + this.email).then(res => {
          this.$vux.toast.text('已发送验证码30分钟内有效');
          this.setTime(); 
        }).catch(err => {
          this.$vux.toast.text(err.message);
        })
        // new verification(this.email)
      },
      register(){
        new register(this.code, this.email, this.password, this.nickname).then(res => {
            this.$vux.toast.text('注册成功');
            let token = res.data.data.token;
            this.$store.commit(types.LOGIN, token);
            this.$store.commit(types.STATUS, 'landing');
            new userpro().then(res => {
                 let user = res.data.data;
                 this.$store.commit('SET_USERPRO', user);
              });
            let index = Math.round(Math.random()*(this.imgarr.length-1));
            let img = this.imgarr[index];
            new updateImg(img).then(res => {
            })
            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
              path: redirect
            })
        }).catch(err => {
          this.$vux.toast.text(err.message);
        })
      },
      setTime: function(){
        if (this.wait == 0) {
          this.btn_disable = false;
          this.codetext = '发送验证码';
          this.wait = 60;
        }else{
          this.btn_disable = true;
          this.codetext = '重新发送('+this.wait+')';
          this.wait--;
          var that = this;
          setTimeout(function(){
            that.setTime();
          },1000);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" type="text/css">
  .login-form{
    width: 400px;
    margin: 50px auto;
  }
</style>