<template>
  <el-menu-item index="" @click="logout">
    <span slot="title">登出</span>
  </el-menu-item>
</template>

<script>
import {UserLogout} from '@/network/output.js'

export default {
  name: "userLogout",
  methods: {
    logout() {
      this.$confirm('确定退出？').then(() => {
        UserLogout().then(res => {
          console.log(res);
          switch (res.code) {
            case 2000 :
              this.$router.push({path: '/'})
              // this.$message({
              //   message: res.message,
              //   type: "success"
              // })
              break;
              // default:
              //   this.$message.error({
              //     message: "未知错误",
              //   })
              //   break;
          }
        })
      }).catch(() => {
      });
    }
  }
}
</script>

<style scoped>

</style>