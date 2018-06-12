<template>
    <div class="content">
        <div class="title">
                    
            <div class="card">
                <div class="header">
                    <img class="avatar" v-bind:src="currentUser.avatar" v-bind:alt="currentUser.nickname">
                </div>
                <div class="header">
                    <div class="bname">
                    <p class="name">{{currentUser.nickname|substr}} </p>
                    <div class="dot" v-bind:class="[ online ? 'dot-green' : 'dot-red' ]"></div>
                    </div>
                </div>
            
            </div>


            <p class="title_p" @click="showlist=!showlist">{{ currentSession.nickname }}{{countmsg}} <span class="arrow_south"></span></p>

           

            <span class="tc" @click="goout()">退出<span class="arrow"></span></span>

        </div>

         <div v-show="showlist" class="list" id="list">
                <ul>
                    <li v-for="user in users" v-on:click="changeSession(user.id)">
                        <img v-bind:src="user.avatar" v-bind:alt="user.name">
                        <p>{{ user.nickname}} <span v-if="user.id == 0">({{ currentCount }})</span></p>
                        <div v-bind:class="[ user.has_message ? 'dot' : '' ]"></div>
                    </li>
                </ul>
            </div>



        <div class="message" id="message">
            <ul>
                <li v-for="msg in broadcast[currentSession.id]">
                    <!-- <p>{{ msg.time }}</p> -->
                    <div class="msg" v-bind:class="msg.user.id == currentUser.id ? 'self' : ''">
                        <img v-bind:src="msg.user.avatar" v-bind:alt="msg.user.nickname">
                        <div class="text">{{ msg.msg }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import store from '../store/store';

    export default {
        data (){
            return {
                currentUser:store.getters.currentUser,
                currentSession: store.getters.currentSession,
                broadcast: store.getters.broadcast,
                users:store.getters.users,
                userid:0,
                showlist:false
            }
        },
        mounted (){
            let ch = document.documentElement.clientHeight;
            let hstyle = ch-60-80+"px";
            let cw = document.documentElement.clientWidth;
            let wstyle = cw+"px";
            document.getElementById("message").style.height=hstyle;
            document.getElementById("list").style.width=wstyle;
        },
        computed: {
            currentCount(){
                return store.getters.currentCount
            },
            countmsg(){
                return this.userid==0?'('+store.getters.currentCount+')':'';
            },
            online() {
            return store.getters.online;
            }
        },
        methods: {
        goout: function(){
            let conn = store.getters.conn;
            conn.close();
            this.$router.push({'path':'/bbs'});
          
        },
        changeSession(userId){
                this.showlist = false;
                this.userid = userId;
                if (typeof userId == 'number') {
                    store.dispatch('selectSession',userId);
                    //this.selectSession(userId);
                    store.dispatch('setHasMessageStatus',userId,false);
                    //this.setHasMessageStatus(userId,false);
                }
        }
      },
        watch:{
          broadcast: function(){
            //下啦最底部
            this.$nextTick(() => {
                var div = document.getElementById('message')
                div.scrollTop = div.scrollHeight
            })
          }
        },
        created:function(){
        }
    }
</script>

<style lang="less" scoped>
    ul{
        padding:0;
    }

     .list{
        
        background-color:#c3c3c3;
        color:#fff;
        position:fixed;
        top: 80px;
        overflow-y: scroll;
        overflow-x: hidden;
        /*定义滚动条轨道 内阴影+圆角*/  
        &::-webkit-scrollbar-track{   
            background-color: #2e3238;  
        }  
          
        /*定义滑块 内阴影+圆角*/  
        &::-webkit-scrollbar-thumb{  
            border-radius: 10px;  
            background: rgba(255,255,255,0.1);
        }  

        ul{
            margin: 0; padding: 0;
        }
        li{
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 30px;
            cursor: pointer;
            border-bottom: 1px solid #a5a5a5;
            padding: 5px;
            &:hover{
                background: rgba(255,255,255,0.03);
            }
            &.active{
                background: rgba(255,255,255,0.1);
            }
            
            img{
                width: 30px; 
                height: 30px;
            }   
            p{
                margin-left: 15px;
                font-size: 16px;
            }
            .dot{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                align-self: center;
                margin-left: 10px;
                background: #ff0000;
            }
        }
    }

    
    .card{
        left: 10px;
        position: absolute;
        top: -15px;
        display: flex;
        flex-direction: column;
        padding: 3px 3px 0 3px;
        .header{
            display: flex;
            flex-direction: row;
      
            

            img{
                margin-top:20px;
                width: 40px; 
                height:40px;
            }
            .bname{
                height:40px;
                margin:auto;
                display: flex;
                flex-direction: row;
            }
            p{
                
                font-size: 16px;
                align-self:center;
            }
            .dot{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                align-self: center;
                margin-left: 5px;
                background: #eee;
            }
            .dot-green{
                background: #00ff00;
            }
            .dot-red{
                background: #ff0000;
            }
        }
    }

    .arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        top: -1px;
        left: 13px;
    }
    .arrow:before {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            border: 1px solid #3e3238;
            border-width: 1px 0 0 1px;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            top: 8px;
            left: 7px;
    }
    .arrow_south{
        position: absolute;
        width: 30px;
        height: 30px;
        top: -1px;
        right: -26px;
    }
    .arrow_south:before {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            border: 1px solid #3e3238;
            border-width: 1px 0 0 1px;
            -webkit-transform: rotate(135deg);
            transform: rotate(225deg);
            top: 8px;
            left: 7px;
    }
    
    .content{
        height:100%;
        display: flex;
        flex-direction: column;

        .title{
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid #d6d6d6;

            .title_p{
                position:relative;
                text-align: center;
                font-size: 16px;
                color: #666;
                margin-right:20px;
                margin-left:20px;
            }
            .tc{
                display: flex;
                right:12px;
                position: absolute;
                top: 30px;
                flex-direction: column;
                font-size: 12px;
                line-height: 21px;
             }
        }

        .message{
            overflow-y: scroll;
            padding: 10px 2px;
            height:450px;
            &::-webkit-scrollbar-button{
                display: none;
            }
            &::-webkit-scrollbar{  
                width: 8px;  
                background-color: #eee;  
            }  
              
            /*定义滚动条轨道 内阴影+圆角*/  
            &::-webkit-scrollbar-track{   
                background-color: #eee;  
            }  
              
            /*定义滑块 内阴影+圆角*/  
            &::-webkit-scrollbar-thumb{  
                border-radius: 10px;  
                background: #ccc;
            }  

            li{
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;

                p{
                    align-self: center;
                    padding: 0 18px;
                    font-size: 12px;
                    color: #fff;
                    border-radius: 2px;
                    background-color: #dcdcdc;
                    margin: 5px 0px;
                }

                .msg{
                    display: flex;
                    flex-direction: row;


                    img{
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                        flex-shrink: 0;
                    }
                    .text{
                        padding: 10px;
                        min-height: 30px;
                        font-size: 14px;
                        text-align: left;
                        word-break: break-all;
                        background: #fafafa;
                        border-radius: 4px;
                        line-height: 1.4;
                    }
                }
                .self{
                    flex-direction: row-reverse;
                    .text{
                        background: #b2e281;
                    }
                    img{
                        margin-right: 0px; margin-left: 10px;
                    }
                }
            }
        }
    }


</style>