
<template>
  <video ref="video" autoplay muted preload="auto" width="744.66px" height="572px" style="background: #0F373F"  v-loading="loading"></video>


</template>

<script>
import {Unicom} from "../../common/utils";
import {getCameraUrl} from "../../network/output";

let Hls = require('hls.js')
export default {
  name: "hlsTest",
  data() {
    return {
      hls: '',
      url: "http://192.168.0.220:83/openUrl/MTf7K5W/live.m3u8",
      loading: true,
    }
  },
  mounted() {
    this.getStream(this.url);
    Unicom.$on("videoIndex", res => {
      this.url = res;
      this.getStream(this.url);
    })
  },
  methods: {
    videoPause() {
      if (this.hls) {
        this.$refs.video.pause();
        this.hls.destroy();
        this.hls = null;
      }
    },
    getStream(id) {
        this.hls = new Hls();
        console.log(this.url)
      getCameraUrl({id,showMessage:1,streamType:0}).then(res=>{
        let url = res.data;
        this.hls.loadSource(url);
        this.hls.attachMedia(this.$refs.video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('加载成功1');
          this.loading = false;
          let playPromise = this.$refs.video.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              // console.log(res)
              this.$refs.video.play();
            }).catch(() => {
              // console.log(err)
            })
          }
        });
      })

        this.hls.on(Hls.Events.ERROR, () => {
          // console.log(event, data, '加载失败')
        });

    }
  },
  beforeDestroy() {
    this.videoPause();
  },
}
</script>

<style scoped>
video {
  object-fit: fill;
}
</style>