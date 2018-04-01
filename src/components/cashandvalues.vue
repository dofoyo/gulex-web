<template>
    <el-table
      :data="stocks"
      style="width:100%"
      border
      :show-header="true">
      <el-table-column
        type="index">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="cash"
        label="现金">
      </el-table-column>
      <el-table-column
        prop="value"
        label="市值">
      </el-table-column>
      <el-table-column
        prop="total"
        label="合计">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'goodstocks',
  data () {
    return {
      stocks:[]
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      var apiurl = process.env.API_ROOT + 'values';
      this.$http.get(apiurl)
              .then(function(response){
                vm.stocks = response.data.content;
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
