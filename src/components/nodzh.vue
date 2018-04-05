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
    <el-table
      :data="list"
      style="width:50%"
      border
      :show-header="true"
      class="el-table__body"
      @row-click="doSelect">
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
      <input type="file" id="selectFile" name="selectFile" accept="text/plain" v-on:change="upload">
    </div>

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
      var apiurl = process.env.API_ROOT + 'nodzh';
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
    },
    upload:function (e) {
          var vm = this;
          var apiurl = process.env.API_ROOT + 'dzh';
          //e.preventDefault();
          var file = e.target.files[0];
          //console.log(vm.image);
          let supportedTypes = ['text/plain'];
          if (file && supportedTypes.indexOf(file.type) >= 0) {
              let formData = new FormData();
              formData.append('file', file);
              //formData.append('code',vm.question.id);
              let config = {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
              }
              this.$http.post(apiurl, formData, config).then(function (res) {
                //console.log(res);
            })
          } else {
              alert('文件格式只支持txt');
          }
      },
      doSelect:function(){
        var button = document.getElementById("selectFile");
        button.click();
      }
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
