<template>
<div align="center">
    <div v-show="isloading">
      <i class="el-icon-loading"></i>
    </div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入代码或名称" v-model="keyword" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="getData"></el-button>
      </el-input>
    </div>
    <el-table
      :data="list"
      style="width:100%"
      border
      :show-header="true"
      highlight-current-row
      @current-change="showSublist"
      >
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
            prop="buysell"
            label="提示"  align="center">
          </el-table-column>
          <el-table-column
            prop="descript"
            label="因由"  align="center">
          </el-table-column>
    </el-table>

    <el-dialog :title="subtitle" :visible.sync="dialogTableVisible" @close="doClose">
      <el-table :data="sublist">
        <el-table-column
          prop="dateString"
          label="日期"  align="center">
        </el-table-column>
        <el-table-column
          prop="buysell"
          label="交易"  align="center">
        </el-table-column>
        <el-table-column
          prop="descript"
          label="因由"  align="center">
        </el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'jdhs',
  data () {
    return {
      list:[],
      isloading:true,
      keyword:'',

      dialogTableVisible: false,
      sublist:[],
      subtitle:''

    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      vm.isloading=true;
      var apiurl = process.env.API_ROOT + 'fingerpost';
      this.$http.get(apiurl,{params:{'keyword':vm.keyword}})
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
    showSublist:function(val){
        //console.log("showSublist");
        this.dialogTableVisible=true;
        this.subtitle = val.name;
        this.getSublist(val.name);
    },
    getSublist:function(val){
      var vm = this;
      vm.isloading=true;
      var apiurl = process.env.API_ROOT + 'fingerpost';
      this.$http.get(apiurl,{params:{'keyword':val}})
              .then(function(response){
                vm.sublist = response.data.content;
                vm.isloading = false;
                //console.log(vm.questions);
             })
              .catch(function(response) {
                vm.isloading = false;
                console.log("getSublist: there are something wrong!!!");
                console.log(apiurl)
                console.log(response);
              })    
    },
    doClose:function(){
        this.sublist = null;
    }

  }
}
</script>