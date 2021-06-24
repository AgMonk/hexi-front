<template>
  <el-container>
    <el-header></el-header>
    <el-main style="padding: 20px 250px 20px 250px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px; font-weight: 1000">{{ userList.name }} </span>
          <el-button style="float: right; margin-left: 50px" @click="visible.query = true">查询用户</el-button>
          <span style="float: right; font-size: 17px; font-weight: 550"> 用户ID：{{ userList.id }}
            <br>注册时间：{{ timeStrings }}</span>
        </div>

        <span style="display: flex; justify-content: space-between">
          <p>电话： {{ userList.phone }}</p>
          <el-button @click="visible.user = true">用户信息</el-button>
        </span>
        <br>
        <span style="display: flex; justify-content: space-between">
          <p>账号：{{ userList.username }}</p>
          <el-button @click="visible.password = true">修改密码</el-button>
          </span>
        <br>
        <span style="display: flex; justify-content: space-between">
          <p>用户状态：{{ userList.available ? "正常" : "停用" }}</p>
          <el-button @click="visible.status = true">修改状态</el-button>
        </span>
      </el-card>

    </el-main>
    <div>
      <el-dialog
          :visible.sync="visible.query"
          title="用户列表">
        <QUser/>
      </el-dialog>
      <el-dialog
          :visible.sync="visible.user"
          title="修改用户信息"
          width="30%">
        <EditUserInfo/>
      </el-dialog>
      <el-dialog
          :visible.sync="visible.password"
          title="修改密码"
          width="30%">
        <EditPassword/>
      </el-dialog>
      <el-dialog
          :visible.sync="visible.status"
          title="修改用户状态"
          width="30%">
        <EditUserAvailable/>
      </el-dialog>
    </div>
  </el-container>


</template>

<script>
import {UserInfo} from "../../network/output";
import EditUserInfo from "../EditUser/EditUserInfo";
import EditPassword from "../EditUser/EditPassword";
import EditUserAvailable from "../EditUser/EditUserAvailable";
import QUser from "../Query/QUser";

export default {
  name: "UserInfo",
  components: {EditUserAvailable, EditPassword, EditUserInfo, QUser},
  data() {
    return {
      timeStrings: null,
      userList: {},
      visible: {
        query: false,
        user: false,
        password: false,
        status: false,
      },
    }
  },
  created() {
    UserInfo({params: 1}).then(res => {
      this.timeStrings = res.data.createdAt.timeString;
      this.userList = res.data;
      console.log(res)

    })
  }
}
</script>

<style scoped>

.text {
  font-size: 18px;
}
.item {
  padding: 18px 0;
}
.box-card {
}
</style>