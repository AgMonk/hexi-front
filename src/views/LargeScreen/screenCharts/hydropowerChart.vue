<template>
  <el-container>
    <el-header>
      <h1 class="title">水电信息管理</h1>
    </el-header>
    <el-main>
      <div class="two">
        <div id="left" class="chart">

        </div>
        <div class="chart"></div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {BillStatistics} from "../../../network/output";

export default {
  name: "hydropowerChart",
  methods: {
    myEcharts() {
      let myChart = this.$echarts.init(document.getElementById('left'));
      let option = {
        yAxis: {
          type: 'category',
          data: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        xAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 110, 130],
          type: 'bar'
        }]
      };
      myChart.setOption(option);
      BillStatistics().then(res => {
        console.log(res)
      })
    },

  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped>
.title {
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
}

.two {
  display: flex;
  width: 510px;
  height: 480px;
  background: #0F373F;
}

.chart {
  flex: 1;

}
</style>