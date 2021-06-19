<template>
<div class="login-box">
  <el-tooltip content="ID正常状态修改为停用，ID异常状态修改为正常" placement="top" trigger="click">
    <el-input placeholder="用户ID" v-model="userId"></el-input>
  </el-tooltip>
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
        })
      }
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

</style>