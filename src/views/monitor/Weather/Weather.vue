<template>
  <div style=" height: 300px; width: 500px; border-radius: 5px;">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>空气质量数据</span>
      </div>
      <div class="text item">
        <p>
          空气质量： {{ airData.aqi }} {{ airData.quality }}<br>
          级别：{{ airData.aqiinfo.level }}<br>
          PM2.5：{{ airData.pm2_5 }}<br>
          PM10： {{ airData.pm10 }}<br>
          二氧化硫： {{ airData.so2 }}<br>
          {{ airData.aqiinfo.measure }}<br>
          {{ airData.aqiinfo.affect }}<br>
          {{ airData.timepoint }}<br>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import {GetWeather} from "../../../network/output";

export default {
  name: "Weather",
  data() {
    return {
      airData: {
        aqiinfo: {}
      },
    }
  },
  methods: {
    getWeather() {
      let city = "柳州"
      GetWeather({city,}).then(res => {
        this.airData = res.data.aqi;
        this.airData.aqiinfo = res.data.aqi.aqiinfo;

        // console.log(this.airData);
        // console.log(res)
      })
    },
  },
  mounted() {
    this.getWeather();
  }
}
</script>
<style scoped>
.box-card {
  height: 300px;
  width: 500px;
  border-radius: 5px;
}
</style>