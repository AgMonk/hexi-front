<template>
  <el-container direction="vertical">
    <el-header height="20px">
<!--      <el-select v-model="add" placeholder="添加新角色" @change="save">-->
<!--        <el-option v-for="item in rolePool"-->
<!--                   :value="item.id"-->
<!--                   :key="item.id"-->
<!--                   :label="item.nickname"-->
<!--        />-->
<!--      </el-select>-->
    </el-header>
<!--    <el-main>-->
<!--      <el-table :data="userRoles">-->
<!--        <el-table-column label="角色" prop="name"/>-->
<!--        <el-table-column label="昵称" prop="nickname"/>-->
<!--        <el-table-column label="删除">-->
<!--          <template slot-scope="s">-->
<!--            <el-button type="danger" @click="del(s.row.uuid)">删除</el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--    </el-main>-->
  </el-container>
</template>

<script>
import { HasRoles} from "../../../../network/output";

export default {
  name: "user-dialog",
  data() {
    return {
      add: undefined,
      userRoles: [],
      rolePool: [],
      userId: undefined,
    }
  },
  created() {
    HasRoles().then(res => {
      console.log(res);
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>