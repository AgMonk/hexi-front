<template>
  <div id="authentication" style="width: 400px;height: 270px;"/>
</template>

<script>
import {QueryCompanyStatistics} from "../../../network/output";

export default {
  name: "authenticationChart",
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("authentication"));
      QueryCompanyStatistics({showMessage: 1}).then(res => {
        let d = res.data.countGroupByCertificationType;
        let data = [];
        for (let i = 0; i < d.length; i++) {
          data.push({
            value: d[i].count,
            name: d[i].certificationType,
          })
        }
        myCharts.setOption({
          tooltip: {
            trigger: 'item'
          },

          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
              color: '#ffffff'
            },
          },
          series: [
            {
              name: '企业类型',
              type: 'pie',
              radius: '75%',
              label: {
                show: true,
                formatter: '{c}',
                position: 'inner',
                color: '#ffffff'
              },
              data,
              itemStyle: {
                color: function (params) {
                  let colorList = ['#2F3495', '#7DA8C5', '#A9DCE8'];
                  return colorList[params.dataIndex % colorList.length];
                }
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
              }
            }
          ]
        })
      }).catch(() => {
        this.myEcharts()
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