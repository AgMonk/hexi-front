<template>
  <el-container>
    <el-header>
      <h1>入驻公司</h1>
    </el-header>
    <el-main>
      <div id="componyChart" style="width: 510px; height: 450px"></div>
    </el-main>
  </el-container>
</template>

<script>
import {QueryCompanyStatistics} from "../../../network/output";

export default {
  name: "componyChart",
  methods: {
    myEcharts() {
      let myChart = this.$echarts.init(document.getElementById('componyChart'));
      QueryCompanyStatistics({showMessage: 1}).then(res => {
        let c = res.data.countGroupByMonth;
        let data = [];
        for (let i = 0; i < c.length; i++) {
          data.push({
            count: c[i].count,
            month: c[i].month,
          })
        }
        // let a = data.map(item => item.month).splice(12, 12);
        // console.log(a);
        myChart.setOption({
          xAxis: {
            data: data.map(item => item.month).splice(0, 6).reverse(),
          },
          series: [{
            name: '入驻公司',
            // data: data.map(item => item.count).splice(0, 12),
            data: [2,3,3,2,2,4,]
          }]
        })
      });
      let option = ({
        backgroundColor: '#0F373F',
        textStyle: {
          color: '#FFFFFF',
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '入驻公司',
          data: [],
          type: 'bar',
          label: {
            show: true, // 开启显示
            rotate: 50, // 旋转50度
            position: 'top', // 在上方显示
            distance: 20, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
            color: '#ffffff',
            // fontSize: 12
          },
          itemStyle: {
            color: function (params) {
              let colorList = ['#4082BA'];
              return colorList[params.dataIndex % colorList.length];
            }
          },

        }]
      });
      myChart.setOption(option);
    },
  },
  mounted() {
    this.myEcharts();
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #FFFFFF;
  font-weight: 1000;
}
</style>