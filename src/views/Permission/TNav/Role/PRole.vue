<template>
  <div>
    <el-container direction="vertical" class="center">
      <el-header>
       <h2>查询角色列表</h2>
      </el-header>
    <el-main>
    <el-table :data="userLists" style="width: 800px;" >
<!-- 下拉框 -->
      <el-table-column type="expand" label="权限">
        <template slot-scope="scope">
          <el-table :data="scope.row.permissions">
            <el-table-column label="备注" prop="remark"/>
            <el-table-column label="权限字符串">
              <template slot-scope="">
                {{ scope.row.namespace }}:{{ scope.row.action }}:{{ scope.row.target }}
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>

      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="英文名称" prop="name"></el-table-column>
      <el-table-column label="中文名称" prop="nickname"></el-table-column>
      <el-table-column><template slot-scope="del"><el-button @click="roleFromData = del.row; dialogVisible.edit = true; ">修改</el-button></template></el-table-column>
      <el-table-column><template slot-scope="del"><el-button @click="dele(del.row.id);">删除</el-button></template></el-table-column>
    </el-table>
    </el-main>
    <el-footer>
    <el-pagination
        :current-page.sync="param.page"
        :page-size.sync="param.size"
        :total="total"
        layout="prev, pager, next, jumper"
        @current-change="queryRole">
    </el-pagination>
    </el-footer>
    </el-container>

    <el-button style="position: absolute; right: 18%; top: 7.5%" @click="dialogVisible.add = true; roleFromData  = {} ">添加角色</el-button>
    <el-dialog title="添加角色" :visible.sync="dialogVisible.add" width="40%">
      <role-from :data="roleFromData" @success="dialogVisible.add = false; queryRole()"/>
    </el-dialog>
    <el-dialog title="修改角色" :visible.sync="dialogVisible.edit" width="40%">
      <role-from :data="roleFromData" @success="dialogVisible.edit = false; queryRole()"/>
    </el-dialog>
  </div>
</template>

<script>
import roleFrom from "../../../../components/from/roleFrom";
import {QueryRole, UserDel} from "../../../../network/output";

export default {
  name: "Permission",
  components: {
    roleFrom,
  },
  data() {
    return {
      param: {
        page: 1,
        size: 10,
      },
      userLists: [],
      dialogVisible: {
        add: false,
        edit: false,
      },
      roleFromData: {},
      total: 50,
    }
  },
  methods: {
    queryRole() {
      QueryRole(this.param).then(res => {
        this.userLists = res.data.records;
      })
    },
    dele(id) {
      this.$confirm("确定删除？").then(() => {
        UserDel(id).then(() => {
          // switch (res.code) {
          //   case 2000 :
          //     this.page();
          //     this.$message({
          //       message: res.message,
          //       type: 'success'
          //     })
          //     break;
          //   default :
          //     this.$message.error({
          //       message: res.message,
          //     })
          // }
        })
      }).catch(() => {})
      .then(() => this.queryRole())
    },
  },
  mounted() {
    this.queryRole();
  },
}
</script>

<style scoped>
.center {
  position: absolute;
  right: 30%;
}
</style>