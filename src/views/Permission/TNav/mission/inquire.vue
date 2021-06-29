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
  </el-table>
    </el-main>

  <el-footer>
  <el-pagination
      :current-page.sync="param.page"
      :page-size.sync="param.size"
      :total="total"
      layout="prev, pager, next, jumper"
      @current-change="page">
  </el-pagination>
  </el-footer>
  </el-container>
  </div>
</template>

<script>
import {Page} from "../../../../network/output";

export default {
  name: "inquire",
  data() {
    return {
      param: {
        page: 1,
        size: 5,
      },
      total: null,
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
        this.total = res.data.total;
      })
    },
  }
}
</script>

<style scoped>
</style>