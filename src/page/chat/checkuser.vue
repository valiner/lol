<template>
  <div class="load">
    loading
  </div>
</template>

<script>
import { userpro } from '../../service/getData'
export default {
  components: {
  },
  data () {
    return {
      user:{}
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
    new userpro().then(res => {
       this.user = res.data.data;
       this.$router.push(
        { name: 'groupchat', params: { user: this.user }}
       );
    }).catch(err => {
       this.$vux.toast.text("请登陆");
    });

  }
}
</script>

<style scoped>
.load{
  position: absolute;
  top: 50%;
  height: 240px;
  margin-top: -120px; /* negative half of the height */
  left:50%;
  width: 100px;
  margin-left: -50px;
}



</style>