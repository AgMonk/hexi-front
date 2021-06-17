<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>水质数据</span>
        </div>
        <div class="text item">
          <el-table :data="waterData">
            <el-table-column label="省份" prop="province"></el-table-column>
            <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
            <el-table-column label="氨氮含量" prop="factorValue.ammoniaNitrogenContentIndex"></el-table-column>
            <el-table-column label="溶解氧" prop="factorValue.dissolvedOxygen"></el-table-column>
            <el-table-column label="高锰酸钾指数" prop="factorValue.permanganateIndex"></el-table-column>
            <el-table-column label="pH值" prop="factorValue.pH"></el-table-column>
            <el-table-column label="温度" prop="factorValue.temperature"></el-table-column>
          </el-table>
          <el-pagination
              :current-page.sync="paging.page"
              :page-size.sync="paging.size"
              :total="total"
              background
              layout="prev, pager, next,jumper"
              @current-change="waterQualityPage"
          >
          </el-pagination>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import {getStations, WaterQualityPage} from "../../../network/output";

export default {
  name: "waterPage",
  data() {
    return {
      paging: {
        page: 1,
        size: 5,
        start: undefined,
        end: undefined,
        condition: {
          stationName: "车渡"
        }
      },
      waterData: undefined,
      total: undefined,
    }
  },
  mounted() {
    this.waterQualityPage();
  },
  methods: {
    waterQualityPage() {
      WaterQualityPage(this.paging).then(res => {
        this.waterData = res.data.records;
        this.total = res.data.total;
        // console.log(res)
      })
    },
    getStation() {
      getStations().then(res => {
        console.log(res)
      })
    }
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 1200px;
}
</style>