<template>
<div class="login-box">
  <h4>输入需要修改的用户ID</h4>
  <el-input placeholder="用户ID" v-model="userId"></el-input>
  <el-button type="primary" @click="edit">修改</el-button>
</div>
</template>

<script>
import {GetUserAvailable} from "../../network/output";

export default {
  name: "EditUserAvailable",
  data() {
    return {
      userId: "",
    }
  },
  methods: {
    edit() {
      if(this.userId.length === 0) {
        this.$message.error({
          message: "用户ID不能为空",
        })
      } else {
        GetUserAvailable(this.userId).then(() => {
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
        })
      }
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
h4 {
  text-align: center;
}
</style>