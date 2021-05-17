<template>
 <div>
<div class="left">
  <el-button style="position: absolute; right: 18%; top: 7.5%" @click="dialogVisible = true">添加权限</el-button>
  <el-dialog
      title="添加权限"
      :visible.sync="dialogVisible"
      width="50%" >
  <permission-from />
  </el-dialog>
</div>
   <h2 style="position: absolute; top: 10%">查询权限列表</h2>
<inquire />
 </div>
</template>

<script>
import permissionFrom from "../../../../components/from/permissionFrom";
import inquire from "./inquire";
export default {
  name: "Permission",
  components: {
    inquire, permissionFrom,
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style scoped>
h2 {
  position: absolute;
  top: 10%;
  left: 50%;
}
</style>