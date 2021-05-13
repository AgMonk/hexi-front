<template>
 <div>
<div class="left">
  <el-button style="position: fixed; right: 18%; top: 7.5%" @click="dialogVisible = true">添加权限</el-button>
  <el-dialog
      title="添加权限"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
    <el-input v-model="param.remark" placeholder="备注" clearable></el-input>
    <el-input v-model="param.namespace" placeholder="命名空间" clearable></el-input>
    <el-input v-model="param.action" placeholder="操作" clearable></el-input>
    <el-input v-model="param.target" placeholder="操作对象" clearable></el-input>
    <span slot="footer" class="dialog-footer">
    <el-button @click="empty">清空</el-button>
    <el-button type="primary" @click="Submit">确定</el-button>
  </span>
  </el-dialog>
</div>
   <h2 style="position: absolute; top: 10%">查询权限列表</h2>
<inquire />
 </div>
</template>

<script>
import { AddUserSave } from "../../../network/output";
import inquire from "./inquire";
export default {
  name: "Permission",
  components: {
    inquire,
  },
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
      this.param.remark = "";
      this.param.namespace = "";
      this.param.action = "";
      this.param.target ="";
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            this.clear();
            done();
          })
          .catch(() => {});
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
      })
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
h2 {
  position: absolute;
  top: 10%;
  left: 50%;
}
div > .el-input {
  margin-top: 20px;
}
</style>