<template>
    <el-form >
      <el-form-item label="ID"><el-input  v-model="param.id"/></el-form-item>
      <el-form-item label="中文名称:"><el-input v-model="param.nickname" clearable/></el-form-item>
      <el-form-item label="英文名称:"><el-input v-model="param.name" clearable/></el-form-item>
<!--      <el-form-item label="权限ID列表:"><el-input v-model="param.permissions" clearable/></el-form-item>-->
    <el-form-item style="text-align: right">
    <el-button @click="empty">清空</el-button>
    <el-button type="primary" @click="Submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {RoleSave} from "../../network/output";
import {copyObj} from "../../common/utils";

export default {
  name: "roleFrom",
  data() {
    return  {
      hidden: false,
      param:{
        id: undefined,
        nickname: undefined,
        name: undefined,
        permissions: [
          // {
          //   "id": 1
          // },
          // {
          //   "id": 2
          // },
          // {
          //   "id": 3
          // }
        ],
      },
    }
  },
  methods: {
    clear() {
      this.param = {};
    },
    empty() {
      this.$confirm('确认清空？')
          .then(() => {
            this.clear();
          }).then(() => {
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
          // console.log(res);
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
  },
  mounted() {
    this.param = copyObj(this.data);

  },
  watch: {
    "data": {
      handler: function (e) {
        this.param = copyObj(e)
        // this.role.permissions = this.role.permissions ? this.role.permissions : [];
        //
        // this.findAll();
      }
    }
  },
  props: ["data"],
}
</script>

<style scoped>
</style>