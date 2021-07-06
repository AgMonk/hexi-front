<template>
  <el-container>
    <el-header>
      <h1 class="title">水电信息管理</h1>
    </el-header>
    <el-main>
      <div class="main">

        <el-tooltip effect="light" placement="bottom">
          <div slot="content" style="width: 300px">
            <el-form label-width="70px">
              <el-form-item label="选择月份">
                <el-select v-model="month" @change="change">
                  <el-option
                      v-for="number in 6"
                      :key="number"
                      :label="getMonth(number - 1 )"
                      :value="getMonth(number - 1 )">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <h3 class="ranking">企业月用水用电排行</h3>

        </el-tooltip>

        <div class="two">
          <el-tooltip effect="light">
            <h3>企业电费用量前十</h3>
            <div v-for="(electricList, i) in electricTop" :key="i" slot="content"
                 style="width: 400px; font-weight: 600; font-size: 15px">
              <p>{{ i + 1 }}、 {{ electricList.companyName }} ： {{ electricList.amount }}</p>
            </div>
            <div id="left" class="chart"/>
          </el-tooltip>

          <el-tooltip effect="light">
            <h3>企业水费用量前十</h3>
            <div v-for="(waterList, i) in waterTop" :key="i" slot="content"
                 style="width: 400px; font-weight: 600; font-size: 15px">
              <p>{{ i + 1 }}、{{ waterList.companyName }} ： {{ waterList.amount }}</p>
            </div>
            <div id="right" class="chart"/>
          </el-tooltip>

        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {BillStatistics} from "../../../network/output";

export default {
  name: "hydropowerChart",
  data() {
    return {
      mycharts: null,
      myCharts: null,
      month: this.getMonth(0),
      waterTop: [],
      electricTop: []
    }
  },
  methods: {
    change() {
      this.myEcharts();
    },
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
          data: data.map(i => i.name).splice(0, 5),
          show: false
        },
        series: [{
          data: data.map(i => i.amount),
          type: 'bar'
        }]
      })
    },
    myEcharts() {
      BillStatistics({showMessage: 1, month: this.month}).then(res => {
        this.setOption("left", res.data.topMap.电费);
        this.setOption("right", res.data.topMap.水费);
        this.waterTop = res.data.topMap.水费
        this.electricTop = res.data.topMap.电费
        console.log(this.waterTop, this.electricTop)
      }).catch(() => [this.myEcharts()])
    },
    init(id, title) {
      this.myCharts = this.$echarts.init(document.getElementById(id));
      let option = {
        title: {
          text: title,
          textStyle: {
            color: "#ffffff"
          }
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
              let colorList = ['#7B0105', '#B50100', '#D72D16', '#D72D16', '#F78E57', '#FDBB80'];
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
    },
    getMonth(m) {
      let date = new Date()
      let target = date.getMonth() - m;
      if (target < 0) {
        target += 12
        date.setFullYear(date.getFullYear() - 1)
      }
      date.setMonth(target)
      return date.format("yyyy-MM")
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
.main {
  width: 510px;
  height: 480px;
  background: #0F373F;
}

.title {
  font-size: 30px;
  text-align: center;
  color: #FFFFFF;
}

.two {
  display: flex;
  height: 420px;
}

.chart {
  flex: 1;
}

.ranking {
  text-align: center;
  color: #FFFFFF;
  margin: 0;
}
</style>