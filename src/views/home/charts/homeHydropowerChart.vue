<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>企业月用水用电排行</h3>
    </div>
    <div class="main">
      <div class="two">
        <div id="left" class="chart"/>
        <div id="right" class="chart"/>
      </div>
    </div>
  </el-card>


</template>

<script>
import {BillStatistics} from "../../../network/output";

export default {
  name: "homeHydropowerChart",
  data() {
    return {
      mycharts: null,
      myCharts: null

    }
  },
  methods: {
    setOption(id, d) {
      this.mycharts = this.$echarts.init(document.getElementById(id));
      let data = [];
      for (let i = 0; i < d.length; i++) {
        data.push({
          amount: d[i].amount,
          name: d[i].companyName,
        })
      }
      this.mycharts.setOption({
        yAxis: {
          data: data.map(i => i.name).splice(0, 5).reverse(),
          show: false
        },
        series: [{
          data: data.map(i => i.amount).reverse(),
          type: 'bar'
        }]
      })
    },
    myEcharts() {
      BillStatistics({showMessage: 1, month: "2021-05"}).then(res => {
        this.setOption("left", res.data.topMap.水费);
        this.setOption("right", res.data.topMap.电费);
      })
    },
    init(id, title) {
      this.myCharts = this.$echarts.init(document.getElementById(id));
      let option = {
        title: {
          text: title,
        },
        yAxis: {
          type: 'category',
          //企业名字
          data: []
        },
        xAxis: {
          type: 'value'
        },
        series: [{
          data: [],
          type: 'bar',
          itemStyle: {
            color: function (params) {
              let colorList = ['#FDBB80', '#F78E57', '#D72D16', '#D72D16', '#B50100', '#7B0105',];
              return colorList[params.dataIndex % colorList.length];
            }
          }
        }],
        label: {
          show: true,
          formatter: '{b}   {c}',
          color: '#ffffff',
          // fontSize: '12',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '17',
            fontWeight: 'bold'
          }
        },
      };
      this.myCharts.setOption(option);
    }
  },
  mounted() {
    this.init('left', '电费用量排行');
    this.init('right', '水费用量排行');
    this.myEcharts();
  }
}
</script>

<style scoped>
.two {
  display: flex;
  height: 420px;
}

.chart {
  flex: 1;
}

.ranking {
  text-align: center;
  /*color: #FFFFFF;*/
  margin: 0;
}
</style>