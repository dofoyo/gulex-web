<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">
              GULEX 1.0
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/bluechiplist">候选股</router-link>
            </div>
          </el-col>
<!--           <el-col :span="3">
  <div class="grid-content bg-purple">
    <router-link to="/bluechiplistplus">候选股2</router-link>
  </div>
</el-col> -->
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/traderecords">交易明细</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/traderecordplus">个股盈亏</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/onhands">当前持仓</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/yearvalues">市值</router-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <router-link to="/valuechart">回报率</router-link>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  .el-header {
    background-color: #333333;
    color: #FFFFFF;
    text-align: left;
    line-height: 60px;
  }

    .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #CCCCCC;
    color: #333;
    text-align: left;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  a {
    text-decoration:none;
    color:#FFFFFF;
  }
  a:active{ color:#990033;}

  
</style>
