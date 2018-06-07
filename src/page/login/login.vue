<template>
  <div class="container">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
    <form @submit.prevent="login">  
          <group>
            <x-input title="邮箱" v-model="email" is-type="email" required></x-input>
            <x-input title="密码" v-model="password" type="password" required></x-input>
          </group>  
          <x-button type="primary" action-type="submit">提交</x-button>
          <x-button link="BACK" action-type="button">取消</x-button>    
    </form> 

       <router-link to="register" style="margin-left:20px;color:#4876FF;">注册</router-link>

  </div>
</template>

<script type="application/ecmascript">
  import { XHeader, XInput, Group, XButton, Cell} from 'vux'
  import { login } from '../../service/getData'
  import { userpro } from '../../service/getData'
  import * as types from '../../store/types'
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
        title: '登陆',
        msg: '',
        email: '',
        password: ''
      }
    },
    mounted(){
      localStorage.clear();
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      login(){
        let _this = this;
        if (this.password && this.email) {
          new login(this.email, this.password).then(res => {
              let token = res.data.data.token;
              this.$store.commit(types.LOGIN, token);
              this.$store.commit(types.STATUS, 'landing');
              new userpro().then(res => {
                 let user = res.data.data;
                 this.$store.commit('SET_USERPRO', user);
              });

              this.$store.commit(types.STATUS, 'landing');
              let redirect = decodeURIComponent(this.$route.query.redirect || '/');
              this.$router.push({
                path: redirect
              })
          }).catch(err => {
          this.$vux.toast.text("用户名或者密码错误");
        })
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