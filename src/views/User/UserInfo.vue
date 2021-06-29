<template>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col :span="12">
              <h3>{{ userList.name }} </h3>
            </el-col>
            <span style="font-size: 17px; font-weight: 550; float: right; ">
            用户ID：{{ userList.id }}
            <br>注册时间：{{ timeStrings }}
          </span>
          </el-row>
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

        <div>
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

      </el-card>


</template>

<script>
import {UserInfo} from "../../network/output";
import EditUserInfo from "../EditUser/EditUserInfo";
import EditPassword from "../EditUser/EditPassword";
import EditUserAvailable from "../EditUser/EditUserAvailable";

export default {
  name: "UserInfo",
  components: {EditUserAvailable, EditPassword, EditUserInfo,},
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
</style>