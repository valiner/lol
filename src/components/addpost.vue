<template>
  <div class="main">
  <x-header>发贴<a slot="right" @click="send">发表</a></x-header>
   <group>
      <x-input :placeholder="'标题'" v-model="title"></x-input>
      <x-textarea :max="1000" v-model="content" name="description" :placeholder="'我有话要说...'" :height="400"></x-textarea>
    </group>
  </div>

</template>

<script>
import { XHeader, XTextarea, Group, XInput } from 'vux'
import icon from '../page/common/icon'
import { createpost } from '../service/getData'
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
    }
  },
  methods: {
    send: function(){
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
  },
  computed: {
  },
  async mounted () {
  }
}
</script>

<style scoped>
.main{
  background-color: #f6f6f6; 
}



</style>