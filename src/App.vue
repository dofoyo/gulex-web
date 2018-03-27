<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bg-purple">GULEX</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link to="/bluechiplist">blue chips</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link to="/goodstocks">good stocks</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link to="/traderecords">trade records</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <router-link to="/onhands">on hand</router-link>
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
    background-color: #B3C0D1;
    color: #333;
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
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 160px;
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
  
</style>
