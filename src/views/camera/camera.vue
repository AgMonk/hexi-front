<template>
<el-container>
  <el-aside width="500px">

    <el-card class="box-card">
      <div v-for="(i, o) in indexCode" :key="o" class="text item">
        <span style="cursor: pointer;" @click="play()">{{ i.name }}</span>
      </div>
    </el-card>

  </el-aside>
  <el-main style="padding: 0">
    <hls-test :id="6" :src="playing" style="width: 800px"/>
  </el-main>
</el-container>
</template>

<script>
import {ArtemisCameraPage, getCameraUrl} from "../../network/output";
import hlsTest from "./hlsTest";

export default {
  name: "camera",
  components: {hlsTest},
  data() {
    return {
      id: '',
      indexList: [
        "7d7e627f5f78429795b64a09fb9c4024",
        "631f1ae020b74c89b2980e4b068d6b4f",
        "636f41a3f699483e89d4dfc59c9933b2",
        "68c20b3fa4e3410cbd07fd5227474f35",
        "45e0eb16003f43a1a7d881ee0a1e1001",
        "ed131bd09dcc46f492a506bf15a7b268"
      ],
      playing: "http://ivi.bupt.edu.cn/hls/cctv1.m3u8",
      src: [
        "http://ivi.bupt.edu.cn/hls/cctv1.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv2.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3.m3u8",
        // "http://ivi.bupt.edu.cn/hls/cctv4.m3u8",
        // "http://ivi.bupt.edu.cn/hls/cctv6.m3u8",
        // "http://ivi.bupt.edu.cn/hls/cctv7.m3u8",
      ],
      indexCode: [],
      data: [
        {
          "code": "0",
          "msg": "SUCCESS",
          "data": {
            "total": 3,
            "pageNo": 1,
            "pageSize": 1,
            "list": [
              {
                "belongIndexCode": "0c0c683b-91fb-4ad2-9fd4-802dc0bb3ffc",
                "indexCode": "636f41a3f699483e89d4dfc59c9933b2",
                "manufacturer": "hik",
                "name": "10栋北面",
                "regionIndexCode": "d8a5476e-25c0-4aa2-b7e3-db3788ba1f77",
              }
            ]
          }
        },
        {
          "code": "0",
          "msg": "SUCCESS",
          "data": {
            "total": 3,
            "pageNo": 1,
            "pageSize": 1,
            "list": [
              {
                "belongIndexCode": "0c0c683b-91fb-4ad2-9fd4-802dc0bb3ffc",
                "indexCode": "631f1ae020b74c89b2980e4b068d6b4f",
                "manufacturer": "hik",
                "name": "8栋西面通道",
                "regionIndexCode": "d8a5476e-25c0-4aa2-b7e3-db3788ba1f77",
              }
            ]
          }
        },
        {
          "code": "0",
          "msg": "SUCCESS",
          "data": {
            "total": 3,
            "pageNo": 1,
            "pageSize": 1,
            "list": [
              {
                "belongIndexCode": "0c0c683b-91fb-4ad2-9fd4-802dc0bb3ffc",
                "indexCode": "7d7e627f5f78429795b64a09fb9c4024",
                "manufacturer": "hik",
                "name": "13栋北面",
                "regionIndexCode": "d8a5476e-25c0-4aa2-b7e3-db3788ba1f77",
              }
            ]
          }
        },
      ],
    }
  },
  methods: {
    play() {
      this.playing = "http://ivi.bupt.edu.cn/hls/cctv3.m3u8"
    },
    cameraPage() {
      ArtemisCameraPage({showMessage: 1}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    cameraUrl() {
      getCameraUrl({id: "7d7e627f5f78429795b64a09fb9c4024"}).then(res => {
        console.log(res)
        for (let i = 0; i < this.data.length; i++) {
          this.indexCode.push({
                // code: this.data[i].data.list[0].indexCode,
                code: this.src,
                name: this.data[i].data.list[0].name,
              }
          )
        }
        console.log(this.indexCode)
      })
    }
  },
  mounted() {
    this.cameraPage();
    this.cameraUrl();
  },
}
</script>

<style scoped>

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}

</style>