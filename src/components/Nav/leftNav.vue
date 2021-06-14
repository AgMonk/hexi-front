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

      <el-submenu index="6">
        <template slot="title">
          <span>车位道闸</span>
        </template>
        <el-menu-item index="/barrier">进出查询</el-menu-item>
        <el-menu-item index="/carPack">场内车辆查询</el-menu-item>
      </el-submenu>
      <el-menu-item index="7">
        <span slot="title">火灾报警</span>
      </el-menu-item>
      <el-menu-item index="/screen">
        <span slot="title">大屏入口</span>
      </el-menu-item>
      <el-menu-item index="/announcement">
        <span slot="title">公告</span>
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