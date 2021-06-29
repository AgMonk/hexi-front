<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-row>
        <UserList/>
      </el-row>

      <el-row>
        <PRole/>
      </el-row>

      <el-row>
        <Permission/>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import UserList from "./TNav/PUser/UserList";
import Permission from "./TNav/mission/Permission";
import PRole from "./TNav/Role/PRole";

export default {
  name: "AddUserSave",
  components: {Permission, UserList, PRole},
  methods: {},
}
</script>

<style scoped>
</style>