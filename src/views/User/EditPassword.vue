<template>
<div>
<!--  修改密码-->
  <el-input v-model="oldPass" placeholder="请输入旧密码"></el-input>
  <el-input placeholder="请输入新密码" v-model="newPass" show-password></el-input>
  <el-button @click="Password" type="primary">注册</el-button>
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
    Password() {
      EditPassword(this.oldPass, this.newPass).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>