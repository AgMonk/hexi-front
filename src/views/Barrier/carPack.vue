<template>
  <el-container>
    <el-header>
      <el-form :inline="true">
        <el-form-item label="在场天数">
          <el-input v-model="day" placeholder="可不填"></el-input>
        </el-form-item>
        <el-button type="danger" @click="carStatus">查询在场车辆</el-button>
      </el-form>
    </el-header>
    <el-main>
      <el-form>
        <el-form-item label="packData.carTypeName"></el-form-item>
        <el-form-item label=""></el-form-item>
        <el-form-item label=""></el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import {CarStatus} from "../../network/output";

export default {
  name: "carPack",
  data() {
    return {
      day: undefined,
      packData: {},
    }
  },
  methods: {
    carStatus() {
      CarStatus(this.day).then(res => {
        this.packData = res.data;
        console.log(this.packData);
      })
    }
  }
}
</script>

<style scoped>

</style>