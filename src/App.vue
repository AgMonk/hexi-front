<template>
  <div id="app">
    <el-container>
      <el-header>
        <top-nav/>
      </el-header>
      <el-main>
        <el-container>
          <el-aside>
            <left-nav/>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script>

import LeftNav from "./components/Nav/leftNav";
import TopNav from "./components/Nav/topNav";

export default {
  components: {TopNav, LeftNav}
}
</script>

<style lang="less">
@import "./assets/css/base.css";
//body {
//  background-image: url('assets/img/login.png');
//  background-repeat:no-repeat;
//  background-size:100%;
//}
</style>
