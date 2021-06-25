<template>
  <div>
    <hls-test v-for="id in 4" :id="id" :key="id" :src="src[id - 1]"/>
  </div>
</template>

<script>
import HlsTest from "../camera/hlsTest";

export default {
  name: "test1",
  data() {
    return {
      src: [
        "http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8",
        "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8",
      ]
    }
  },
  components: {HlsTest},

  methods: {},
  mounted() {

  }
}
</script>

<style scoped>

</style>