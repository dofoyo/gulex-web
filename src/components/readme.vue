<template>
    <div align="center">
        <el-card class="box-card"  align="left">
          <div slot="header" class="clearfix">
            <span>操作策略</span>
          </div>
          <div class="text item">
            1.  候选股<br>
            根据近三年的年报，达到以下要求，为候选股。<br>
            1.1 主营业务销售收入持续增长，且年均增长率大于20%(二年增长大于44%)；<br>
            1.2 主营业务利润持续增长，且年均增长率大于20%(二年增长大于44%)；<br>
            1.3 经营活动现金流为正，且持续增长，且年均增长率大于20%(二年增长大于44%)；<br>
            1.4 现金流与主营业务利润的比率大于1；<br>
            1.5 应收款与主营业务销售收入的比率小于20%。<br>
            
            <p/>
            
            2.  选时<br>
            2.1 买入时机：上升趋势已形成，但还未大幅上涨；<br>
            2.2 卖出时机：被剔除候选股，且股价跌破60日均线；或者，连续10个交易日股价低于60均线<br>
            
            <p/>
            
            3.  交易<br>
            3.1 每次买入额为总资产的30%。<br>
            3.2 可融资；<br>
            3.3 可加仓；<br>
            3.4 不止损；<br>
            3.5 新股满300个交易日。
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
  .text {
    font-size: 14px;
    align: left;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 800px;
  }
</style>