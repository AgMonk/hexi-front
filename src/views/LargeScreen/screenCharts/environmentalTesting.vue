<template>
  <div>
    <el-tooltip effect="light" placement="bottom">
      <el-button>下边</el-button>
      <div slot="content">
        <!--      <el-table :data="waterData">-->
        <!--      <el-table-column label="省份" prop="province"></el-table-column>-->
        <!--      <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>-->
        <!--      <el-table-column label="氨氮含量" prop="factorValue.ammoniaNitrogenContentIndex"></el-table-column>-->
        <!--      <el-table-column label="溶解氧" prop="factorValue.dissolvedOxygen"></el-table-column>-->
        <!--      <el-table-column label="高锰酸钾指数" prop="factorValue.permanganateIndex"></el-table-column>-->
        <!--      <el-table-column label="pH值" prop="factorValue.pH"></el-table-column>-->
        <!--      <el-table-column label="温度" prop="factorValue.temperature"></el-table-column>-->
        <!--      </el-table>-->
        <water-page/>
      </div>
    </el-tooltip>
  </div>
</template>

<script>
import {WaterQualityPage} from "../../../network/output";
import WaterPage from "../../monitor/WaterQuality/waterPage";

export default {
  name: "environmentalTesting",
  components: {WaterPage},
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
    }
  },
  methods: {
    waterQualityInquiry() {
      WaterQualityPage(this.paging).then(res => {
        this.waterData = res.data.records;
        this.total = res.data.total;
        console.log(res)
      })
    }


  },
  mounted() {
    this.waterQualityInquiry();
  }
}
</script>

<style scoped>

</style>