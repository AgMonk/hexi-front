<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>环境信息</h3>
    </div>
    <div style="width: 500px; ">
      <el-row style="padding: 20px 0 0 20px">
        <p style=" font-weight: 600; font-size: 15px; margin: 0; text-align: left">
          <strong style="font-size: 20px;">水质信息：</strong><br><br>
          <span>氨氮含量：{{ waterData.ammoniaNitrogenContentIndex }}；</span>
          <span>溶解氧：{{ waterData.dissolvedOxygen }}；</span>
          <span>高锰酸钾指数： {{ waterData.permanganateIndex }}</span><br>
          <br>
          <span>pH值： {{ waterData.pH }}；</span>
          温度：{{ waterData.temperature }}
        </p>
      </el-row>
      <br><br>
      <el-row style="padding: 0 0 0 20px">

        <p style=" font-weight: 600; font-size: 15px; text-align: left; margin: 0">
          <strong style="font-size: 20px">土质信息：</strong><br><br>
          <span>钾含量[mg/L]： {{ soilList.kPercent }}；</span>
          <span>氮含量[mg/L]： {{ soilList.nPercent }}</span><br><br>
          <span>磷含量[mg/L]： {{ soilList.pPercent }}；</span>
          <span>含水率： {{ soilList.waterPercent }}</span><br><br>
          <span>pH值： {{ soilList.ph }}；</span>
          <span>温度： {{ soilList.temperature }}；</span>
          时间：{{ soilList.timestamp ? soilList.timestamp.timeString : undefined }}
        </p>
      </el-row>
      <br><br>

      <el-button style="padding: 0 0 0 20px; " type="text">
        <p style=" color: black; font-weight: 600; font-size: 15px; margin: 0; text-align: left">
          <strong style="font-size: 20px">空气质量：</strong><br><br>
          <span>空气质量： {{ airData.aqi }} {{ airData.quality }}；</span>
          <span>空气级别：{{ airData.aqiinfo.level }} </span><br><br>
          <span>PM2.5：{{ airData.pm2_5 }}；</span>
          <span>PM10： {{ airData.pm10 }}；</span>
          二氧化硫： {{ airData.so2 }}
        </p>
      </el-button>
    </div>
  </el-card>


</template>

<script>
import {GetWeather, SoilDatapage, WaterQualityPage} from "../../../network/output";

export default {
  name: "homeEnvironmentalTesting",
  components: {},
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
        // console.log(this.airData)
      })
    },
    waterQualityInquiry() {
      WaterQualityPage(this.paging).then(res => {
        this.waterData = res.data.records[0] ? res.data.records[0].factorValue : undefined;
        this.total = res.data.total;
        // console.log(this.waterData)
      })
    },
    soilQuality() {
      SoilDatapage(this.soilData).then(res => {
        this.soilList = res.data.records[0] ? res.data.records[0] : undefined;
        // console.log(this.soilList);
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
