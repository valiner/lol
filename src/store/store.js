/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import getters from './getters'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    getters,
    state: {
        userpro: {},
        user: {},
        token: null,
        title: '',
        status: 'outline',
        currentUser : {
        id : 13,
        avatar : 'http://tva3.sinaimg.cn/crop.0.0.200.200.50/701cac0cjw8ez3nd2wa7rj205k05kt8v.jpg',
        nickname : 'jack'
        },
        //all users
        users : [
            {
                id : 0,
                nickname : '群聊',
                avatar : 'http://58pic.ooopic.com/58pic/12/25/04/02k58PICVwf.jpg',
                has_message : false
            }
        ],
        filterUser: '',

        currentSession : {
            id : 0,
            nickname : '群聊',
            avatar : 'http://b.hiphotos.baidu.com/exp/w=480/sign=d86a96f25766d0167e199f20a72ad498/b8014a90f603738d48c6191db61bb051f819ec05.jpg',
            chat : null
        },

        currentCount : 0,

        online : false,

        broadcast : [],

        connection : null,

        notice : {
            show : false,
            type : '',
            msg : ''
        }
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
            console.log("vuex"+state.token);
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        },
        [types.STATUS]: (state, data) => {
            state.status = data;
        }, FILTER_USER: (state, nickname) => {
        state.filterUser = nickname;
        },
        CHANGE_SESSION: (state, userId) => {
            for (var i = state.users.length - 1; i >= 0; i--) {
                if (state.users[i].id != userId) {
                    continue;
                }
                Vue.set(state.currentSession,'id',state.users[i].id);
                Vue.set(state.currentSession,'nickname',state.users[i].nickname);
                Vue.set(state.currentSession,'avatar',state.users[i].avatar);
                Vue.set(state.currentSession,'has_message',state.users[i].has_message);
                //state.currentSession = state.users[i];
                console.log(state.currentSession);
                break;
            }
        },
        SET_USERPRO: (state, user) => {
            Vue.set(state,'userpro',user);
        },
        SET_HEAD_IMG: (state, img) => {
            Vue.set(state.userpro,'head_img',img);
        },

        
        SET_USER: (state, user) => {
            //state.currentUser = user;
            Vue.set(state.currentUser,'nickname',user.nickname)
            Vue.set(state.currentUser,'id',user.id)
            Vue.set(state.currentUser,'avatar',user.avatar)
        },

        CLEAR_USER: (state) => {
            state.users = [
            {
                id : 0,
                nickname : '群聊',
                avatar : 'http://58pic.ooopic.com/58pic/12/25/04/02k58PICVwf.jpg',
                has_message : false
            }
           ];
        },

        CLEAR_CONN: (state) => {
            state.connection=null;
        },


        ADD_USER: (state, user) => {
            if (user instanceof Array) {
                 console.log(state.users);
                 console.log(user);
                 console.log(state.currentUser.id);
                for (var i = user.length - 1; i >= 0; i--) {
                    if (user[i].id != state.currentUser.id) {
                        user[i].has_message = false;
                        state.users.push(user[i]);
                    }
                    
                }
               
            }else{
                user.has_message = false;
                state.users.push(user);
            }
        },

        REMOVE_USER: (state, userId) => {
            state.users.forEach((item,index) => {
                if (item.id == userId) {
                    state.users.splice(index,1);
                    //this.state.users.$remove(item);
                }
            });
        },

        SET_CONN: (state, conn) => {
            if (conn != null && state.connection == null) {
                Vue.set(state,'connection',conn)
                //state.connection = conn;
            }
        
        },

        CHANGE_STATUS: (state, status) => {
            state.online = status;
            //Vue.set(state.currentUser,'avatar',user.avatar)

        },

        ADD_MESSAGE: (state, message) => {
            let msg = {
                user : {
                    id : message.from,
                    avatar : '',
                    nickname : ''
                },
                msg : message.msg,
                time : message.date
            };
            if (message.from == state.currentUser.id) {
                msg.user = state.currentUser;
            }else{
                for (var i = state.users.length - 1; i >= 0; i--) {
                    if (state.users[i].id == message.from) {
                        msg.user = state.users[i];
                        break;
                    }
                }
            }

            if (message.to == 0) {
                if (state.broadcast[ 0 ] == undefined) {
                    state.broadcast[ 0 ] = new Array;
                }

                state.broadcast[ 0 ].push(msg);
                 // state.broadcast.$set(0,state.broadcast[0]);
                //let index = state.broadcast[ 0 ].length-1;
                
                Vue.set(state.broadcast,0,state.broadcast[0]);
                //Vue.set(vm.items, indexOfItem, newValue)
                //this.$set(0,state.broadcast[0]);
                console.log(state.broadcast);
            }else{
                if (message.is_self == 1) {
                    message.from = message.to;
                }


                if (state.broadcast[ message.from ] == undefined) {
                    state.broadcast[ message.from ] = new Array;
                }

                state.broadcast[ message.from ].push(msg);

                Vue.set(state.broadcast,message.from,state.broadcast[ message.from ]);
                //state.broadcast.set(message.from,state.broadcast[ message.from ]);
            }

        },

        SET_HAS_MESSAGE : (state, userId, status) => {

            for (var i = state.users.length - 1; i >= 0; i--) {
                if (status == false && state.users[i].id == userId || state.users[i].id == userId && state.currentSession.id != userId ) {
                    //state.users[i].has_message = status;
                     Vue.set(state.users[i],'has_message',status);
                }
            }
            console.log(state.users);
        },

        SET_COUNT : (state, count) => {
            //state.currentCount = count;
            Vue.set(state,'currentCount',count);
        },

        SHOW_NOTICE : (state, msg, type) => {
            state.notice = {
                show : true, msg, type
            }
            setTimeout(function(){
                state.notice.show = false;
            },1000);

        }
    }
})