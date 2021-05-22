<template>
  <div>
  <el-container direction="vertical" class="center">
    <el-header><h2>查询用户列表</h2></el-header>
<el-main>
  <el-table :data="userLists" style="width: 900px; " >
    <el-table-column label="用户名" prop="username"></el-table-column>
    <el-table-column label="ID" prop="id"></el-table-column>
    <el-table-column label="姓名" prop="name"></el-table-column>
    <el-table-column label="电话" prop="phone"></el-table-column>
    <el-table-column label="注册时间" prop="createdAt.timeString"></el-table-column>
    <el-table-column label="可用状态" prop="available">
      <template slot-scope="s">
        {{ s.row.available ? "正常" : "停用" }}
      </template>
    </el-table-column>
    <el-table-column><template slot-scope="prop"><el-button @click=" visible.userRole = true; userId = prop.row.id">角色</el-button></template></el-table-column>
  </el-table>
</el-main>
    <el-footer>
      <el-pagination
          :current-page.sync="param.page"
          :page-size.sync="param.size"
          :total="100"
          layout="prev, pager, next, jumper"
          @current-change="findAll">
      </el-pagination>
    </el-footer>
  </el-container>
    <el-dialog :visible.sync="visible.userRole">
      <user-dialog :id="userId"/>
    </el-dialog>
  </div>
</template>

<script>
import { UserPage,UserDel } from "../../../../network/output";

import UserDialog from "@/views/Permission/TNav/PUser/UserDialog";
export default {
  name: "UserList",
  components: {
    UserDialog,
  },
  data() {
    return {
      userLists: [],
      param: {
        page: 1,
        size: 10,
      },
      visible: {
        userRole: false
      },
      userId: undefined,
    }
  },
  created() {
    this.findAll();

  },
  methods: {
    findAll(){
      UserPage(this.param).then(res => {
        // this.userLists = res.data;
        let d = res.data;
        this.userLists = d.records;
        // console.log(this.userLists)
      })
    },
    dele(id) {
      this.$confirm("确定删除？").then(() => {
      UserDel(id).then((res) => {
        switch (res.code) {
          case 2000 :
            this.findAll();
            this.$message({
              message: res.message,
              type: 'success'
            })
            break;
            default :
              this.$message.error({
                message: res.message,
            })
        }
      })
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.center {
  position: absolute;
  right: 30%;
}
</style>