<template>
  <div>
    <h2>补贴信息</h2>
    <div id="subsidy"/>
  </div>
</template>

<script>
import {QuerySubsidyStatistics} from "../../../network/output";

export default {
  name: "subsidyChart",
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("subsidy"));
      QuerySubsidyStatistics().then(res => {
        let year = res.data.sumGroupByYear;
        // console.log(year.map(i => i.sum))
        myCharts.setOption({
          textStyle: {
            color: '#ffffff'
          },
          label: {
            show: true,
            formatter: '{c}',
            color: '#ffffff',
            // fontSize: '12',
          },
          grid: {
            left: 80
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: year.map(i => i.year),

          },
          yAxis: {
            type: 'value',
            // show: false
          },
          series: [{
            show: false,
            data: year.map(i => i.sum),
            type: 'line',
            areaStyle: {},
            label: {
              rotate: -20
            }
          }]
        });
      });
    }
  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped>
h2 {
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
}

#subsidy {
  height: 400px;
  /*height: 350px;*/
  width: 658.08px;
  background: #0F373F;
}
</style>