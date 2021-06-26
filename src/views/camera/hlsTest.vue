<template>
<div>
  <video :ref="'video' + id" autoplay class="videoPlay" muted preload="auto"></video>
</div>
</template>

<script>
let Hls = require('hls.js')
export default {
  name: "hlsTest",
  data() {
    return {
      hls: '',
    }
  },
  mounted() {
    this.getStream(this.src);
  },
  methods: {
    videoPause() {
      if (this.hls) {
        this.$refs[`video${this.id}`].pause();
        this.hls.destroy();
        this.hls = null;
      }
    },
    getStream(src) {
      if (Hls.isSupported()) {
        this.hls = new Hls();
        this.hls.loadSource(src);
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
  beforeDestroy() {
    this.videoPause();
  },
  props: ['id', 'src']
}
</script>

<style scoped>

.videoPlay {
  width: 237.55px;
  height: 250px;
}
</style>