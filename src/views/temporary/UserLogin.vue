<template>
<div>
  <h2>智慧园区系统登录页</h2>
  <div class="login-box">
  <h4>输入用户名密码登录</h4>
  <el-input v-model="username" placeholder="请输入用户名" id="input"></el-input>
  <br /><br />
  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  <el-button @click="Login" type="primary" >登录</el-button>
  <a href="#">注册</a>
  </div>
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
.login-box {
  height: 300px;
  width: 400px;
  background: #ffffff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
  border: #bebebe 1px solid;
}
.el-button, .el-input {
  position: relative;
  left: 7.5%;
  width: 340px;
}
.el-button {
  position: relative;
  top: 15%;
}
h4 {
  text-align: center;
}

</style>