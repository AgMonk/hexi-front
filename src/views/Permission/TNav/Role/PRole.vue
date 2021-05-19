<template>
  <div>
    <el-button style="position: absolute; right: 18%; top: 7.5%" @click="dialogVisible.add = true; roleFromData  = {} ">添加角色</el-button>
    <el-dialog title="添加角色" :visible.sync="dialogVisible.add" width="40%">
    <role-from :data="roleFromData" @success="dialogVisible.add = false; queryRole()"/>
    </el-dialog>
    <el-dialog title="修改角色" :visible.sync="dialogVisible.edit" width="40%">
      <role-from :data="roleFromData" @success="dialogVisible.edit = false; queryRole()"/>
    </el-dialog>
    <h2>查询角色列表</h2>

    <el-table :data="userLists" style="width: 800px; position: absolute; left: 30%; top: 20%">

<!-- 下拉框 -->
      <el-table-column type="expand" label="权限">
        <template slot-scope="scope">
          <el-table :data="scope.row.permissions">
            <el-table-column label="备注" prop="remark"/>
            <el-table-column label="权限字符串">
              <template slot-scope="scope">
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
        page: "1",
        size: "10",
      },
      userLists: [],
      dialogVisible: {
        add: false,
        edit: false,
      },
      roleFromData: {},
    }
  },
  methods: {
    queryRole() {
      QueryRole(this.param).then(res => {
        this.userLists = res.data.records;
        // console.log(this.userLists)
      })
    },
    dele(id) {
      this.$confirm("确定删除？").then(() => {
        UserDel(id).then((res) => {
          switch (res.code) {
            case 2000 :
              this.page();
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
      .then(() => this.queryRole())
    },

  },
  mounted() {
    this.queryRole();
  },
}
</script>

<style scoped>
h2 {
  position: absolute;
  top: 10%;
  left: 50%;
}

</style>