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
  </video>

</template>

<script>
import {getCameraUrl} from "../../network/output";
import videojs from "video.js";
import "videojs-contrib-hls";
import {Unicom} from "../../common/utils";

export default {
  name: "bigScreen",
  data() {
    return {
      videoUrlList: "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8",
      myPlayer: undefined,
    }
  },
  methods: {
    // getVideo() {
    //   videojs(
    //       "big",
    //       {
    //         bigPlayButton: false,
    //         textTrackDisplay: false,
    //         posterImage: true,
    //         errorDisplay: false,
    //         controlBar: true
    //       },
    //       function() {
    //         this.play();
    //       }
    //   );
    // },
    playTheVideo() {
      getCameraUrl("0dda9cfaa2904764a77beb31db6c4678").then(() => {
        this.myPlayer = videojs("big");
        this.myPlayer.src(
            {
              type: "application/x-mpegURL",
              src: this.videoUrlList,
            }
        );
      });
    },
  },
  mounted() {
    this.playTheVideo();
    Unicom.$on("videoIndex", res => {
      this.myPlayer.reset();
      this.videoUrlList = res;
      this.playTheVideo();
    })
  },
}
</script>

<style scoped>

</style>