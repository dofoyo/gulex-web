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
        prop="dateString"
        label="日期"  align="center">
      </el-table-column>
      <el-table-column
        prop="descript"
        label="内容"  align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'jdhs',
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
      var apiurl = process.env.API_ROOT + 'jdh';
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