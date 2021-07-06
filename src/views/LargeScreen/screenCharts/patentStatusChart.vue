<template>
  <div id="status" style="height: 270px;"/>
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
                    let colorList = ['#3F024C', '#7A2B84', '#996EAD', '#C1A5CF', '#91c7ae', '#749f83', '#ca8622'];
                    return colorList[params.dataIndex % colorList.length];
                  }
                }
              }]
            })
      }).catch(() => {
        this.myEcharts();
      })
    },

  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped>

</style>