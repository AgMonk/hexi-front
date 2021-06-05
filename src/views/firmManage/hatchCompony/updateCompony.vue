<template>
  <el-form label-width="100px">
    <el-form-item v-if="false">{{ componyData.uuid }}</el-form-item>
    <el-form-item label="企业名称">
      <el-input v-model="componyData.name"/>
    </el-form-item>
    <el-form-item label="企业地址">
      <el-input v-model="componyData.address"/>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="componyData.phone"/>
    </el-form-item>
    <el-form-item label="企业类型">
      <el-input v-model="componyData.type"/>
    </el-form-item>
    <el-form-item label="认证类型">
      <el-input v-model="componyData.certificationType"/>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button @click="update">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {updateCompony} from "../../../network/output";
import {copyObj} from "../../../common/utils";

export default {
  name: "updateCompony",
  data() {
    return {
      componyData: {},
    }
  },

  methods: {
    update() {
      updateCompony(this.componyData).then(res => {
        console.log(res);
      })
    },
  },
  mounted() {
    this.componyData = copyObj(this.updateCompony),
        console.log(this.componyData)
  },

  props: {
    updateCompony: {
      type: Object,
      required: true,
    }
  },

  watch: {
    updateCompony: {
      handler: function (d) {
        this.componyData = copyObj(d);
      }
    }
  }
}
</script>

<style scoped>

</style>