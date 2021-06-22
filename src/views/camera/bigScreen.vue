<template>
  <video
      id="big"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      muted
      autoplay
      width="744.66px"
      height="572px"
  >
    <source src="" type="application/x-mpegURL" />
  </video>
</template>

<script>
import {getCameraUrl} from "../../network/output";
import videojs from "video.js";
import "videojs-contrib-hls";
export default {
  name: "bigScreen",
  methods: {
    getVideo() {
      videojs(
          "big",
          {
            bigPlayButton: false,
            textTrackDisplay: false,
            posterImage: true,
            errorDisplay: false,
            controlBar: true
          },
          function() {
            this.play();
          }
      );
    },
  },
  mounted() {
    getCameraUrl("0dda9cfaa2904764a77beb31db6c4678").then(res=>{
      let myPlayer = videojs("big");
      myPlayer.src([
        {
          type: "application/x-mpegURL",
          src: res.data,
        }
      ]);
      myPlayer.play();
    })
  }
}
</script>

<style scoped>

</style>