<template>
  <div>
  <el-col :span="12">
    <h3>柳州天步科技创业园智慧园区</h3>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      router 
      >
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">视频监控</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">智能水电</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">车位道闸</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">企业管理</span>
      </el-menu-item>
            <el-menu-item index="">
        <i class="el-icon-setting"></i>
        <span slot="title">火灾报警</span>
      </el-menu-item>
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
                <el-menu-item @click="logout">
            <i class="el-icon-error"></i>
            <span slot="title">登出</span>
          </el-menu-item>
    </el-menu>
  </el-col>
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