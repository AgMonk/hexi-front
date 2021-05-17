<template>
  <div>
    <div class="left">
      <el-button style="position: absolute; right: 18%; top: 7.5%" @click="dialogVisible = true">添加角色</el-button>
      <el-dialog
          title="添加角色"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose">
        <el-input v-model="param.nickname" placeholder="中文名称" clearable></el-input>
        <el-input v-model="param.name" placeholder="英文名称" clearable></el-input>
        <el-input v-model="param.permissions" placeholder="权限ID列表" clearable></el-input>
        <span slot="footer" class="dialog-footer">
    <el-button @click="empty">清空</el-button>
    <el-button type="primary" @click="Submit">确定</el-button>
  </span>
      </el-dialog>
    </div>
    <h2 style="position: absolute; top: 10%">查询角色列表</h2>
    <role-list />
  </div>
</template>

<script>
import { RoleSave } from "../../../../network/output";
import RoleList from "./roleList";
export default {
  name: "Permission",
  components: {
    RoleList,
  },
  data() {
    return  {
      param:{
        nickname: "1",
        name: "1",
        permissions: [
          {
            "id": 1
          },
          {
            "id": 2
          },
          {
            "id": 3
          }
        ],
      },
      dialogVisible: false,
    }
  },
  methods: {
    clear() {
      this.param.nickname = "";
      this.param.name = "";
      this.param.permissions = "";
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
      if(this.param.nickname.length === 0 || this.param.name.length ===0
      || this.param.permissions.length === 0) {
        this.$message.error({
          message: "表单均不能为空"
        })
      } else {
        RoleSave(this.param).then(res => {
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