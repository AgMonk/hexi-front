<template>
<div>
    <el-table :data="userLists" class="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="电话号码" prop="phone"></el-table-column>
    </el-table>
</div>
</template>

<script>
import {UserPage} from "../../network/output";
export default {
  name: "UserInfo",
  data() {
    return {
      userLists: [],
      page: 0,
      size: 0,
    }
  },
  created() {
    UserPage(this.page, this.size).then(res => {
      this.userLists = res.data.records;
      console.log(this.userLists)
    })
  }
}
</script>

<style scoped>
.list {
  width: 800px;
  position: absolute;
  left: 30%;
  top: 10%;
}
</style>