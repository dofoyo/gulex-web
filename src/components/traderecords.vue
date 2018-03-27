<template>
<div>
  <div>
    <el-date-picker
      v-model="thedate"
      type="date"
      placeholder="选择日期"
      @change="getData">
    </el-date-picker>
  </div>
    <el-table
      :data="stocks"
      style="width:60%"
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
        prop="stockname"
        label="股票">
      </el-table-column>
      <el-table-column
        prop="buyorsell"
        label="买入/卖出">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
            <el-table-column
        prop="quantity"
        label="数量">
      </el-table-column>


    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Bluechips',
  data () {
    return {
      stocks:[],
      thedate:''
    }
  },
  mounted: function() {
    this.getData();
  },
  methods:{
    getData:function(){      
      var vm = this;
      var apiurl = process.env.API_ROOT + 'traderecords';
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
