<template>
  <el-container>
    <el-header>
      <el-form :inline="true">
        <!--        <el-form-item label="用户ID"><el-input v-model="param.condition.hasRoleId"/></el-form-item>-->
        <!--        <el-form-item><el-button type="primary" @click="userPage()">搜索</el-button></el-form-item>-->
      </el-form>
    </el-header>
    <el-main>
      <el-table :data="userLists" class="list">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="电话号码" prop="phone"></el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
          :current-page.sync="param.page"
          :page-size.sync="param.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="userPage"

      >

      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import {UserPage} from "../../network/output";

export default {
  name: "UserInfo",
  data() {
    return {
      userLists: [],
      param: {
        page: 1,
        size: 10,
        condition: {
          hasRoleId: []
        }
      },
      total: undefined,
    }
  },
  methods: {
    userPage() {
      UserPage(this.param).then(res => {
        this.userLists = res.data.records;
        this.total = res.data.total;
        console.log(this.userLists)
      })
    }
  },
  created() {
    this.userPage();
  }
}
</script>

<style scoped>

</style>