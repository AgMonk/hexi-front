<template>
  <el-form>
    <el-form-item v-show="hidden" label="ID">
      <el-input v-model="param.id"/>
    </el-form-item>
    <el-form-item label="中文名称:">
      <el-input v-model="param.nickname" clearable placeholder="创建的角色的名称"/>
    </el-form-item>
    <el-form-item label="英文名称:">
      <el-input v-model="param.name" clearable placeholder="创建的角色的名称"/>
    </el-form-item>
    <el-form-item label="权限">
      <el-table :data="permissions" ref="multipleTable" @selection-change="param.permissions = $event">
        <el-table-column type="selection" width="55"/>
        <el-table-column label="备注" prop="remark"/>
        <!--          <el-table-column label="权限字符串">-->
        <!--            <template slot-scope="scope">-->
        <!--              {{ scope.row.namespace }}:{{ scope.row.action }}:{{ scope.row.target }}-->
        <!--            </template>-->
        <!--          </el-table-column>-->
      </el-table>
      </el-form-item>
    <el-form-item style="text-align: right">
    <el-button @click="empty">清空</el-button>
    <el-button type="primary" @click="Submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {FindAll, RoleSave} from "../../network/output";
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
        permissions: [],
      },
      permissions: [],
    }
  },
  created() {
    this.findAll();
  },
  methods: {
    clear() {
      this.param = {};
    },
    findAll(){
      let permId = this.param.permissions.map(p=>p.id);
      FindAll({params: 1}).then(res => {
        this.permissions = res.data;
        console.log(res)
        setTimeout(() => {
          this.permissions.forEach(perm => {
            if (permId.includes(perm.id)) {
              this.$refs.multipleTable.toggleRowSelection(perm)
            }
          }, 1000)
        })
      })
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
      // if(this.param.nickname.length === 0 || this.param.name.length ===0
      //     || this.param.permissions.length === 0) {
      //   this.$message.error({
      //     message: "表单均不能为空"
      //   })
      // } else {
      console.log(11)
      RoleSave(this.param).then(res => {
        switch (res.code) {
          case 2000 :
            this.$emit("success");
            break;
          default:

        }
        })
    }
  },
  mounted() {
    this.param = copyObj(this.data);
    this.param.permissions = this.param.permissions ? this.param.permissions : [];

    this.findAll();
  },
  watch: {
    "data": {
      handler: function (e) {
        this.param = copyObj(e);
        this.param.permissions = this.param.permissions ? this.param.permissions : [];

        this.findAll();
      }
    }
  },
  props: ["data"],
}
</script>

<style scoped>
</style>