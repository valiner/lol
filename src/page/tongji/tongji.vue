<template>
  <div style="position: relative">
  <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">统计</x-header>
  <loading class="loading" v-if="showloading"></loading>
  <div class='main' v-else>
    <group>
      <selector title="位置" :options="positionlist" v-model="dposition" @on-change="onchange"></selector>
    </group>

    <div class='tmain'>
      <div class="listtable">
      <x-table class="table t1" :cell-bordered="false" :content-bordered="false" border="0">
        <thead>
          <tr>
            <th></th>
            <th>英雄</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in showlist">
             <td>
               {{index+1}}
             </td>
            <td>
            <div style="float: left;padding:5px"><img :src="item.s_img" width="32" height="32"></div>
            <div style="float: left">
              <div class='fonts'>{{item.s_name}}</div>
              <div class='fonts'>{{item.s_role}}</div>
            
            </div> 
            </td>
          </tr>
        </tbody>
      </x-table>
    </div>

    <div class="link"></div>
    <div class='datatable'>

      <x-table class="table t2" :cell-bordered="false" :content-bordered="false">
        <thead>
          <tr>
            <th v-for="item in th" @click="order(item)" :class="{active : selectitem == item}">
              {{item}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in showlist">
            <td>{{(item.s_winpercent*100).toFixed(2)}}%</td>
            <td>{{(item.s_playpercent*100).toFixed(2)}}%</td>
            <td>{{(item.s_banrate*100).toFixed(2)}}%</td>
            <td>{{item.s_kills.toFixed(2)}}</td>
            <td>{{item.s_deaths.toFixed(2)}}</td>
            <td>{{item.s_assists.toFixed(2)}}</td>
            <td>{{item.s_totaldamagedeal.toFixed(0)}}</td>
            <td>{{item.s_totaltaken.toFixed(0)}}</td>
            <td>{{item.s_totalheal.toFixed(0)}}</td>
            <td>{{item.s_largeskill.toFixed(0)}}</td>
            <td>{{item.s_minionskill.toFixed(0)}}</td>
            <td>{{item.s_gold.toFixed(0)}}</td>
            <td>{{item.s_overallpositionchange.toFixed(0)}}</td>
          </tr>
        </tbody>

      </x-table>
    </div>
    </div>
    </div>
    

  </div>
</template>

<script>
import { Group, Selector, XHeader, XTable, Tabbar, TabbarItem } from 'vux'
import icon from '../common/icon'
import { tongji } from '../../service/getData'
import loading from '../../components/loading'
const th = () => ['胜率', '登场', '被禁', '击杀', '死亡', '助攻', '造成伤害', '承受伤害', '总治疗量', '场均最大连杀','补刀数', '金钱', '排名变化']
export default {
  components: {
    Group,
    Selector,
    XHeader,
    XTable,
    Tabbar,
    TabbarItem,
    icon,
    loading
  },
  data () {
    return {
      th: th(),
      showloading: true,
      selectitem: '胜率',
      tongjilist: [],
      showlist: [],
      dposition: 'p6',
      positionlist: [{key: 'p1', value: '上单'}, {key: 'p2', value: '打野'}, {key: 'p3', value: '中单'}, {key: 'p4', value: '辅助'}, {key: 'p5', value: '射手'}, {key: 'p6', value: '全部'}],
      yx: {p1: 'Top', p2: 'Jungle', p3: 'Middle', p4: 'Support', p5: 'ADC', p6: '全部'},
      sortyx: {'胜率':'s_winpercent', '登场':'s_playpercent', '被禁':'s_banrate', '击杀':'s_kills', '死亡':'s_deaths', '助攻':'s_assists', '造成伤害': 's_totaldamagedeal', '承受伤害':'"s_totaltaken', '总治疗量':'s_totalheal', '场均最大连杀':'s_largeskill','补刀数':'s_minionskill', '金钱':'s_gold', '排名变化':'s_overallpositionchange'}
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
    this.showloading = false
  }
}
</script>

<style lang="less" scoped>
.weui-tabbar{
  position:fixed;
}
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
}
  .listtable tr td{
  }
  .listtable{
   float: left;
    padding-bottom:77px;
  }  
  .link{
    border-bottom: 1px solid #C7C7C7;
  }
  .tmain{
     margin-top:10px;
     
  }
  .datatable{
   padding-bottom:77px;
   float:right;
   width:50%;
   overflow: scroll;
   padding-top:1px;
  }
  .fonts{
    font-size: 10px;
  }
  .active{
    color:#b21c30;
  }
  .table{
    line-height: 20px;
    font-size:10px;
    border-top: 0;


  }
  .table th{
    height: 30px;
    width: 20px;
  }
  .t2{
    table-layout:fixed;
  }
  .t2 th,.t2 td{
    width:50px;
    font-size:10px;
  }
  .t1 th{
    height:40px;
  }
  .t1 td{
    text-align: left;
  }
  .table td{
    height:50px
  }
  .t1 tr td:first-child,.t1 th:first-child{
    width:20px;
    font-size:10px;
    text-align:center;
  }
  .t1 tr td:last-child,.t1 last:first-child{
    width:125px;
  }
  .vux-table td:before, .vux-table th:before{
    border-bottom: 0;
    
  }
   .vux-table:after{
    border-top: 0;
   }
  .main{
  padding-top:46px;
  padding-bottom:77px;
   }
  .loading{
    margin-top:46px;
  }


</style>