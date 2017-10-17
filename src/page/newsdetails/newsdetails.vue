<template>
	<div>
		<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true"></x-header>
		<div>
		<div class="new_title">{{newcontent['title']}}</div>
		<div class="info">
		  <span class="new_form">{{newcontent['source']}}</span>
		  <span class="new_date">{{newcontent['date']}}</span>
		</div>	
		<div class="new_content" v-html="newcontent['content']">
		</div>			
		</div>
	</div>
</template>

<script>
import { XHeader } from 'vux'
import { newDetails } from '/lol/src/service/getData'
export default{
  data () {
    return {
      newid: '',
      newcontent: []
    }
  },
  async mounted () {
    // console.log(this.$router)
    this.newid = this.$route.params.newid
    const details = await newDetails(this.newid)
    console.log(details.data.data)
    this.newcontent = details.data.data[0]
  },
  components: {
    XHeader
  }
}
</script>
<style type="text/css" scoped>
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
	}

</style>