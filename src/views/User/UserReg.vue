<template>
      <div class="reg-box">
        <!--  注册-->
        <h4>输入用户名/密码/手机号/姓名注册</h4>
        <el-tooltip content="中英文均可，最短6位数,注意填写账号是否已注册" placement="top" trigger="click">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </el-tooltip>
        <el-tooltip content="字符最短6位数，中英文均可,不允许有中文空格" placement="top">
          <el-input placeholder="密码" v-model="password" show-password></el-input>
        </el-tooltip>
        <el-input v-model="phone" placeholder="电话/非必填"></el-input>
        <el-input v-model="name" placeholder="姓名/非必填"></el-input>
        <el-button @click="Reg" type="primary">注册</el-button>
        <span class="reg-login">已有账号？<router-link to="/login">点此登录</router-link></span>
      </div>
</template>
<script>
import {UserReg} from "../../network/output";

export default {
  name: "UserReg",
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      name: "",
    }
  },
  methods: {
    Reg() {
      UserReg(this.username, this.password, this.phone, this.name).then(() => {
      })
    },
  },
  mounted() {
    document.querySelector('body').setAttribute('style',
        "background-image: url(" + require("../../assets/img/login.jpg") + ");background-size: cover;" +
        "background-repeat: no-repeat")
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },


}
</script>

<style scoped>
.reg-box {
  width: 500px;
  height: 500px;
  background: #ffffff;
  border: #BEBEBE 1px solid;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.el-input,.el-button {
  width: 340px;
  position: relative;
  left: 16%;
  display: block;
  margin-top: 20px;
}
.el-button {
  position: relative;
  top: 15%;
}
h4 {
  text-align: center;
}
.reg-login {
  position: relative;
  top: 15%;
  left: 16%;
  font-size: 12px;
}
a {
  text-decoration: none;
  color: #409EFF;
}
</style>