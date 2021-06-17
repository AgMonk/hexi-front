<template>
  <div>
  <el-container direction="vertical" class="center">
   <el-header>
    <h2>查询权限列表</h2>
   </el-header>

    <el-main>
  <el-table :data="permissions" style="width: 800px">
    <el-table-column label="权限ID" prop="id"></el-table-column>
    <el-table-column label="备注" prop="remark"></el-table-column>
    <el-table-column label="命名空间" prop="namespace"></el-table-column>
    <el-table-column label="操作" prop="action"></el-table-column>
    <el-table-column label="操作对象" prop="target"></el-table-column>

    <el-table-column><template slot-scope="del"><el-button @click="delet(del.row.id)">删除</el-button></template></el-table-column>
  </el-table>
    </el-main>

  <el-footer>
  <el-pagination
      :current-page.sync="param.page"
      :page-size.sync="param.size"
      :total="200"
      layout="prev, pager, next, jumper"
      @current-change="page">
  </el-pagination>
  </el-footer>
  </el-container>
  </div>
</template>

<script>
import {Page, UserDel} from "../../../../network/output";

export default {
  name: "inquire",
  data() {
    return {
      param: {
        page: 1,
        size: 10,
      },
      permissions: [],
    }
  },
  created() {
    this.page();
  },
  components: {
  },
  methods: {
    page() {
      Page(this.param).then(res => {
        this.permissions = res.data.records;
      })
    },
    delet(id) {
      this.$confirm("确定删除？").then(() => {
        UserDel(id).then((res) => {
          switch (res.code) {
            case 2000 :
              this.page();
              // this.$message({
              //   message: res.message,
              //   type: 'success'
              // })
              break;
              // default :
              //   this.$message.error({
              //     message: res.message,
              //   })
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