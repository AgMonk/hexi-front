<template>
  <el-col :span="10">
    <div id="enterprise" style="width: 500px;height: 300px; background: #FFFFFF; "></div>
  </el-col>
</template>

<script>
import {QueryCompanyStatistics} from "../../../network/output";

export default {
  name: "componyType",
  methods: {
    myEcharts() {
// 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('enterprise'));

      QueryCompanyStatistics({showMessage: 1}).then(res => {
        // console.log(res)
        let c = res.data.countGroupByType;
        let data = [];
        for (let i = 0; i < c.length; i++) {
          // console.log(c[i].count);
          data.push({
            value: c[i].count,
            name: c[i].type,
          });
          // console.log(data)
        }
        myChart.setOption({
          series: [{
            // name: '企业类型',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },

            label: {
              show: true,
              formatter: '{c}',
              position: 'inner',
              color: '#ffffff'
            },

            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data
          }]
        })
      })
// 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            fontSize: '14px',
          }
        },
        series: []
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
  mounted() {
    this.myEcharts();
  },
}
</script>

<style scoped>
#enterprise {
  border-radius: 5px;
}
</style>