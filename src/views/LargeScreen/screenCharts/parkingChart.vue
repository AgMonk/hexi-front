<template>
<div>
  <div id="parking" style="width: 100%; height: 160px"></div>
  <el-table
      :cell-style="{background:'#042E36',color:'#11D5E4',padding:'0'}"
      :data="inOutData"
      :header-cell-style="{background:'#042E36',color:'#11D5E4',padding:'0'}"
      style="font-size: 10px"
  >
    <el-table-column label="车牌" prop="plateNo"></el-table-column>
    <el-table-column label="最近出入" prop="gateName"></el-table-column>
    <el-table-column label="出入时间" prop="timestamp.timeString"></el-table-column>
  </el-table>
</div>
</template>

<script>
import {BarrierLogPage, CarStatus} from "../../../network/output";

export default {
  name: "parkingChart",
  data() {
    return {
      inOutData: undefined,
      timer: null,
    }
  },
  methods: {
    myEcharts() {
      let myCharts = this.$echarts.init(document.getElementById("parking"));
      CarStatus().then(res => {
        let d = res.data
        let data = new Array();
        for (let i = 0; i < d.length; i++) {
          data.push({
            value: d[i].count,
            name: d[i].carTypeName,
          })
        }
        console.log(data);
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
              // name: '企业类型',
              type: 'pie',
              radius: '75%',
              label: {
                show: true,
                formatter: '{c}',
                position: 'inner',
                color: '#ffffff'
              },
              data,
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
      });

    },
    barrierLogPage() {
      let paging = new Object();
      paging.page = 1, paging.size = 4, paging.end = Math.floor(new Date().getTime() / 1000),
          paging.start = paging.end - 24 * 60 * 60 * 30 * 6;
      BarrierLogPage(paging).then(res => {
        // console.log(res);
        this.inOutData = res.data.records;
      })
    },


  },
  mounted() {
    this.myEcharts();
    this.barrierLogPage();
    this.timer = setInterval(() => {
      this.barrierLogPage()
    }, 6000 * 30);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
}
</script>

<style scoped>

</style>