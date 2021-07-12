<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>查询用户列表</h3>
    </div>
    <div class="text item">
      <el-table :data="userLists">
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
        <el-table-column>
          <template slot-scope="prop">
            <el-button type="primary" @click=" visible.userRole = true; userId = prop.row.id">添加角色</el-button>
          </template>
        </el-table-column>
        <el-table-column @click="edit()">
          <template slot-scope="prop">
            <el-button v-if="prop.row.available" type="danger" @click="editAvailable(prop.row.id)">停用账号</el-button>
            <el-button v-if="!prop.row.available" type="danger" @click="editAvailable(prop.row.id)">启用账号</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
        :current-page.sync="param.page"
        :page-size.sync="param.size"
        :total="total"
        layout="prev, pager, next, jumper"
        @current-change="findAll">
    </el-pagination>

    <el-dialog :visible.sync="visible.userRole" title="添加角色">
      <user-dialog :id="userId"/>
    </el-dialog>
  </el-card>
</template>

<script>
import {GetUserAvailable, UserDel, UserPage} from "../../../../network/output";

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
        size: 5,
      },
      total: null,
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
    //修改可用状态
    editAvailable(id) {
      this.$confirm('是否修改该用户可用状态?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        GetUserAvailable(id).then(res => {
          if (res.code === 2000) {
            this.findAll()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        })
      })

    },

    findAll() {
      UserPage(this.param).then(res => {
        // this.userLists = res.data;
        let d = res.data;
        this.userLists = d.records;
        this.total = res.data.total;
        // console.log(this.userLists)
      })
    },
    dele(id) {
      this.$confirm("确定删除？").then(() => {
      UserDel(id).then((res) => {
        switch (res.code) {
          case 2000 :
            this.findAll();
            break;
        }
      })
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>