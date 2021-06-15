<template>
  <el-container>
    <el-header><h1>公告栏</h1></el-header>
    <el-main>
      <div class="main">
        <div style="height: 210px;">
          <h3 style="text-align: center; color: #FFFFFF; margin-top: 0; padding-top: 10px">{{ data.title }}</h3>
          <p style="color: #FFFFFF; padding: 20px">{{ data.content }}</p>
        </div>

        <h3 style="text-align: center; color: #FFFFFF;">{{ data.title }}</h3>
        <p style="color: #FFFFFF; padding: 20px">{{ data.content }}</p>
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
        start: undefined,
        end: undefined
      },
      data: undefined,
    }
  },
  methods: {
    notice() {
      AnnouncementPage(this.paging).then(res => {
        console.log(res);
        this.data = res.data.records[0];
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

.main {
  background: #0F373F;
  height: 450px;
  width: 702.66px;
}
</style>