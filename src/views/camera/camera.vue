<template>
    <video
        id="my-video"
        class="video-js vjs-default-skin"
        controls
        preload="auto"
        muted
    >
      <source src="" type="application/x-mpegURL" />
    </video>
</template>

<script>
import { getCameraUrl} from "../../network/output";
import videojs from "video.js";
import "videojs-contrib-hls";
export default {
  name: "camera",
  data() {
    return {
    }
  },
  methods: {

    getVideo() {
      videojs(
          "my-video",
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
  created() {
    let id = this.id;
    console.log(this.id)
    getCameraUrl(id).then(res => {
      let myPlayer = videojs("my-video");
      myPlayer.src([
        {
          type: "application/x-mpegURL",
          src: res.data,
        }
      ]);
      myPlayer.play();
    })
  },
  mounted() {
    this.getVideo();
  },
  updated() {
    this.$refs.videos.play()
  },
  props: [
    "id",
  ],
}
</script>

<style scoped>

</style>