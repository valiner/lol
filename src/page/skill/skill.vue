<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: true}" :right-options="{showMore: true}" @on-click-more="showMenus = true">召唤师技能</x-header>
            <data-list :selectedurl="'/api/skill'" :tourl="'/skilldetails/'"></data-list> 
  </div>
</template>

<script>
import { XHeader } from 'vux'
import dataList from '../../components/datalist'
export default {
  components: {
    XHeader,
    dataList
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  async mounted () {
    // console.log(this.$router)
    // console.log(this.router)
    // this.$axios.get('/api/school').then(function (response) {
    //   console.log(response.data)
    // })
    // .catch(function (error) {
    //   console.log(error)
    // })
    // const gg = await newsNew()
    // console.log(gg)
  }
}
</script>

<style lang="less" scoped>



</style>