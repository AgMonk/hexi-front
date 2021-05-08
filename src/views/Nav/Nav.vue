<template>
  <div>
    <div>
      <el-col :span="12">
        <h3>柳州天步科技创业园智慧园区</h3>
        <el-menu
            :default-active="$route.path"
            router
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose">
          <el-submenu index="">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item index="">用户信息</el-menu-item>
              <el-menu-item index="">修改密码</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户权限">
              <el-menu-item index="">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="">
              <template slot="title">选项4</template>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="" >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item @click="logout">
            <i class="el-icon-error"></i>
            <span slot="title">登出</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
     <user-information />
  </div>
</template>
<script>
import { UserLogout } from '@/network/output.js'
export default {
  name: "Navigation-main",
  components: {
  },
  data() {
    return {
      isCollapse: true,
      dialogVisible: false,
    };
  },
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