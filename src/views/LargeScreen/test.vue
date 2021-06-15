<template>
  <div>
    <!--    <hydropower-chart/>-->
    <!--    <patent-chart />-->
    <!--    <subsidy-chart />-->
    <!--    <authentication-chart/>-->
    <!--    <parking-chart />-->
    <!--    <patent-status-chart/>-->
    <!--    <notice />-->
    <environmental-testing/>
  </div>

</template>

<script>
// import HydropowerChart from "./screenCharts/hydropowerChart";

// import PatentChart from "./screenCharts/patentChart";
// import SubsidyChart from "./screenCharts/subsidyChart";
// import AuthenticationChart from "./screenCharts/authenticationChart";

// import ParkingChart from "./screenCharts/parkingChart";
// import PatentStatusChart from "./screenCharts/patentStatusChart";

// import Notice from "./screenCharts/Notice";
import EnvironmentalTesting from "./screenCharts/environmentalTesting";

export default {
  name: "test",
  components: {
    EnvironmentalTesting
    // Notice
    // PatentStatusChart
    // ParkingChart
    // AuthenticationChart
    // SubsidyChart
    // PatentChart
    // HydropowerChart
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>