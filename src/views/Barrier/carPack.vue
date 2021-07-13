<template>

  <div>
    <h3>车辆在场内记录</h3>
    <el-form :inline="true">
      <el-form-item label="在场天数">
        <el-input v-model="day" placeholder="可不填"></el-input>
      </el-form-item>
      <el-button type="danger" @click="carStatus">查询在场车辆</el-button>
    </el-form>
    <el-table :data="packData">
      <el-table-column label="车辆类型" prop="carTypeName"></el-table-column>
      <el-table-column label="车辆数量" prop="count"></el-table-column>
      <el-table-column label="是否超时" prop="time"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {CarStatus} from "../../network/output";

export default {
  name: "carPack",
  data() {
    return {
      day: 3,
      packData: [],
    }
  },
  methods: {
    carStatus() {
      CarStatus(this.day).then(res => {
        this.packData = res.data;
        for (let i = 0; i < this.packData.length; i++) {
          this.packData[i].time = this.packData[i].timeout ? '长期' : '未超时'
        }
      })
    }
  },
  mounted() {
    this.carStatus();
  }
}
</script>

<style scoped>
/*p {*/
/*  font-size: 20px;*/
/*  font-weight: bold;*/
/*}*/
</style>