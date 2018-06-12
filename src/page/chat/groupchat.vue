<template>
  <div class="room">
    <!-- <span @click="goout()">退出</span> -->
   
    <div class="main">
      <message></message>
      <user-text></user-text>
    </div>
  </div>
</template>

<script>
import store from '../../store/store'
import getters from '../../store/getters'
import notice from '../../components/notice'
import User from '../../components/User'
import List from '../../components/List';
import UserText from '../../components/Text';
import Message from '../../components/Message';
import { XHeader } from 'vux'

export default {
  components: {
    notice,
    XHeader,
    User,
    List,
    UserText,
    Message
  },
  vuex : {
    getters : getters
  },
  store: store,
  data () {
    return {
      conn:{}
    }
  },
  methods: {
    goout: function(){
      this.conn.close();
      
    },
    logout: function(){
      this.conn.close();
      this.$router.push({'path':'/bbs'});
    }
  },
  beforeDestroy(){
     window.removeEventListener('popstate',this.logout,false);
      //window.addEventListener("popstate", this.logout, false)
  },
  computed: {
  },
  created : function(){
            let ss = this.$route.params
            let _this = this;
            let conn = new WebSocket('ws://120.77.154.86:9502?nicknamex='+ss.user.nickname+'&headimg='+ss.user.head_img);
            //let conn = new WebSocket('ws://120.77.154.86:9502?nicknamex='+ss.user.nickname+'&headimg='+ss.user.head_img);
            this.conn = conn;

            conn.onopen = function(evt){
                //store.dispatch('showNotice','连接成功！','连');
                store.dispatch('changeStatus',true);
                _this.$vux.toast.text('连接成功');
            }
            conn.onclose = function(evt){
              _this.$vux.toast.text('已断开');
              store.dispatch('changeStatus',false);
              store.dispatch('clearUser');
              store.dispatch('clearConn');
                // _this.showNotice(' 已断开连接！','error');
                // _this.changeStatus(false);
            }
            conn.onmessage = function(evt){
                let msg = JSON.parse(evt.data);

                switch(msg.type){
                    case 'connect':
                         store.dispatch('addUser',msg.data)
                         store.dispatch('setCount',msg.data.count);
                        //_this.setCount(msg.data.count);
                        break;
                    case 'disconnect':
                         store.dispatch('removeUser',msg.data.id);
                         //_this.removeUser(msg.data.id);
                         store.dispatch('setCount',msg.data.count);                 
                        break;
                    case 'self_init':
                        store.dispatch('setUser',msg.data);
                        store.dispatch('setCount',msg.data.count)
                        break;
                    case 'other_init':

                        store.dispatch('addUser',msg.data);
                        //_this.addUser(msg.data);
                        break;
                    case 'message': 
                        store.dispatch('addMessage',msg.data);  
                        //_this.addMessage(msg.data);
                        break;
                }
            }
          
            store.dispatch('setConn',conn);

           
        },
  mounted () {
    window.addEventListener("popstate", this.logout, false)
  }
}
</script>

<style lang="less" scoped>
      html,body{width:100%;height:100%}
     .room{
        width: 100%;
        height:100%;
        }
        
        .slide-bar,.main{
          height:100%;
        }

       
        .main{
        
         
       
          background: #eee;
          
          flex-direction: column;
        }


   


</style>