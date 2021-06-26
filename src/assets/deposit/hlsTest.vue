<template>
<div>
  <video ref="video" autoplay controls muted preload="auto" width="500px"></video>
</div>
</template>

<script>
let Hls = require('hls.js')
export default {
  name: "hlsTest",
  data() {
    return {
      hls: '',
      url: [
        "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/btv6hd.m3u8",
      ]
    }
  },
  mounted() {
    this.getStream(this.url[3]);
  },
  methods: {
    videoPause() {
      if (this.hls) {
        this.$refs.video.pause();
        this.hls.destroy();
        this.hls = null;
      }
    },
    getStream(source) {
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(source);
        this.hls.attachMedia(this.$refs.video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('加载成功');
          this.$refs.video.play();
        });
        this.hls.on(Hls.Events.ERROR, (event, data) => {
          console.log(event, data, '加载失败')
        });
      }
    }
  },
  beforeDestroy() {
    this.videoPause();
  }
}
</script>

<style scoped>

</style>