<template>
<div>
<!--登录-->
  <el-input v-model="username" placeholder="请输入用户名"></el-input>
  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  <el-button @click="Login" type="primary">注册</el-button>
</div>
</template>
<script>
import {UserLogin} from "../../network/output";
export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    Login() {
      UserLogin(this.username, this.password).then(res => {
        console.log(res)
      })
    }
}
}
</script>

<style scoped>

</style>