<template>
    <el-table
      :data="stocks"
      style="width:100%"
      border
      :show-header="true">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="code"
        label="代码">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        prop="goodTimes"
        label="入选次数">
      </el-table-column>
      <el-table-column
        prop="goodPeriod"
        label="入选年份">
      </el-table-column>
      <el-table-column
        prop="lastPeriod"
        label="截止年份">
      </el-table-column>
      <el-table-column
        prop="upProbability"
        label="上涨概率">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'goodstocks',
  data () {
    return {
      stocks:[]
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      var apiurl = process.env.API_ROOT + 'goodStocks';
      this.$http.get(apiurl)
              .then(function(response){
                vm.stocks = response.data.content;
                //console.log(vm.questions);
             })
              .catch(function(response) {
                console.log("getData: there are something wrong!!!");
                console.log(apiurl)
                console.log(response);
              })

    }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
