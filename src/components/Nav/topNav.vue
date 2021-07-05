<template>
<div v-show="$route.meta.Nav !== false">
  <el-menu
      :default-active="$route.path" router
      class="el-menu"
      mode="horizontal"
      background-color="#FFFFFF">
    <el-menu-item index=""><span style="font-size: 20px; font-weight: 1000">柳州天步科技创业园智慧园区</span></el-menu-item>
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/test">管理</el-menu-item>
    <el-menu-item index="/checkOut">测试</el-menu-item>
    <el-menu-item index="/temporary">临时存放</el-menu-item>

    <el-tooltip class="item" effect="light" placement="bottom">
      <div slot="content">
        <el-button style="margin: 0; padding: 0;" type="text" @click="logout">退出登录</el-button>

        <hr>
        <el-button style="margin: 0;padding: 0" type="text" @click="visible = true">修改密码</el-button>
      </div>
      <el-button v-if="userinfo" style="float: right; height: 60px; width: 68px; margin-right: 50px; color: black"
                 type="text">
        {{ userinfo.name }}<i class="el-icon-caret-bottom"/></el-button>
    </el-tooltip>
  </el-menu>
  <el-dialog
      :visible.sync="visible"
      title="修改密码"
      width="30%">
    <EditPassword/>
  </el-dialog>
</div>

</template>

<script>
import {UserInfo, UserLogout} from "../../network/output";
import EditPassword from "../../views/EditUser/EditPassword";

export default {
  name: "topNav",
  components: {EditPassword},
  data() {
    return {
      visible: false,
      userinfo: [],
    };
  },
  methods: {
    logout() {
      this.$confirm('确定退出？').then(() => {
        UserLogout({params: 1}).then(res => {
          console.log(res);
          switch (res.code) {
            case 2000 :
              this.$router.push({path: '/'})
              break;
          }
        })
      }).catch(() => {
      });
    }
  },
  created() {
    UserInfo({showMessage: 1}).then(res => {
      // console.log(res);
      this.userinfo = res.data;
    })
  }
}
</script>

<style scoped>

</style>