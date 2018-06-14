<template>
<div align="center">
  
    <div v-show="isloading">
      <i class="el-icon-loading"></i>
    </div>
    <el-table
      :data="list"
      style="width:100%"
      border
      :show-header="true">
      <el-table-column
        prop="date"
        label="日期" align="center">
      </el-table-column>
      <el-table-column
        prop="szzs"
        label="上证指数" align="center">
      </el-table-column>
      <el-table-column
        prop="pb"
        label="沪深A股市净率"  align="center">
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
      var apiurl = process.env.API_ROOT + 'pb';
      this.$http.get(apiurl)
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

    }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
