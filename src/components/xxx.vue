<template>
    <div class="card">
        <div class="header">
            <img class="avatar" v-bind:src="currentUser.avatar">
            <p class="name">{{currentUser.nickname}} </p>
            <div class="dot" v-bind:class="[ online ? 'dot-green' : 'dot-red' ]"></div>
        </div>
    
    </div>
</template>

<script>
    import store from '../store/store'

    export default {

        data () {
            return {
                currentUser:store.getters.currentUser,
                online:store.getters.online
            }
        },
        // computed:{
        //     avatar(){
        //         return store.getters.currentUser.avatar
        //     },
        //     nickname(){
        //         return store.getters.currentUser.nickname
        //     }
            
        // },
       
        methods: {
        },
        created: function(){
        }
    }
</script>

<style lang="less">
    .card{
        display: flex;
        flex-direction: column;
        padding: 20px 15px;
        border-bottom: 1px solid #24272c;

        .header{
            display: flex;
            flex-direction: row;

            img{
                width: 40px; 
                height: 40px;
            }

            p{
                font-size: 16px;
                align-self:center;
                margin-left: 15px;
            }
            .dot{
                width: 8px;
                height: 8px;
                border-radius: 50%;
                align-self: center;
                margin-left: 10px;
                background: #eee;
            }
            .dot-green{
                background: #00ff00;
            }
            .dot-red{
                background: #ff0000;
            }
        }

        .search{
            input{
                margin-top: 10px;
                width: 100%;
                background: #26292e;
                border: 1px solid #3a3a3a;
                height: 30px;
                border-radius: 4px;
                color: #fff;
                padding: 10px;
            }
        }
    }
</style>