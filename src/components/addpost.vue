<template>
  <div class="main">
  <x-header>{{htitle}}<a slot="right" @click="send">发表</a></x-header>
   <group>
      <x-input :placeholder="'标题1dd'" v-model="title" v-if="show_title"></x-input>
      <x-textarea :max="1000" v-model="content" name="description" :placeholder="'我有话要说.1dd..'" :height="400"></x-textarea>

    </group>
  </div>

</template>

<script>
import { XHeader, XTextarea, Group, XInput } from 'vux'
import icon from '../page/common/icon'
import { createpost, createcomment } from '../service/getData'
import loading from './loading'

export default {
  components: {
    XTextarea,
    XInput,
    Group,
    XHeader,
    icon,
    loading
  },
  data () {
    return {
      content: '',
      title: '',
      show_title: true,
      htitle: '',
      post_id:'',
      parent_id:'',
      type: 'post',
    }
  },
  methods: {

    send: function(){
      if (this.type == 'reply') {
        if (this.content!="") {
        new createcomment(this.parent_id, this.post_id, this.content).then(res => {
              this.$router.push({
                path: "posts/"+this.post_id
              })
          })
        }else{
          this.$vux.toast.text('请填写完整');
        }
      }else if(this.type == 'replycomment'){
        if (this.content!="") {
        new createcomment(this.parent_id, this.post_id, this.content).then(res => {
              this.$router.push({
                path: "comments/"+this.parent_id+"/comments/?post_id="+this.post_id
              })
          })
        }else{
          this.$vux.toast.text('请填写完整');
        }
      }else if(this.type == 'post'){
        if (this.content!="" && this.title!="") {
        new createpost(this.title, this.content).then(res => {
              this.$router.push({
                path: "bbs"
              })
          })
        }else{
          this.$vux.toast.text('请填写完整');
        }
      }
    }
  },
  computed: {
  },
  mounted () {
    var routetype  = this.$route.query.type; 
    this.type =  routetype;
    if (routetype == 'reply') {
      this.post_id = this.$route.query.id;
      this.parent_id = 0;
      this.show_title = false;
      this.htitle = '回复';
    }else if(routetype == 'post'){
      this.htitle = '发贴';
    }else if(routetype == 'replycomment'){
      this.parent_id = this.$route.query.parent_id;
      this.post_id = this.$route.query.post_id;
      this.show_title = false;
      this.htitle = '回复';
    }
  }
}
</script>

<style scoped>
.main{
  background-color: #f6f6f6; 
}



</style>