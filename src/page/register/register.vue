<template>
  <div class="container">
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">{{title}}</x-header>
    <form @submit.prevent="register">  
          <group>
            <x-input title="邮箱" v-model="email" is-type="email" required></x-input>
            <x-input title="发送验证码" class="weui-vcode" required>
              <x-button slot="right" type="primary" @click.native="sendCode" mini>发送验证码</x-button>
            </x-input>
            <x-input title="请输入密码" type="password" placeholder="" v-model="password" @on-change="change" required></x-input>
            <x-input title="请确认密码" v-model="password2" type="password" placeholder="" :equal-with="password" required></x-input>
          </group>  
          <x-button type="primary" action-type="submit">提交</x-button>
          <x-button>取消</x-button>       
    </form> 
    <span>{{email}}</span>
  </div>
</template>

<script type="application/ecmascript">
  import { XHeader, XInput, Group, XButton, Cell} from 'vux'
  import { login } from '../../service/getData'
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
        title: '注册',
        msg: '',
        email: '',
        password: '',
        password2: ''
      }
    },
    mounted(){
      localStorage.clear();
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      sendCode: function(){
        console.log(123);
      },
      register(){
          console.log(33);
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