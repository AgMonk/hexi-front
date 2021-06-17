<template>
    <div class="login-box">
      <h4>修改密码</h4>
      <el-input v-model="oldPass" placeholder="旧密码"></el-input>
      <el-tooltip content="新密码最短为6位数，中英文均可,不允许有中文空格" placement="top">
      <el-input placeholder="新密码" v-model="newPass" show-password></el-input>
      </el-tooltip>
      <el-button @click="edit" type="primary" >修改</el-button>
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
      EditPassword(this.oldPass, this.newPass).then(() => {
        // console.log(res);
        if (this.oldPass.length === 0 || this.newPass.length === 0) {
          this.$message.error({
            message: "旧密码与新密码均不能为空",
          })
        } else {
          // switch (res.code) {
          //   case 2000 :
          //     this.$message({
          //       message: res.message,
          //       type: 'success'
          //     })
          //     break;
          //   default:
          //     this.$message.error({
          //       message: res.message,
          //     })
          //     break;
          // }
        }
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