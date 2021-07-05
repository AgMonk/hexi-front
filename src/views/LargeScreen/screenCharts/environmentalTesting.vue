<template>
  <el-container>
    <el-header>
      <h1>环境监测</h1>
    </el-header>
    <el-main>
      <div style="width: 510px; height: 400px; background: #0F373F; margin: 0 auto; ">
        <el-row style="padding: 20px 0 0 20px">
          <el-tooltip effect="light" placement="left" style="padding: 0">
            <el-button style="background: #0F373F" type="text">
              <p style="color: #FFFFFF; font-weight: 600; font-size: 15px; margin: 0; text-align: left">
                <strong style="font-size: 20px;">水质信息：</strong><br><br>
                <span>氨氮含量：{{ waterData.ammoniaNitrogenContentIndex }}；</span>
                <span>溶解氧：{{ waterData.dissolvedOxygen }}；</span>
                <span>高锰酸钾指数： {{ waterData.permanganateIndex }}</span><br>
                <br>
                <span>pH值： {{ waterData.pH }}；</span>
                温度：{{ waterData.temperature }}
              </p>
            </el-button>
            <div slot="content">
              <water-page/>
            </div>
          </el-tooltip>
        </el-row>
        <br><br>
        <el-row style="padding: 0 0 0 20px">
          <el-tooltip effect="light" placement="left" style="padding: 0; ">
            <el-button style="background: #0F373F" type="text">
              <p style="color: #FFFFFF; font-weight: 600; font-size: 15px; text-align: left; margin: 0">
                <strong style="font-size: 20px">土质信息：</strong><br><br>
                <span>钾含量[mg/L]： {{ soilList.kPercent }}；</span>
                <span>氮含量[mg/L]： {{ soilList.nPercent }}</span><br><br>
                <span>磷含量[mg/L]： {{ soilList.pPercent }}；</span>
                <span>含水率： {{ soilList.waterPercent }}</span><br><br>
                <span>pH值： {{ soilList.ph }}；</span>
                <span>温度： {{ soilList.temperature }}；</span>
                时间：{{ soilList.timestamp ? soilList.timestamp.timeString : undefined }}
              </p>
            </el-button>
            <div slot="content">
              <soil-data/>
            </div>
          </el-tooltip>
        </el-row>
        <br><br>
        <el-button style="padding: 0 0 0 20px; background: #0F373F" type="text">
          <p style="color: #FFFFFF; font-weight: 600; font-size: 15px; margin: 0; text-align: left">
            <strong style="font-size: 20px">空气质量&天气：</strong><br><br>

            <span v-if="dayTemperature[0]">今日天气： {{
                dayTemperature[0].low + '-' +
                dayTemperature[0].high + '°C' + '&#12288;' + dayTemperature[0].weather
              }}；</span>
            <span v-if="dayTemperature[1]">明日天气： {{
                dayTemperature[1].low + '-' +
                dayTemperature[1].high + '°C' + '&#12288;' + dayTemperature[1].weather
              }}；</span> <br><br>
            <span v-if="nowWeather[0]">实时天气：
              {{ nowWeather[0].time }}： {{ nowWeather[0].temp + '°C' }}；
              {{ nowWeather[1].time }}： {{ nowWeather[1].temp + '°C' }}；
              {{ nowWeather[2].time }}： {{ nowWeather[2].temp + '°C' }}；
            </span><br><br>

            <span>空气质量： {{ airData.aqi }} {{ airData.quality }}；</span>
            <span>空气级别：{{ airData.aqiinfo.level }}；</span>
            <span>PM2.5：{{ airData.pm2_5 }}；</span>
            <span>PM10： {{ airData.pm10 }}；</span>
            <!--            二氧化硫： {{ airData.so2 }}-->
          </p>
        </el-button>
      </div>
    </el-main>
  </el-container>

</template>

<script>
import {GetWeather, SoilDatapage, WaterQualityPage} from "../../../network/output";
import WaterPage from "../../monitor/WaterQuality/waterPage";
import SoilData from "../../monitor/SoilData/SoilData";

export default {
  name: "environmentalTesting",
  components: {
    SoilData,
    WaterPage
  },
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
      soilList: {},
      daily: [],
      hourly: {},
      dayTemperature: [],

      nowWeather: []
    }
  },
  methods: {
    getWeather() {
      let city = "柳南区"
      GetWeather({city, showMessage: 1}).then(res => {
        this.airData = res.data.aqi;
        this.airData.aqiinfo = res.data.aqi.aqiinfo;
        this.daily = res.data.daily;
        this.hourly = res.data.hourly;
        let hour = new Date().getHours() + ":00";
        let index = 0;
        for (let i = 0; i < this.hourly.length; i++) {
          if (this.hourly[i].time === hour) {
            index = i
            break
          }
        }
        this.nowWeather = this.hourly.splice(index, 3)
        console.log(this.nowWeather)

        this.dayTemperature = this.daily.map((temperature) => {
          return {
            high: temperature.day.temphigh,
            low: temperature.night.templow,
            weather: temperature.day.weather,
            date: temperature.date,
          }
        })
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
