<template>
  <div id="parkingChart" style="width: 461px; height: 170px"></div>
</template>

<script>
import {CarStatus} from "../../../network/output";

export default {
  name: "parkingCar",
  methods: {
    myCharts() {
      let chart = this.$echarts.init(document.getElementById("parkingChart"));
      CarStatus({showMessage: 1}).then(res => {
        console.log(res.data)
        let carsList = res.data;
        let test = carsList.filter((group) => group.timeout);
        console.log(test)


        chart.setOption({
          tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['1', '2', '3', '4', '5', '6', '7', '8']
          },
          series: [
            {
              name: '停车超时数（3天）',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '40%'],
              labelLine: {
                show: true
              },
              data: [
                {value: 1048, name: '1'},
                {value: 335, name: '2'},
                {value: 775, name: '3'},
                {value: 679, name: '4',}
              ]
            },
            {
              name: '正常停车数',
              type: 'pie',
              radius: ['45%', '60%'],
              labelLine: {
                show: true
              },
              data: [
                {value: 1048, name: '5'},
                {value: 335, name: '6'},
                {value: 310, name: '7'},
                {value: 251, name: '8'},

              ]
            }
          ]
        })
      }).catch(() => {
        this.myCharts()
      })
    }
  },
  mounted() {
    this.myCharts();
  }
}
</script>

<style scoped>

</style>