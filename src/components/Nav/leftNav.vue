<template>
  <div v-if="$route.meta.Nav !== false">
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        router
    >
      <hatch-nav/>
      <user-manage/>
      <hydropowernav/>
      <monitor-nav/>
      <el-menu-item index="/barrier">
        <span slot="title">车位道闸</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">火灾报警</span>
      </el-menu-item>
      <el-menu-item index="/screen">
        <span slot="title">大屏入口</span>
      </el-menu-item>
      <user-logout/>
    </el-menu>
  </div>
</template>

<script>

import UserLogout from "../../views/User/userLogout";
import UserManage from "../../views/User/userManage";
import HatchNav from "../../views/firmManage/hatchNav/hatchNav";
import Hydropowernav from "../../views/hydropower/hydropowerNav/hydropowernav";
import MonitorNav from "../../views/monitor/monitorNav";

export default {
  components: {MonitorNav, Hydropowernav, HatchNav, UserManage, UserLogout},
  methods: {}
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  /*width: 200px;*/
  /*min-height: 400px;*/
}
</style>