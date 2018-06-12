<template>
    <div>
    <div class="user-text">
        <group>
        <x-input title="" class="weui-vcode" v-model="content" @on-enter="send">
              <x-button slot="right" action-type="button"  @click.native="send" mini>发送</x-button>
        </x-input>
    </group>
       <!--  <textarea name="" id="" placeholder="Press enter to send" v-model="content" v-on:keyup.enter="send"></textarea> -->
    </div>
    <!-- <div class="text-footer">
        <button v-on:click="send">发送</button>
    </div> -->
    </div>
</template>


<script>
    import store from '../store/store'
    import {XInput, XButton, Group} from 'vux'

    export default {
        data(){
            return {
                currentUser:store.getters.currentUser,
                currentSession:store.getters.currentSession,
                content : ''
            }
        },
        components: {
          XButton,
          XInput,
          Group
        },
        methods : {
            send(e){
                let date = new Date().toLocaleString();
                
                let _this = this;
                let msg = {
                        from : _this.currentUser.id,
                        to : _this.currentSession.id,
                        msg : _this.content,
                        date : date
                    };
                let conn = store.getters.conn;
                if (_this.content !== '' ) {
                    conn.send(JSON.stringify(msg));
                    _this.content = '';
                    msg.is_self = 1;
                    store.dispatch('addMessage',msg);
                }else{
                     _this.$vux.toast.text('消息不能为空');
                }
                
            }
        }
        
    }
</script>


<style lang="less">
   .user-text{
    width:100%;
    position:absolute;
    bottom:5px;
   }
</style>