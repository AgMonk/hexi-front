<template>
  <div>
    <!--    <hydropower-chart/>-->
    <!--    <patent-chart />-->
    <!--    <subsidy-chart />-->
    <authentication-chart/>
  </div>
</template>

<script>
// import HydropowerChart from "./screenCharts/hydropowerChart";

// import PatentChart from "./screenCharts/patentChart";
// import SubsidyChart from "./screenCharts/subsidyChart";
import AuthenticationChart from "./screenCharts/authenticationChart";

export default {
  name: "test",
  components: {
    AuthenticationChart
    // SubsidyChart
    // PatentChart
    // HydropowerChart
  }
}
</script>

<style scoped>

</style>