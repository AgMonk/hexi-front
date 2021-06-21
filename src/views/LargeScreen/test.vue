<template>
  <div style="background: #0F373F; text-align: center; ">
    <!--    <environmental-testing/>-->
    <!--    <el-button v-show="show"></el-button>-->
    <!--    <el-button @click="btn"></el-button>-->
    <!--    <el-button @click="GetJson()">测试</el-button>-->

    <!--    <notice />-->
    <!--    <parking-chart />-->

    <fire-alarm/>
    <div style="background: #409EFF ;opacity: 0.9">1111</div>


  </div>

</template>

<script>

// import EnvironmentalTesting from "./screenCharts/environmentalTesting";
// import Notice from "./screenCharts/Notice";
// import ParkingChart from "./screenCharts/parkingChart";

import FireAlarm from "./screenCharts/fireAlarm/fireAlarm";

export default {
  name: "test",
  components: {
    FireAlarm
    // ParkingChart,
    // Notice,
    // EnvironmentalTesting
  },
  data() {
    return {
      show: false,

      param: {
        type: "Patent",
        name: "statistics",
        // type: "",
        // name: "",
        version: 1,
      },
    }
  },
  methods: {
    btn() {
      this.show = !this.show;
      // console.log(111)
    },

  },
  mounted() {
    // QueryCompanyStatistics().then(res => {
    //   let now = res.data.countGroupByYear[0].count;
    //   let last = res.data.countGroupByYear[1].count;
    //   let growthRate = Math.floor((now - last) / last * 100);
    //   console.log(growthRate);
    // })

  }

}
</script>

<style scoped>
#myDIV {
  border-radius: 10px;
  cursor: pointer;
  animation: mymove 5s infinite;
  /*Safari 和 Chrome:*/
  -webkit-animation: mymove 5s infinite;
}

@keyframes mymove {
  from {
    background-color: red;
  }
  to {
    background-color: white;
    /*height: 1px;*/
    opacity: 0;
  }
}

/*Safari 和 Chrome:*/
@-webkit-keyframes mymove {
  from {
    background-color: red;
  }
  to {
    background-color: white;
  }
}



</style>