<template>
  <div>
    <h2>专利数量</h2>
    <div id="patent"/>
  </div>
</template>

<script>
import {QueryPatentStatistics} from "../../../network/output";

export default {
  name: "patentChart",
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("patent"));
      QueryPatentStatistics().then(res => {
        let year = res.data.countGroupByYear;
        myCharts.setOption({
          textStyle: {
            color: '#FFFFFF',
          },
          xAxis: {
            type: 'category',
            data: year.map(i => i.year).reverse()
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            // data: year.map(i => i.count),
            data: [36, 57, 52, 56],
            type: 'line'
          }]
        })
      });
      myCharts.setOption({});

    },
  },
  mounted() {
    this.myEcharts()
  }
}
</script>

<style scoped>
#patent {
  height: 400px;
  /*height: 350px;*/
  width: 658.08px;
  background: #0F373F;
}

h2 {
  /*margin: 0;*/
  /*margin-bottom: 5px;*/
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
}
</style>