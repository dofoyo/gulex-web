<template>
<div align="center">
<!--   <div>
  <el-date-picker
    v-model="thedate"
    type="date"
    placeholder="选择日期"
    @change="getData">
  </el-date-picker>
</div> -->
    <el-table :data="list" style="width:85%" border :show-header="true" show-summary>
      <el-table-column type="index" align="right"></el-table-column>
      <el-table-column prop="code" label="代码" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="tradeDate" label="买入日期" align="center" sortable></el-table-column>
      <el-table-column prop="quantity" label="数量" align="right"></el-table-column>
      <el-table-column prop="cost" label="成本" align="right"></el-table-column>
      <el-table-column prop="price" label="现价" align="right"></el-table-column>
      <el-table-column prop="value" label="市值" align="right" sortable></el-table-column>
      <el-table-column prop="profit" label="盈亏" align="right" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Bluechips',
  data () {
    return {
      list:[],
      thedate:''
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      var apiurl = process.env.API_ROOT + 'onhands';
      this.$http.get(apiurl)
              .then(function(response){
                vm.list = response.data.content;
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
