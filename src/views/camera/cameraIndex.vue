<template>
  <div class="videos">
    <div class="column">
      <video ref="video" autoplay class="videoPlay" controls muted preload="auto"/>
    </div>
    <div class="column">
      <video v-for="id in 3" :key="id" :ref="'video' + id" autoplay class="videoPlay" controls muted preload="auto"/>
    </div>
  </div>
</template>

<script>
// import {ArtemisCameraPage, getCameraUrl} from "../../network/output";
let Hls = require('hls.js')
export default {
  name: "cameraIndex",
  data() {
    return {
      id: null,
      testUrl: [
        "http://ivi.bupt.edu.cn/hls/cctv1.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv6.m3u8",
      ],
      hls: '',
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
      name: "",
      indexCode: [],
    }
  },
  methods: {
    videoPause() {
      if (this.hls) {
        this.$refs[`video${this.id}`].pause();
        this.hls.destroy();
        this.hls = null;
      }
    },
    getStream() {
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(this.testUrl[0]);
        this.hls.attachMedia(this.$refs[`video${this.id}`]);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('加载成功');
          let playPromise = this.$refs[`video${this.id}`].play();
          if (playPromise !== undefined) {
            playPromise.then(res => {
              console.log(res)
              this.$refs[`video${this.id}`].play();
            }).catch(err => {
              console.log(err)
            })
          }
        });
        this.hls.on(Hls.Events.ERROR, (event, data) => {
          console.log(event, data, '加载失败')
        });
      }
    }
  },
  mounted() {
    // ArtemisCameraPage({name: "111"}).then(res => {
    //   console.log(res)
    // }),
    // getCameraUrl({id:""}).then(res => {
    //   console.log(res)
    // })
    for (let i = 0; i < this.data.length; i++) {
      this.indexCode.push(
          this.data[i].data.list[0].indexCode
      )
    }
    // console.log(this.indexCode);

    this.getStream();
  },
  beforeDestroy() {
    this.videoPause();
  }
}
</script>

<style scoped>

.videos {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  height: 500px;
  width: 742.66px;
  background: #0F373F;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}

.videoPlay {
  width: 237.55px;
  height: 230px;
  background: #FFFFFF;
}
</style>