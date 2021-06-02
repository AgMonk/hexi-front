<template>
  <el-container>
    <el-header style="padding: 0">
      <top-nav/>
    </el-header>
    <el-main style="padding: 0">
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
</template>

<script>
import TopNav from "./topNav";
import LeftNav from "./leftNav";

export default {
  name: "appMain",
  components: {TopNav, LeftNav}
}
</script>

<style scoped>

</style>