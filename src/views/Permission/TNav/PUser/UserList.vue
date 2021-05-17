<template>
<div>
  <el-table :data="userLists" style="width: 800px; position: absolute; left: 30%; top: 20%" >
    <el-table-column label="ID" prop="id"></el-table-column>
    <el-table-column label="备注" prop="remark"></el-table-column>
    <el-table-column label="命名空间" prop="namespace"></el-table-column>
    <el-table-column label="操作" prop="action"></el-table-column>
    <el-table-column label="操作对象" prop="target"></el-table-column>
    <el-table-column><template slot-scope="obtain"><el-button @click="dele(obtain.row.id)">删除</el-button></template></el-table-column>
  </el-table>
</div>
</template>

<script>
import { FindAll } from "../../../../network/output";
import { UserDel } from "../../../../network/output";

export default {
  name: "UserList",
  data() {
    return {
      userLists: [],
    }
  },
  created() {
    this.findAll();

  },
  methods: {
    findAll(){
      FindAll().then(res => {
        this.userLists = res.data;
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

</style>