<template>
  <div>
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




</style>