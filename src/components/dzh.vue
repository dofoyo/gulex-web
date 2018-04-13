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

    <div align="right"><el-button type="primary" icon="el-icon-upload2" 
      @click="doSelect">上传</el-button><el-button type="primary" icon="el-icon-refresh" 
      @click="refresh">刷新</el-button></div>
    <el-table
      :data="list"
      style="width:50%"
      border
      :show-header="true"
      class="el-table__body">
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
        prop="dzhDate"
        label="dzh"  
        align="center">
      </el-table-column>

    </el-table>

    <div v-show="false">
      <input type="file" id="selectFile" name="selectFile" accept="text/plain" v-on:change="upload" multiple="multiple">
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
      var apiurl = process.env.API_ROOT + 'dzh';
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
    },
    upload:function (e) {
          var vm = this;
          var apiurl = process.env.API_ROOT + 'updzh';
          //e.preventDefault();
          let supportedTypes = ['text/plain'];
          let formData = new FormData();
          var files = e.target.files;
          for(var i=0;i<files.length;i++){
              var file = files[i];

              if (file && supportedTypes.indexOf(file.type) >= 0) {
                  formData.append("file", file);
                }
          }
          let config = {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
          }
          
          this.$http.post(apiurl, formData, config).then(function (res) {
                //console.log(res);
                vm.$message({
                    showClose: true,
                    message: "上传成功！",
                    type: 'success'
                  });
          })

      },
      doSelect:function(){
        var button = document.getElementById("selectFile");
        button.click();
      },
      doRefresh:function(){
        var vm = this;
        var apiurl = process.env.API_ROOT + 'refresh';
        let formData = new FormData();
        let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
        }
        this.$http.post(apiurl, formData, config).then(function (res) {
                //console.log(res);
                vm.$message({
                    showClose: true,
                    message: "完成刷新！",
                    type: 'success'
                  });
          })
      },
      refresh() {
        this.$confirm('此操作将会持续较长时间, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.doRefresh();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '放弃操作'
          });          
        });
      }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
