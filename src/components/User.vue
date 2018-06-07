<template>
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
</template>

<script>
    import store from '../store/store'

    export default {

        data () {
            return {
                currentUser:store.getters.currentUser
            }
        },       
        methods: {
        },
        computed: {
           online() {
            return store.getters.online;
           }
        },
        created: function(){
        }
    }
</script>

<style lang="less">
        
    .card{
        display: flex;
        flex-direction: column;
        padding: 10px 3px 0 3px;
        border-bottom: 1px solid #24272c;

        .header{
            display: flex;
            flex-direction: row;
      
            

            img{
                margin:auto;
                width: 50px; 
                height: 50px;
            }
            .bname{
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