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
      </el-submenu>
      <el-menu-item index="/camera">
        <span slot="title">视频监控</span>
      </el-menu-item>
      <!--      <el-menu-item index="/cameraIndex">-->
      <!--        <span slot="title">视频监控</span>-->
      <!--      </el-menu-item>-->
      <el-menu-item index="/screen">
        <span slot="title">大屏入口</span>
      </el-menu-item>
      <el-menu-item index="/announcement">
        <span slot="title">公告</span>
      </el-menu-item>

      <el-submenu index="99">
        <template slot="title">
          <span>留言板管理</span>
        </template>
        <el-menu-item index="/board">
          <span slot="title">游客留言板</span>
        </el-menu-item>
        <!--        <el-menu-item index="/temporary">-->
        <!--          <span slot="title">企业导入</span>-->
        <!--        </el-menu-item>-->
      </el-submenu>

      <el-menu-item index="/optimizedVersion">
        <span slot="title">版本控制</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import UserManage from "../../views/User/userManage";
import HatchNav from "../../views/firmManage/hatchNav/hatchNav";
import Hydropowernav from "../../views/hydropower/hydropowerNav/hydropowernav";
import MonitorNav from "../../views/monitor/monitorNav";

export default {
  components: {MonitorNav, Hydropowernav, HatchNav, UserManage},
  methods: {}
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  /*width: 200px;*/
  /*min-height: 400px;*/
}
</style>