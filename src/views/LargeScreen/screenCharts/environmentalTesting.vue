<template>
  <div>
    <el-tooltip effect="light" placement="bottom">
      <el-button style="padding: 0; background: #0F373F" type="text">
        <p style="color: #FFFFFF; font-weight: 600; font-size: 17px">
          <strong style="font-size: 20px">水质信息：</strong>
          <span >氨氮含量：{{ waterData.ammoniaNitrogenContentIndex }}；</span><br>
          <span >溶解氧：{{ waterData.dissolvedOxygen }}；</span><br>
          <span >高锰酸钾指数： {{ waterData.permanganateIndex }}；</span><br>
          <span >pH值： {{ waterData.pH }}；</span><br>
          温度：{{ waterData.temperature }}
        </p>
      </el-button>
      <div slot="content">
        <water-page/>
      </div>
    </el-tooltip>
<!--    <el-button style="padding-left: 15px; padding: 0; background: #0F373F" type="text">-->
<!--      <p style="color: #FFFFFF; font-weight: 600; font-size: 17px;">-->
<!--        <strong style="font-size: 20px">空气质量：</strong>-->
<!--        <span style="padding-right: 5px;"> {{ airData.aqi }} {{ airData.quality }}；</span>-->
<!--        <span style="padding-right: 5px;">空气级别：{{ airData.aqiinfo.level }}；</span>-->
<!--        <span style="padding-right: 5px;">PM2.5：{{ airData.pm2_5 }}；</span>-->
<!--        <span style="padding-right: 5px;">PM10： {{ airData.pm10 }}；</span>-->
<!--        二氧化硫： {{ airData.so2 }}-->
<!--      </p>-->
<!--    </el-button>-->
<!--    <br>-->
<!--    <el-tooltip effect="light" placement="bottom">-->
<!--      <el-button style="padding: 0; background: #0F373F" type="text">-->
<!--        <p style="color: #FFFFFF; font-weight: 600; font-size: 17px">-->
<!--          <strong style="font-size: 20px">土质信息：</strong>-->
<!--          <span style="padding-right: 10px;">钾含量[mg/L]： {{ soilList.kPercent }}；</span>-->
<!--          <span style="padding-right: 10px;">氮含量[mg/L]： {{ soilList.nPercent }}；</span>-->
<!--          <span style="padding-right: 10px;">磷含量[mg/L]： {{ soilList.pPercent }}；</span>-->
<!--          <span style="padding-right: 10px;">含水率： {{ soilList.waterPercent }}；</span>-->
<!--          <span style="padding-right: 10px;">pH值： {{ soilList.ph }}；</span>-->
<!--          <span style="padding-right: 10px;">温度： {{ soilList.temperature }}；</span>-->
<!--          时间：{{ soilList.timestamp ? soilList.timestamp.timeString : undefined }}-->
<!--        </p>-->
<!--      </el-button>-->
<!--      <div slot="content">-->
<!--        <soil-data/>-->
<!--      </div>-->
<!--    </el-tooltip>-->
  </div>
</template>

<script>
import {GetWeather, SoilDatapage, WaterQualityPage} from "../../../network/output";
import WaterPage from "../../monitor/WaterQuality/waterPage";
// import SoilData from "../../monitor/SoilData/SoilData";

export default {
  name: "environmentalTesting",
  components: {
    // SoilData,
    WaterPage},
  data() {
    return {
      airData: {
        aqiinfo: {}
      },
      paging: {
        page: 1,
        size: 5,
        start: undefined,
        end: undefined,
        condition: {
          stationName: "车渡"
        }
      },
      soilData: {
        page: 1,
        size: 1,
        start: undefined,
        end: undefined
      },
      waterData: {},
      soilList: {}
    }
  },
  methods: {
    getWeather() {
      let city = "柳州"
      GetWeather(city).then(res => {
        this.airData = res.data.aqi;
        this.airData.aqiinfo = res.data.aqi.aqiinfo;
        console.log(this.airData)
      })
    },
    waterQualityInquiry() {
      WaterQualityPage(this.paging).then(res => {
        this.waterData = res.data.records[0] ? res.data.records[0].factorValue : undefined;
        this.total = res.data.total;
        console.log(this.waterData)
      })
    },
    soilQuality() {
      SoilDatapage(this.soilData).then(res => {
        this.soilList = res.data.records[0] ? res.data.records[0] : undefined;
        console.log(this.soilList);
      })
    },



  },

  mounted() {
    this.waterQualityInquiry();
    this.soilQuality();
    this.getWeather();


  },


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