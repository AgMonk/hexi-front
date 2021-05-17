<template>
<div>
  <el-table :data="permissions" style="width: 800px; position: absolute; left: 30%; top: 20%">
    <el-table-column label="权限ID" prop="id"></el-table-column>
    <el-table-column label="备注" prop="remark"></el-table-column>
    <el-table-column label="命名空间" prop="namespace"></el-table-column>
    <el-table-column label="操作" prop="action"></el-table-column>
    <el-table-column label="操作对象" prop="target"></el-table-column>

    <el-table-column><template slot-scope="edit"><el-button @click="dialogVisible = true; fromData = edit.row">修改</el-button></template></el-table-column>
    <el-table-column><template slot-scope="del"><el-button @click="delet(del.row.id)">删除</el-button></template></el-table-column>
  </el-table>

  <el-dialog
      title="添加权限"
      :visible.sync="dialogVisible"
      width="40%">
    <permission-from />
  </el-dialog>
</div>
</template>

<script>
import permissionFrom from "../../../../components/from/permissionFrom";
import { Page } from "../../../../network/output";
import { UserDel } from "../../../../network/output";
export default {
  name: "inquire",
  data() {
    return {
      param: {
        page: "1",
        size: "10",
      },
      permissions: [],
      fromData: {},
      dialogVisible: false,
    }
  },
  props: {

  },


  created() {
    this.page();
    console.log(this.fromData)
  },
  components: {
    permissionFrom,
  },
  methods: {
    page() {
      Page(this.param).then(res => {
        this.permissions = res.data.records;
        // console.log(this.permissions);
      })
    },
    delet(id) {
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
    }

  }
}
</script>

<style scoped>
.el-input {
  margin-top: 20px;
}
</style>