<template>
<!--    修改当前用户信息-->
    <div class="login-box">
      <h4>修改用户信息</h4>
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
          switch (res.code) {
            case 2000 :
              this.$message({
                message: res.message,
                type: 'success'
              })
              break;
            default:
              this.$message.error({
                message: res.message,
              })
              break;
          }
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
.el-button {
  position: relative;
  top: 5%;
}
h4 {
  text-align: center;
}
</style>