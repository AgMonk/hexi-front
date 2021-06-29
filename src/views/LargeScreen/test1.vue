<template>
  <div class="box">
    <div class="column">
      <hls-test :id="1" :src="playing[0]" style="  width: 237.55px; height: 245px;"/>
      <hls-test :id="2" :src="playing[1]" style="  width: 237.55px; height: 245px;"/>
      <hls-test :id="3" :src="playing[1]" style="  width: 237.55px; height: 245px;"/>
    </div>
    <div class="column">
      <hls-test :id="4" :src="playing[1]" style="  width: 237.55px; height: 245px;"/>
      <hls-test :id="5" :src="playing[1]" style="  width: 237.55px; height: 245px;"/>
      <hls-test :id="6" :src="playing[1]" style="  width: 237.55px; height: 245px;"/>
    </div>
  </div>
</template>

<script>
import HlsTest from "../camera/hlsTest";

export default {
  name: "test1",
  components: {HlsTest},
  data() {
    return {
      src: [
        "http://ivi.bupt.edu.cn/hls/cctv1.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv2.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv4.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv6.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv7.m3u8",
      ],
      playing: [
        "http://ivi.bupt.edu.cn/hls/cctv1.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3.m3u8",
      ],
    }
  },
  methods: {},
  mounted() {
    setInterval(() => {
      let array = [];
      let index;
      for (let i = 0; i < this.playing.length; i++) {
        do {
          index = Math.floor(Math.random() * this.src.length);
        } while (array.includes(this.src[index]))
        array.push(this.src[index])
      }
      this.playing = array
      console.log(this.playing)
    }, 1000 * 60)
  }
}
</script>

<style scoped>

.box {
  background: #0F373F;
  width: 742.66px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}
</style>