<template>
  <div>
    <el-container v-if="$route.path!=='/screen'">
      <el-header v-if="$route.meta.Nav !== false" style="padding: 0">
        <top-nav/>
      </el-header>
      <el-main style="padding: 0">
        <el-container>
          <el-aside v-if="$route.meta.Nav !== false">
            <left-nav/>
          </el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
    <router-view v-if="$route.path==='/screen'"/>
  </div>
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