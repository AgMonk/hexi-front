<template>
  <el-menu-item index="" @click="logout">
    <span slot="title">登出</span>
  </el-menu-item>
</template>

<script>
import {UserLogout} from "../../network/output";

export default {
  name: "userLogout",
  methods: {
    logout() {
      this.$confirm('确定退出？').then(() => {
        UserLogout({params: 1}).then(res => {
          console.log(res);
          switch (res.code) {
            case 2000 :
              this.$router.push({path: '/'})
              break;
          }
        })
      }).catch(() => {
      });
    }
  },

}
</script>

<style scoped>

</style>