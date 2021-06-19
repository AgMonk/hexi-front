<template>
<!--    修改当前用户信息-->
    <div class="login-box">
      <el-input v-model="phone" placeholder="电话号码" ></el-input>
      <el-input placeholder="姓名" v-model="name"></el-input>
      <el-button type="primary" @click="Edit">修改</el-button>
    </div>
</template>

<script>
import {EditUserInfo} from "../../network/output";

export default {
  name: "EditUserInfo",
  data() {
    return {
      phone: "",
      name: "",
    }
  },
  methods:{
    Edit() {
      if(this.phone.length === 0 || this.name.length === 0) {
        this.$message.error({
          message: "电话号码与姓名均不能为空",
        })
      } else {
        EditUserInfo(this.phone, this.name).then(res => {
          console.log(res);
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