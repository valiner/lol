<template>
  <div class="main">
  <loading class="loading" v-if="showloading"></loading>

  <div v-for="item in list">
    {{item.content}}
    1
    
  </div>


  <router-link :to="'addpost'"><span class="add_post"></span></router-link>
    
  </div>
</template>

<script>
import icon from '../page/common/icon'

export default {
  components: {
    icon,
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  props: ['list'],
  async mounted () {

  }
}
</script>

<style scoped>

</style>