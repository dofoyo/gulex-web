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
    <div v-show="isloading">
      <i class="el-icon-loading"></i>
    </div>
    
    <el-table
      :data="list"
      style="width:100%"
      border
      :show-header="true"  show-summary>
      <el-table-column type="index"></el-table-column>

      <el-table-column prop="stockcode" label="代码"  align="center" sortable></el-table-column>
      <el-table-column prop="stockname" label="名称"  align="center" sortable></el-table-column>

      <el-table-column prop="quantity" label="数量（股）"  align="right"> </el-table-column >

      <el-table-column prop="buyDate" label="买入日期"  align="center" sortable> </el-table-column>
      <el-table-column  prop="buyPrice" label="买入价格（元）"  align="right">  </el-table-column>

      <el-table-column prop="sellDate"  label="卖出日期"  align="center" sortable>  </el-table-column>
      <el-table-column prop="sellPrice"  label="卖出(最新)价格（元）"  align="right"> </el-table-column>

      <el-table-column prop="profit"  label="盈亏（元）"  align="right" sortable> </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Bluechips',
  data () {
    return {
      list:[],
      thedate:'',
      isloading:true
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      vm.isloading=true;
      var apiurl = process.env.API_ROOT + 'simulationplus';
      this.$http.get(apiurl)
              .then(function(response){
                vm.isloading=false;
                vm.list = response.data.content;
                //console.log(vm.questions);
             })
              .catch(function(response) {
                vm.isloading=false;
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
