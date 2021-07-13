<template>
  <el-container>
    <el-header><h1>公告栏</h1></el-header>
    <el-main>
      <div class="main">
        <div v-for="(text, i) in data" :key="i" style="height: 220px;">
          <h2 style="text-align: center; color: #FFFFFF; margin-top: 0; padding-top: 10px;font-size: 28px ">
            {{ text.title }}</h2>
          <p style="color: #FFFFFF; padding-left: 20px; font-size: 24px">{{ text.content }}</p>
          <p style="color: #FFFFFF; padding-right: 20px; text-align: right; font-size: 22px">
            {{ text.author }}
            <br>
            {{ text.lastEdit.timeString }}
          </p>
        </div>

      </div>
    </el-main>
  </el-container>
</template>

<script>
import {AnnouncementPage} from "../../../network/output";

export default {
  name: "Notice",
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
        showMessage: 1,
        start: undefined,
        end: undefined
      },
      data: {},
    }
  },
  methods: {
    notice() {
      AnnouncementPage(this.paging).then(res => {
        this.data = res.data.records.splice(0, 2);

      }).catch(() => {
        this.notice()
      })
    }
  },
  mounted() {
    this.notice();
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  color: #FFFFFF;
  font-weight: 1000;
}

p {
  margin: 0;
}

.main {
  background: #0F373F;
  height: 450px;
  width: 702.66px;
}
</style>