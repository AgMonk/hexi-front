<template>
  <div>
  <el-col :span="12">
    <h3>柳州天步科技创业园智慧园区</h3>
        <el-menu
          class="el-menu-vertical" @open="handleOpen" @close="handleClose" :default-active="$route.path" router >
          <el-menu-item index="/home"><i class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index=""><i class="el-icon-setting"></i>
            <span slot="title">视频监控</span>
          </el-menu-item>
          <el-menu-item index=""><i class="el-icon-setting"></i>
            <span slot="title">智能水电</span>
          </el-menu-item>
          <el-menu-item index=""><i class="el-icon-setting"></i>
            <span slot="title">车位道闸</span>
          </el-menu-item>
          <el-menu-item index=""><i class="el-icon-setting"></i>
            <span slot="title">火灾报警</span>
          </el-menu-item>
          <el-menu-item @click="logout"><i class="el-icon-error"></i>
            <span slot="title">登出</span>
          </el-menu-item>
          <el-submenu index="">
            <template slot="title"><i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="/user/UserInfo">用户信息</el-menu-item>
              <el-menu-item index="/user/EditUserInfo">修改用户信息</el-menu-item>
              <el-menu-item index="/user/EditPassword">修改密码</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">用户权限</template>
              <el-menu-item index="/user/QUser">查询用户</el-menu-item>
              <el-menu-item index="/user/EditUserAvailable">修改用户可用状态</el-menu-item>
              <el-submenu index="/user/UserSave">
                <template slot="title">权限</template>
                <el-menu-item index="/user/UserSave/UserList">用户</el-menu-item>
                <el-menu-item index="/user/UserSave/PRole">角色</el-menu-item>
                <el-menu-item index="/user/UserSave/Permission">权限</el-menu-item>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu>
    </el-menu>
  </el-col>
   <router-view></router-view>
  </div>
</template>

<script>
import { UserLogout } from '@/network/output.js'
export default {
      
    methods: {
    handleOpen() {
    },
    handleClose() {
    },
        logout() {
      this.$confirm('确定退出？').then(() => {
      UserLogout().then(res => {
        console.log(res);
        switch (res.code) {
          case 2000 :
            this.$router.push({path: '/'})
            this.$message({
              message: res.message,
              type: "success"
            })
            break;
          default:
            this.$message.error({
              message: "未知错误",
            })
            break;
        }
      })
      }).catch(() => {
      });
    }
}
}
</script>

<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>