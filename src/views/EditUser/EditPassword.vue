<template>
  <div>
    <div class="login-box">
      <h4>修改密码</h4>
      <el-input v-model="oldPass" placeholder="旧密码" id="input"></el-input>
      <el-input placeholder="新密码" v-model="newPass" show-password></el-input>
      <el-button @click="edit" type="primary" >修改</el-button>
    </div>
  </div>
</template>

<script>
import {EditPassword} from "../../network/output";
export default {
  name: "EditPassword",
  data() {
    return {
      oldPass: "",
      newPass: "",
    }
  },
  methods: {
    edit() {
      EditPassword(this.oldPass, this.newPass).then(res => {
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
  display: block;
  margin-top: 20px;
}
.el-button {
  position: relative;
  top: 5%;
}
h4 {
  text-align: center;
}
</style>