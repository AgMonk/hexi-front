<template>
  <el-container direction="vertical">
    <el-header height="20px">
      <el-select v-model="add" placeholder="添加新角色" @change="save">
        <el-option v-for="item in rolePool"
                   :value="item.id"
                   :key="item.id"
                   :label="item.nickname"
        />
      </el-select>
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
import {HasRoles, addSave, Del, find, } from "../../../../network/output";

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

      // switch (res.code) {
      //   case 2000 : this.$message({ message: res.message,  type: 'success'})
      //     break;
      //   default : this.$message.error({ message: res.message, })
      // }

    hasRoles(){
      HasRoles(this.userId)
          .then(res => {
            this.userRoles = res.data.map(role => {
              let uuid = role.uuid;
              let ro = this.rolePool.filter(r => r.id === role.roleId)[0];
              return Object.assign({uuid}, ro)
            });
            switch (res.code) {
              case 2000 : this.$message({ message: res.message,  type: 'success'})
                break;
              default : this.$message.error({ message: res.message, })
            }
          })
    },
    find() {
      find().then(res => {
        switch (res.code) {
          case 2000 : this.$message({ message: res.message,  type: 'success'})
            break;
          default : this.$message.error({ message: res.message, })
        }
        this.rolePool = res.data;
        this.hasRoles();
      })
    },
    save(roleId) {
      let p = {userId: this.userId, roleId};
      addSave(p).then(res => {
        switch (res.code) {
          case 2000 : this.$message({ message: res.message,  type: 'success'})
            break;
          default : this.$message.error({ message: res.message, })
        }
        this.hasRoles();
        this.add = undefined;
      })
    },

    del(id) {
        Del(id).then(res => {
          switch (res.code) {
            case 2000 : this.$message({ message: res.message,  type: 'success'})
              break;
            default : this.$message.error({ message: res.message, })
          }
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