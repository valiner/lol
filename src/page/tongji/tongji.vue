<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">统计</x-header>
    <group>
      <selector title="位置" :options="positionlist" v-model="dposition" @on-change="onchange"></selector>
    </group>
    <div>
      <x-table class="listtable">
        <thead>
          <tr>
            <th></th>
            <th>英雄</th>
            <th v-for="item in th" @click="order(item)" :class="{active : selectitem == item}">
              {{item}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in showlist">
             <td>
               {{index}}
             </td>
            <td>
            <div style="float: left;padding:5px"><img :src="item.s_img" width="32" height="32"></div>
            <div style="float: left">
              <div class='fonts'>{{item.s_name}}</div>
              <div class='fonts'>{{item.s_role}}</div>
            
            </div> 
            </td>
            <td>{{(item.s_winpercent*100).toFixed(2)}}</td>
            <td>{{(item.s_playpercent*100).toFixed(2)}}</td>
            <td>{{(item.s_banrate*100).toFixed(2)}}</td>
    
          </tr>
        </tbody>
      </x-table>
    </div>
     
  </div>
</template>

<script>
import { Group, Selector, XHeader, XTable } from 'vux'
import { tongji } from '../../service/getData'
const th = () => ['胜率', '登场', '被禁']
export default {
  components: {
    Group,
    Selector,
    XHeader,
    XTable
  },
  data () {
    return {
      th: th(),
      selectitem: '胜率',
      tongjilist: [],
      showlist: [],
      dposition: 'p6',
      positionlist: [{key: 'p1', value: '上单'}, {key: 'p2', value: '打野'}, {key: 'p3', value: '中单'}, {key: 'p4', value: '辅助'}, {key: 'p5', value: '射手'}, {key: 'p6', value: '全部'}],
      yx: {p1: 'Top', p2: 'Jungle', p3: 'Middle', p4: 'Support', p5: 'ADC', p6: '全部'},
      sortyx: {'胜率':'s_winpercent', '登场':'s_playpercent', '被禁':'s_banrate'}
    }
  },
  methods: {
    onchange: function (val) {
      if (val !== 'p6') {
        var self = this
        this.showlist = self.tongjilist.filter(function (item) {
          return item.s_role === self.yx[val]
        })
      } else {
        this.showlist = this.tongjilist
      }
      this.order(this.selectitem)
    },
    order: function (val) {
      this.selectitem = val
      this.showlist = this.showlist.sort((a, b) => b[this.sortyx[val]] - a[this.sortyx[val]])
    }
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
    let res = await tongji()
    this.tongjilist = res.data.data
    this.showlist = this.tongjilist
    console.log(this.tongjilist)
  }
}
</script>

<style lang="less" scoped>
  .listtable tr td{
    text-align: left;
  }
  .listtable{
    line-height: 20px;
  }
  .fonts{
    font-size: 10px;
  }
  .active{
    color:#b21c30;
  }
</style>