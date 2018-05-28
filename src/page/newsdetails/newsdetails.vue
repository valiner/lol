<template>
	<div>
		<x-header></x-header>
		<loading class="loading" v-if="showloading"></loading>
		<div class='main'>
		<div class="new_title">{{newcontent['new_title']}}</div>
		<div class="info">
		  <span class="new_form">{{newcontent['new_form']}}</span>
		  <span class="new_date">{{newcontent['new_time']}}</span>
		</div>	
		<div class="new_content" v-html="newcontent['new_content']">
		</div>			
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { newDetails } from '../../service/getData'
import loading from '../../components/loading'
export default{
  data () {
    return {
      newid: '',
      newcontent: [],
      showloading: true
    }
  },
  async mounted () {
    // console.log(this.$router)
    this.newid = this.$route.params.newid
    const details = await newDetails(this.newid)
    console.log(details.data.data)
    this.newcontent = details.data.data
    this.showloading = false
  },
  components: {
    XHeader,
    loading
  }
}
</script>
<style type="text/css" scoped>
.vux-header{
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 100;
}
	.main{
		padding-top:46px;
	}
	.new_title{
		font-size: 30px;
		text-align: center;
		padding: 5px 10px;
	}
	.new_form{
		float: left;
	}
	.new_date{
		float: right;
	}
	.info{
		font-size: 12px;
		height: 16px;
		line-height: 16px;
		color: #cccccc;
		padding: 0 10px;
	}
	.new_content{
		padding: 0 10px;
		font-size: 16px;
		line-height: 24px;
	    overflow: hidden;
	}
	

</style>
<style>
	.new_content img{
		width: 100%;
	}
</style>