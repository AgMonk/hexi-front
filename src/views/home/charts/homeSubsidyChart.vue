<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>补贴信息</h3>
    </div>
    <div id="subsidy"/>
  </el-card>

</template>

<script>
import {QuerySubsidyStatistics} from "../../../network/output";

export default {
  name: "subsidyChart",
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("subsidy"));
      QuerySubsidyStatistics({showMessage: 1}).then(res => {
        let year = res.data.sumGroupByYear.reverse();
        // console.log(year.map(i => i.sum))
        myCharts.setOption({

          label: {
            show: true,
            formatter: '{c}',
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


#subsidy {
  height: 400px;
  width: 500px;

}
</style>