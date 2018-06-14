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
    <div align="right">
      系统会自动买入上涨概率大于{{buyvalue}}的股票
    </div>
    <el-table
      :data="list"
      style="width:100%"
      border
      :show-header="true">
      <el-table-column
        type="index" align="center">
      </el-table-column>
      <el-table-column
        prop="code"
        label="代码" align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称" align="center">
      </el-table-column>
      <el-table-column
        prop="upProbability"
        label="上涨概率"  align="center">
      </el-table-column>
    </el-table>

    <div>
      <a v-bind:href="downurl">点击下载大智慧自选股导入格式文件</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Bluechips',
  data () {
    return {
      list:[],
      thedate:'',
      isloading:true,
      buyvalue:'',
      downurl:''
    }
  },
  mounted: function() {
    this.getData();
    this.getBuyValue();
    this.downurl = process.env.API_ROOT + 'downbluechips';
  },
  methods:{
    getData:function(){      
      var vm = this;
      vm.isloading=true;
      var apiurl = process.env.API_ROOT + 'bluechips';
      this.$http.get(apiurl,{params:{'date':vm.thedate}})
              .then(function(response){
                vm.list = response.data.content;
                vm.isloading = false;
                //console.log(vm.questions);
             })
              .catch(function(response) {
                vm.isloading = false;
                console.log("getData: there are something wrong!!!");
                console.log(apiurl)
                console.log(response);
              })

    },
    getBuyValue:function(){      
      var vm = this;
      vm.isloading=true;
      var apiurl = process.env.API_ROOT + 'buyvalue';
      this.$http.get(apiurl)
              .then(function(response){
                vm.buyvalue = response.data.content;
                vm.isloading = false;
                //console.log(vm.questions);
             })
              .catch(function(response) {
                vm.isloading = false;
                console.log("buyValue: there are something wrong!!!");
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
