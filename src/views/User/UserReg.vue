<template>
<div>
<!--  注册-->
  <el-input v-model="username" placeholder="请输入用户名"></el-input>
  <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
  <el-input v-model="phone" placeholder="请输入电话"></el-input>
  <el-input v-model="name" placeholder="请输入姓名"></el-input>
  <el-button @click="Reg" type="primary">注册</el-button>
</div>
</template>
<script>
import { UserReg } from "../../network/output";
export default {
  // name: "UserReg",
  data() {
    return {
      username: "13211323451",
      password: "123456",
      phone: "13211323451",
      name: "测试",
    }
  },
  methods: {
    Reg() {
      UserReg(this.username, this.password, this.phone, this.name).then(res => {
        console.log(res)
      })
    }
  }

}
</script>

<style scoped>

</style>