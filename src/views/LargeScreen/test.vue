<template>
<div style="background: #45646A">
  <compony-chart/>
  <environmental-testing/>
  <hydropower-chart/>
  <authentication-chart/>
  <Notice/>
  <parking-chart/>
  <patent-chart/>
  <patent-status-chart/>
  <screenType/>
  <subsidy-chart/>
</div>

</template>

<script>
import ComponyChart from "./screenCharts/componyChart";
import EnvironmentalTesting from "./screenCharts/environmentalTesting";
import HydropowerChart from "./screenCharts/hydropowerChart";
import AuthenticationChart from "./screenCharts/authenticationChart";
import Notice from "./screenCharts/Notice";
import ParkingChart from "./screenCharts/parkingChart";
import PatentChart from "./screenCharts/patentChart";
import PatentStatusChart from "./screenCharts/patentStatusChart";
import screenType from "./screenCharts/screenType";
import SubsidyChart from "./screenCharts/subsidyChart";

export default {
  name: "test",
  components: {
    SubsidyChart,
    PatentStatusChart,
    PatentChart,
    ParkingChart,
    Notice,
    AuthenticationChart,
    HydropowerChart,
    EnvironmentalTesting,
    ComponyChart,
    screenType
  },
  data() {
    return {
      show: false,

      param: {
        type: "Patent",
        name: "statistics",
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
    // getCameraUrl({id:"7d7e627f5f78429795b64a09fb9c4024", showMessage: 1}).then(res => {
    //   console.log(res)
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