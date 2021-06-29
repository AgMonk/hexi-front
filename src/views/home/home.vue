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
    // function d(f, ms) {
    //   return function (...args) {
    //     let  ctx = this;
    //     setTimeout(function () {
    //       return f.apply(ctx, args);
    //     },ms)
    //   }
    // }
    // function sayHi(who,d) {
    //   console.log('hello' + who,d);
    // }
    // let sayHiDeferred = d(sayHi, 2000)
    // sayHiDeferred("kkk", "111")
    // sayHi(111,111)
  }
}

</script>

<style scoped>

</style>