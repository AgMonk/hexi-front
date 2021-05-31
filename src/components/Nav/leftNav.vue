<template>
  <div v-if="$route.meta.Nav !== false">
    <h3>柳州天步科技创业园智慧园区</h3>
    <el-menu
        :default-active="$route.path" class="el-menu-vertical" router>
      <hatch-nav/>
      <user-manage/>
      <user-logout/>

      <!--          <el-menu-item index=""><i class="el-icon-setting"></i>-->
      <!--            <span slot="title">视频监控</span>-->
      <!--          </el-menu-item>-->
          <!--          <el-menu-item index=""><i class="el-icon-setting"></i>-->
          <!--            <span slot="title">智能水电</span>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index=""><i class="el-icon-setting"></i>-->
          <!--            <span slot="title">车位道闸</span>-->
          <!--          </el-menu-item>-->
          <!--          <el-menu-item index=""><i class="el-icon-setting"></i>-->
          <!--            <span slot="title">火灾报警</span>-->
          <!--          </el-menu-item>-->

        </el-menu>

    <!--   <router-view></router-view>-->
  </div>
</template>

<script>

import UserLogout from "../../views/User/userLogout";
import UserManage from "../../views/User/userManage";
import HatchNav from "../../views/firmManage/hatchNav/hatchNav";

export default {
  components: {HatchNav, UserManage, UserLogout},
  methods: {}
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>