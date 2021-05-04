<template>

  <div>
<!--    修改当前用户信息-->
    <el-input v-model="phone" placeholder="请输入电话"></el-input>
    <el-input v-model="name" placeholder="请输入姓名"></el-input>
    <el-button @click="Edit" type="primary">修改</el-button>
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
      EditUserInfo(this.phone, this.name).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>