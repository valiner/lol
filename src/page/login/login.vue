<template>
  <div class="container">
    <!-- <form class="login-form" novalidate @submit.stop.prevent="login"> -->
    <form @submit.prevent="login">  
                <input type="text" v-model="email">
                <input type="password" v-model="password">   
                <input type="submit" value="提交">  
    </form> 
    <span>{{email}}</span>
  </div>
</template>

<script type="application/ecmascript">
  import { login } from '../../service/getData'
  import * as types from '../../store/types'
  export default {
    name: '',
    data () {
      return {
        msg: '',
        email: '',
        password: ''
      }
    },
    mounted(){
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      login(){
        if (this.password && this.email) {
          new login(this.email, this.password).then(res => {
              let token = res.data.data.token;
              this.$store.commit(types.LOGIN, token);
              let redirect = decodeURIComponent(this.$route.query.redirect || '/');
              this.$router.push({
                path: redirect
              })
          })
          // this.$store.commit(types.LOGIN, this.token)
          // let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          // this.$router.push({
          //   path: redirect
          // })
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