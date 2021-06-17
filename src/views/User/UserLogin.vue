<template>
  <div class="login-box">
    <h4>用户名密码登录</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <el-input placeholder="密码" v-model="password" show-password></el-input>
    <el-button @click="Login" type="primary">登录</el-button>
    <router-link to="/UserReg">点此注册</router-link>
  </div>
</template>
<script>
import {UserLogin} from "../../network/output";

export default {
  name: "UserLogin",
  data() {
    return {
      username: "admin_lzbx",
      password: "123456",

    }
  },
  methods: {
    Login() {
      UserLogin(this.username, this.password).then(res => {
        console.log(res)
        switch (res.code) {
          case 2000 :
            // this.$message({
            //   message: res.message,
            //   type: 'success'
            // })
            this.$router.push({path: '/home'})
            break;
            // default:
            //   this.$message.error({
            //     message: res.message,
            //   })
            // break;
        }
      })
    }
  },
  mounted() {
    document.querySelector('body').setAttribute('style',
        "background-image: url(" + require("../../assets/img/login.png") + ");background-size: cover;" +
        "background-repeat: no-repeat")
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },

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
a {
  text-decoration: none;
  position: relative;
  top: 7%;
  left: 7.5%;
  font-size: 12px;
  color: #409EFF;
}

/*<img src="../../assets/img/login.png" height="1257" width="1890"/>*/
</style>