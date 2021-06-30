<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h3>公告栏</h3>
    </div>
    <div v-for="(text, i) in data" :key="i" style="height: 220px;">
      <h3 style="text-align: center; margin-top: 0; padding-top: 10px">{{ text.title }}</h3>
      <p style=" padding-left: 20px">{{ text.content }}</p>
      <p style=" padding-right: 20px; text-align: right">
        {{ text.author }}
        <br>
        {{ text.lastEdit.timeString }}
      </p>
    </div>
  </el-card>
</template>

<script>
import {AnnouncementPage} from "../../../network/output";

export default {
  name: "homeNotice",
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

.box-card {
  /*width: 500px;*/
}
</style>