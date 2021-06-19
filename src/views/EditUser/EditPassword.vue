<template>
    <div class="login-box">
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
        if (this.oldPass.length === 0 || this.newPass.length === 0) {
          this.$message.error({
            message: "旧密码与新密码均不能为空",
          })
        }
      })
    }
  }
}
</script>

<style scoped>

.el-button, .el-input {
  position: relative;
  left: 18%;
  width: 340px;
  display: block;
  margin-top: 20px;
}
.el-button {
  position: relative;
  top: 5%;
}

</style>