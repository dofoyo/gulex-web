<template>
    <div align="center">
        <el-card class="box-card"  align="left">
          <div slot="header" class="clearfix">
            <span>站内导航</span>
          </div>
          <div class="text item">
             <router-link to="/fingerpost" style="color:blue">交易提示</router-link> <br>
             <router-link to="/simulations" style="color:blue">交易明细</router-link> <br>
             <router-link to="/simulationplus" style="color:blue">个股盈亏</router-link> <br>
             <router-link to="/onhands" style="color:blue">当前持仓</router-link> <br>
             <router-link to="/yearvalues" style="color:blue">市值（年）</router-link> <br>
             <router-link to="/readme" style="color:blue">说明</router-link> <br><br>

             <router-link to="/bluechiplist" style="color:grey">侯选股</router-link> <br>
             <router-link to="/bluechiplistplus" style="color:grey">候选股plus</router-link> <br>
             <router-link to="/dayvalues" style="color:grey">市值（日）</router-link> <br>
             <router-link to="/valuechart" style="color:grey">回报率对比图</router-link> <br>
             <router-link to="/dzh" style="color:grey">大智慧数据下载情况</router-link> <br>
             <router-link to="/pb" style="color:grey">沪深A股平均市净率</router-link> <br>
             <router-link to="/jdh" style="color:grey">均线变动情况</router-link> <br>
          </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>