<template>
  <el-container>
    <el-header>
      <h1>环境监测</h1>
    </el-header>
    <el-main>
      <div style="width: 510px; height: 400px; background: #0F373F; margin: 0 auto">
        <el-tooltip effect="light" placement="bottom">
          <el-button style="background: #0F373F" type="text">
            <p style="color: #FFFFFF; font-weight: 600; font-size: 17px; text-align: left">
              <strong style="font-size: 20px">水质信息：</strong><br><br>
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
            <el-button style="padding-left: 15px; padding: 0; background: #0F373F" type="text">
              <p style="color: #FFFFFF; font-weight: 600; font-size: 17px; text-align: left">
                <strong style="font-size: 20px">空气质量：</strong>
                <span> {{ airData.aqi }} {{ airData.quality }}；</span><br><br>
                <span>空气级别：{{ airData.aqiinfo.level }}；</span><br>
                <span >PM2.5：{{ airData.pm2_5 }}；</span><br>
                <span>PM10： {{ airData.pm10 }}；</span><br>
                二氧化硫： {{ airData.so2 }}
              </p>
            </el-button>
            <br>
<!--            <el-tooltip effect="light" placement="bottom">-->
              <el-button style="background: #0F373F" type="text">
                <p style="color: #FFFFFF; font-weight: 600; font-size: 17px; text-align: left">
                  <strong style="font-size: 20px">土质信息：</strong><br><br>
                  <span>钾含量[mg/L]： {{ soilList.kPercent }}；</span><br>
                  <span>氮含量[mg/L]： {{ soilList.nPercent }}；</span><br>
                  <span>磷含量[mg/L]： {{ soilList.pPercent }}；</span><br>
                  <span>含水率： {{ soilList.waterPercent }}；</span><br>
                  <span>pH值： {{ soilList.ph }}；</span><br>
                  <span>温度： {{ soilList.temperature }}；</span><br>
                  时间：{{ soilList.timestamp ? soilList.timestamp.timeString : undefined }}
                </p>
              </el-button>
<!--              <div slot="content">-->
<!--                <soil-data/>-->
<!--              </div>-->
<!--            </el-tooltip>-->
      </div>
    </el-main>
  </el-container>

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
        showMessage: 1,
        start: undefined,
        end: undefined,
        condition: {
          stationName: "车渡"
        }
      },
      soilData: {
        page: 1,
        size: 1,
        showMessage: 1,
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
      GetWeather({city, showMessage: 1}).then(res => {
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
h1 {
  text-align: center;
  color: #FFFFFF;
  font-weight: 1000;
}
</style>
