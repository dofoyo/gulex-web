<template>
   <div align="center">
    <div v-show="isloading">
      <i class="el-icon-loading"></i>
    </div>
    <div >
      <el-table
        :data="list"
        style="width:100%"
        border
        :show-header="true">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"  align="center">
        </el-table-column>
        <el-table-column
          prop="cash"
          label="现金"  align="right">
        </el-table-column>
        <el-table-column
          prop="value"
          label="市值"  align="right">
        </el-table-column>
        <el-table-column
          prop="total"
          label="净值"  align="right">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodstocks',
  data () {
    return {
      list:[],
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
      var apiurl = process.env.API_ROOT + 'yearvalues';
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
