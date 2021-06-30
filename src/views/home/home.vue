<template>
  <el-container>
    <el-header height="40px">
    </el-header>
    <el-main>
      <home-notice/>
      <br>
      <el-row :gutter="20">
        <el-col :span="8">
          <home-subsidy-chart style="height: 550px"/>
        </el-col>
        <el-col :span="8">
          <home-environmental-testing style="height: 550px"/>
        </el-col>
        <el-col :span="8">
          <compony-type style="height: 550px"/>
        </el-col>
      </el-row>
      <br>
      <home-hydropower-chart/>
    </el-main>
  </el-container>
</template>
<script>

import ComponyType from "./charts/componyType";
import homeEnvironmentalTesting from "./charts/homeEnvironmentalTesting";
import homeNotice from "./charts/homeNotice";
import HomeSubsidyChart from "./charts/homeSubsidyChart";
import HomeHydropowerChart from "./charts/homeHydropowerChart";

export default {
  name: "home",
  components: {
    HomeHydropowerChart,
    HomeSubsidyChart,

    ComponyType,
    homeNotice,
    homeEnvironmentalTesting,
    // UserInfo
  },
  methods: {},
  mounted() {

  }
}

</script>

<style scoped>

</style>