<template>
  <el-form>
  <el-form-item label="备注:"><el-input v-model="param.remark" clearable /></el-form-item>
  <el-form-item label="命名空间:"><el-input v-model="param.namespace" clearable /></el-form-item>
  <el-form-item label="操作:"><el-input v-model="param.action" clearable /></el-form-item>
  <el-form-item label="操作对象:"><el-input v-model="param.target" clearable /></el-form-item>
    <el-form-item style="text-align: right">
    <el-button @click="empty">清空</el-button>
    <el-button type="primary" @click="Submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {AddUserSave} from "../../network/output";
export default {
  name: "from.vue",
  data() {
    return  {
      param:{
        remark: "",
        namespace: "",
        action: "",
        target: "",
        id:undefined,
      },
      dialogVisible: false,
    }
  },
  methods: {
    clear() {
      this.param = {};
    },
    empty() {
      this.$confirm('确认清空？')
          .then( () => {
            this.clear();
          }).then( () => {
        this.$message({
          message: "清空成功",
          type: 'success'
        })
      }).catch(() => {});
    },
    Submit() {
      if(this.param.remark.length === 0 || this.param.namespace.length ===0
          || this.param.action.length === 0 || this.param.target.length ===0) {
        this.$message.error({
          message: "表单均不能为空"
        })
      } else {
        AddUserSave(this.param).then(res => {
          console.log(res);
          switch (res.code) {
            case 2000 :
              this.$message({
                message: res.message,
                type: 'success'
              });
              this.dialogVisible = false;
              this.clear();
              break;
            default:
              this.$message.error({
                message: res.message,
              });
              break;
          }
        })
      }
    }
  }
}
</script>

<style scoped>
/*div > .el-input {*/
/*  margin-top: 20px;*/
/*}*/

</style>