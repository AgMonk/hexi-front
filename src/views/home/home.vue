<template>
  <el-container>
    <el-header height="40px">
    </el-header>
    <el-main>
      <el-row>
        <UserInfo/>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <compony-type/>
        </el-col>
        <el-col :span="12">
          <Weather/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>

import ComponyType from "./charts/componyType";
import Weather from "../monitor/Weather/Weather";
import UserInfo from "../User/UserInfo";

export default {
  name: "home",
  components: {
    Weather,
    ComponyType,
    UserInfo
  },
  methods: {},
  mounted() {

  }
}

</script>

<style scoped>

</style>