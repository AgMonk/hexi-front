<template>
  <el-container>
    <el-header height="40px"><span>面包屑</span></el-header>
    <el-main>
      <el-row :gutter="20">
        <compony-type/>
        <el-col :span="12">
          <div style="background: #FFFFFF; ">
            <compony-chart/>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>

import ComponyType from "./charts/componyType";
import ComponyChart from "../LargeScreen/screenCharts/componyChart";

export default {
  name: "home",
  components: {ComponyChart, ComponyType},
}

</script>

<style scoped>

</style>