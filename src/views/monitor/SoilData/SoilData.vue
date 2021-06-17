<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>水质数据</span>
        </div>
        <div class="text item">
          <el-table :data="soilList">
            <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
            <el-table-column label="钾含量[mg/L]" prop="kPercent"></el-table-column>
            <el-table-column label="氮含量[mg/L]" prop="nPercent"></el-table-column>
            <el-table-column label="磷含量[mg/L]" prop="pPercent"></el-table-column>
            <el-table-column label="含水率" prop="waterPercent"></el-table-column>
            <el-table-column label="pH值" prop="ph"></el-table-column>
            <el-table-column label="温度" prop="temperature"></el-table-column>
          </el-table>
          <el-pagination
              :current-page.sync="soilData.page"
              :page-size.sync="soilData.size"
              :total="total"
              background
              layout="prev, pager, next,jumper"
              @current-change="soilDatapage"
          >
          </el-pagination>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {SoilDatapage} from "../../../network/output";

export default {
  name: "SoilData",
  data() {
    return {
      soilData: {
        page: 1,
        size: 10,
        start: undefined,
        end: undefined
      },
      soilList: [],
      total: 0,
    }
  },
  methods: {
    soilDatapage() {
      SoilDatapage(this.soilData).then(res => {
        console.log(res);
        this.soilList = res.data.records;
        this.total = res.data.total;
      })
    },
  },
  mounted() {
    this.soilDatapage();
  },
}
</script>

<style scoped>
</style>