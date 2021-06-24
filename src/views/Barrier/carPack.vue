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
      <el-form :inline="true">
        <el-form-item v-for="(item, i) in packData" :key="i" style="margin: 150px; ">
          <p>{{ item.carTypeName }}：</p>
          <p>数量： {{ item.count }}</p>
          <p>时长： {{ item.timeout ? '超时' : '未超时' }}</p>
        </el-form-item>
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
      day: 3,
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
  },
  mounted() {
    this.carStatus();
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
  font-weight: bold;
}
</style>