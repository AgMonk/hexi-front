<template>
  <el-container>
    <el-header>
      <h2>用户管理</h2>
    </el-header>
    <el-main>
      <el-row>
        <UserInfo/>
      </el-row>
      <br><br>
      <el-row>
        <UserList/>
      </el-row>
      <br><br>
      <el-row>
        <PRole/>
      </el-row>

      <!--      <el-row>-->
      <!--        <Permission/>-->
      <!--      </el-row>-->
    </el-main>
  </el-container>
</template>

<script>
import UserList from "./TNav/PUser/UserList";
// import Permission from "./TNav/mission/Permission";
import PRole from "./TNav/Role/PRole";
import UserInfo from "../User/UserInfo";

export default {
  name: "AddUserSave",
  components: {
    // Permission,
    UserInfo,
    UserList, PRole
  },
  methods: {},
}
</script>

<style scoped>
</style>