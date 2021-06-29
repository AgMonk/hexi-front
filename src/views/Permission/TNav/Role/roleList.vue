<template>
  <div>
    <el-table :data="userLists" style="width: 800px; position: absolute; left: 30%; top: 20%">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="英文名字" prop="name"></el-table-column>
      <el-table-column label="中文名字" prop="nickname"></el-table-column>
      <el-table-column label="列表" prop="permissions"></el-table-column>
      <el-table-column><el-button>修改</el-button></el-table-column>
      <el-table-column><template slot-scope="del"><el-button @click="dele(del.row.id)">删除</el-button></template></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {QueryRole, UserDel} from "../../../../network/output";

export default {
  name: "inquire",
  data() {
    return {
      param: {
        page: "1",
        size: "10",
      },
      userLists: [],

    }
  },
  created() {
    QueryRole(this.param).then(res => {
      this.userLists = res.data.records;
      console.log(this.userLists);
    })
  },
  methods: {
    dele(id) {
      this.$confirm("确定删除？").then(() => {
        UserDel(id).then(() => {
        })
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
</style>