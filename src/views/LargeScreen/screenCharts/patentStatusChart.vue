<template>
  <div id="status" style="height: 270px;"></div>
</template>

<script>
import {QueryPatentStatistics,} from "../../../network/output";

export default {
  name: "patentStatusChart",
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("status"));
      QueryPatentStatistics({showMessage: 1}).then(res => {
        let d = res.data.countGroupByStatus;
        d.count = d.map(i => i.count),
            d.status = d.map(i => i.status),

            myCharts.setOption({
              textStyle: {
                color: '#ffffff'
              },
              yAxis: {
                type: 'category',
                data: d.status,
              },
              xAxis: {
                type: 'value'
              },
              series: [{
                data: d.count,
                type: 'bar',
                label: {
                  show: true,
                  formatter: '{c}',
                  // position: 'inner',
                  color: '#ffffff'
                },
                itemStyle: {
                  color: function (params) {
                    let colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'];
                    return colorList[params.dataIndex % colorList.length];
                  }
                }
              }]
            })
      });
    },

  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped>

</style>