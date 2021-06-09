<template>
  <el-container>
    <el-header>
      <el-form :inline="true" :model="paging">
        <el-form-item label="起止时间">
          <el-date-picker v-model="paging.start"
                          format="yyyy-MM-dd HH:mm"
                          placeholder="选择开始时间"
                          style="width: 180px"
                          type="datetime"
                          value-format="timestamp"/>
          <el-date-picker v-model="paging.end"
                          format="yyyy-MM-dd HH:mm"
                          placeholder="选择结束时间"
                          style="width: 180px"
                          type="datetime"
                          value-format="timestamp"/>
        </el-form-item>
        <el-form-item label="进/出">
          <el-select v-model="paging.condition.type" placeholder="可不选">
            <el-option label="进" value="IN"></el-option>
            <el-option label="出" value="OUT"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="牌照">
          <el-input v-model="paging.condition.plateNo" placeholder="可不填"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="barrierPage();">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>

      <el-button @click="carStatus"></el-button>
    </el-main>
  </el-container>
</template>

<script>
import {BarrierPage, CarStatus} from "../../network/output";

export default {
  name: "barrierPage",
  data() {
    return {
      paging: {
        page: 1,
        size: 5,
        start: undefined,
        end: undefined,
        condition: {
          type: undefined,
          plateNo: "",
        }
      },
    }
  },
  mounted() {
  },
  methods: {
    barrierPage() {
      this.paging.start = Math.floor(this.paging.start / 1000);
      this.paging.end = Math.floor(this.paging.end / 1000);
      BarrierPage(this.paging).then(res => {
        console.log(res);
        this.paging.start = undefined;
        this.paging.end = undefined;
      })
    },
    carStatus() {
      // let day = 7;
      CarStatus().then(res => {
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>

</style>