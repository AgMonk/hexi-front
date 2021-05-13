<template>
<div>
  <el-table :data="permissions" style="width: 800px; position: absolute; left: 30%; top: 20%">
    <el-table-column
    label="权限ID" prop="id">
    </el-table-column>
    <el-table-column
    label="备注" prop="remark">
    </el-table-column>
    <el-table-column
    label="命名空间" prop="namespace">
    </el-table-column>
    <el-table-column
    label="操作" prop="action">
    </el-table-column>
    <el-table-column
    label="操作对象" prop="target">
    </el-table-column>
    <el-table-column>
    <el-button>修改</el-button>
    </el-table-column>
    <el-table-column>
      <el-button>删除</el-button>
    </el-table-column>
  </el-table>

</div>
</template>

<script>
import { Page } from "../../../network/output";

export default {
  name: "inquire",
  data() {
    return {
      param: {
        page: "1",
        size: "1",
      },
      permissions: [],
    }
  },
  created() {
    Page(this.param).then(res => {
      this.permissions = res.data.records;
      console.log(this.permissions);
    })
  },
}
</script>

<style scoped>
</style>