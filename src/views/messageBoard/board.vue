<template>
  <el-container>
    <el-header>
      <h2>柳州天步科技智慧园留言板</h2>
    </el-header>
    <el-main style="width: 1200px;">
      <el-card>
        <h3>精选留言</h3>
        <div v-for="i in 4" :key="i">
          <hr>
          <h4 style="text-align: center">标题</h4>
          <span>
          Android实时投屏软件，此应用程序提供USB(或通过TCP/IP)连接的Android设备的显示和控制。它不需要任何root访问
          Android实时投屏软件，此应用程序提供USB(或通过TCP/IP)连接的Android设备的显示和控制。它不需要任何root访问
        </span><br>
          <p style="text-align: right">作者名</p>

        </div>
      </el-card>
      <br>
      <el-card>
        <el-row>
          <el-col :span="12"><h3>发表留言</h3></el-col>
          <el-col :span="12"><p style="text-align: right"></p></el-col>
        </el-row>
        <el-form label-width="50px">
          <el-form-item label="标题">
            <el-input clearable placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input :rows="7" clearable placeholder="请输入内容" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input clearable placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="text-align: right" type="primary">发表留言</el-button>
          </el-form-item>
        </el-form>
      </el-card>

    </el-main>
  </el-container>
</template>

<script>
import {addBoardMessage, getBoardMessage} from "../../network/output";

export default {
  name: "board",
  data() {
    return {
      AddBoardMessage: {
        content: "",
        author: "",
        subject: ""
      }
    }
  },
  methods: {
    visitorBoardMessage() {
      getBoardMessage({page: 1, size: 10}).then(res => {
        console.log(res)
      })
    },
    visitorAddBoardMessage() {
      addBoardMessage(this.AddBoardMessage).then(res => {
        console.log(res)
      })
    }

  },
  mounted() {
    this.visitorBoardMessage()
    // this.visitorAddBoardMessage()
  }
}
</script>

<style scoped>

</style>