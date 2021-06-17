<template>
  <div>
    <el-tooltip effect="light" placement="bottom">
      <el-button>
        <p>
          <strong>水质信息：</strong>
          氨氮含量：{{ waterData.ammoniaNitrogenContentIndex }}
          溶解氧：{{ waterData.dissolvedOxygen }}
          高锰酸钾指数： {{ waterData.permanganateIndex }}
          pH值： {{ waterData.pH }}
          温度：{{ waterData.temperature }}
        </p>
      </el-button>
      <div slot="content">
        <water-page/>
      </div>
    </el-tooltip>
    <el-tooltip effect="light" placement="bottom">
      <el-button>
        <p>
          <strong>水质信息：</strong>

        </p>
      </el-button>
      <div slot="content">
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
      waterData: {},
    }
  },
  methods: {
    waterQualityInquiry() {
      WaterQualityPage(this.paging).then(res => {
        this.waterData = res.data.records[0] ? res.data.records[0].factorValue : undefined;
        this.total = res.data.total;
        console.log(this.waterData)
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
<!--      <el-table :data="waterData">-->
<!--      <el-table-column label="省份" prop="province"></el-table-column>-->
<!--      <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>-->
<!--      <el-table-column label="氨氮含量" prop="factorValue.ammoniaNitrogenContentIndex"></el-table-column>-->
<!--      <el-table-column label="溶解氧" prop="factorValue.dissolvedOxygen"></el-table-column>-->
<!--      <el-table-column label="高锰酸钾指数" prop="factorValue.permanganateIndex"></el-table-column>-->
<!--      <el-table-column label="pH值" prop="factorValue.pH"></el-table-column>-->
<!--      <el-table-column label="温度" prop="factorValue.temperature"></el-table-column>-->
<!--      </el-table>-->