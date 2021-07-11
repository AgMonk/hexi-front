<template>
  <el-container direction="vertical">
    <el-header height="20px">
      <el-form label-width="70px">
        <el-form-item label="添加角色">
          <el-select v-model="add" placeholder="给该账号添加新的角色权限" style="width: 250px" @change="save">
            <el-option v-for="item in rolePool"
                       :key="item.id"
                       :label="item.nickname"
                       :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>

    </el-header>
    <el-main>
      <el-table :data="userRoles">
        <el-table-column label="角色" prop="name"/>
        <el-table-column label="昵称" prop="nickname"/>
        <el-table-column label="删除">
          <template slot-scope="s">
            <el-button type="danger" @click="del(s.row.uuid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import {addSave, Del, find, HasRoles,} from "../../../../network/output";

export default {
  name: "user-dialog",
  data() {
    return {
      add: undefined,
      userRoles: [],
      rolePool: [],
      userId: undefined,
      roleId: undefined,
    }
  },
  methods: {
    hasRoles(){
      HasRoles(this.userId)
          .then(res => {
            this.userRoles = res.data.map(role => {
              let uuid = role.uuid;
              let ro = this.rolePool.filter(r => r.id === role.roleId)[0];
              return Object.assign({uuid}, ro)
            });
          })
    },
    find() {
      find({params: 1}).then(res => {
        this.rolePool = res.data;
        this.hasRoles();
        console.log(res)
      })
    },
    save(roleId) {
      let p = {userId: this.userId, roleId};
      addSave(p).then(() => {
        this.hasRoles();
        this.add = undefined;
      })
    },

    del(id) {
      Del(id).then(() => {
        this.hasRoles();
      })
    },
  },
  mounted() {
    this.userId = this.id;
    this.find();
  },
  watch: {
    "id": {
      handler: function (e) {
        this.userId = e
        this.find();
      }
    }
  },
  props: ["id"],
}
</script>

<style scoped>

</style>