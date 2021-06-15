<template>
  <el-form label-width="100px">
    <el-form-item label="标题">
      <el-input
          v-model="rowData.title"
          placeholder="请输入标题"
          type="textarea"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="内容">
      <el-input
          v-model="rowData.content"
          :autosize="{ minRows: 5}"
          placeholder="请输入内容"
          type="textarea">
      </el-input>
    </el-form-item>
    <el-form-item style="text-align: right">
      <el-button plain type="danger">取消</el-button>
      <el-button plain type="primary" @click="submit()">{{ mode }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {AddAnnouncement, UpdateAnnouncement} from "../../network/output";

export default {
  name: "dialogAnnouncement",
  data() {
    return {}
  },
  methods: {
    updateAnnouncement() {
      let d = {};
      d.title = this.rowData.title;
      d.content = this.rowData.content;
      d.uuid = this.rowData.uuid;
      UpdateAnnouncement(d).then(res => {
        console.log(res)
      })
    },
    submit() {
      let c = this.mode;
      // console.log(d)
      if (c != "添加") {
        this.updateAnnouncement();
      } else {
        let d = {};
        d.title = this.rowData.title;
        d.content = this.rowData.content;
        AddAnnouncement(d).then(res => {
          console.log(res)
        })
      }
    },
  },
  mounted() {

  },
  props: ["rowData", "mode"],
}
</script>

<style scoped>

</style>