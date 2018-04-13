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
    <el-table show-summary
      :data="list"
      style="width:80%"
      border
      :show-header="true"
      class="el-table__body">
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
        prop="ipoDate"
        label="IPO">
      </el-table-column>

      <el-table-column
        prop="okYears"
        label="入选年份">
      </el-table-column>

      <el-table-column
        prop="aboveAv120Days"
        label="近100日内股价在120日线上天数">
      </el-table-column>      

      <el-table-column
        prop="biasOfAv120"
        label="当前股价与120日线偏离值">
      </el-table-column>      

      <el-table-column
        prop="biasOfMidPrice"
        label="当前股价与股价中位数偏离值">
      </el-table-column>

      <el-table-column
        prop="upProbability"
        label="上涨概率"  align="center">
      </el-table-column>

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
      var apiurl = process.env.API_ROOT + 'bluechips';
      this.$http.get(apiurl,{params:{'date':vm.thedate}})
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
