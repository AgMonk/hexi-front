<template>
  <el-container style="position:relative; left: 20%">
    <el-header>
      <h2>柳州天步科技智慧园留言板</h2>
    </el-header>
    <el-main style="width: 60%;">
      <el-card>
        <h3>精选留言</h3>
        <div v-for="(article, index) in content" :key="index">
          <hr>
          <h4 style="text-align: center">{{ article.subject }}</h4>
          <span>
          {{ article.content }}
        </span><br>
          <p style="text-align: right">作者：{{ article.author }} <br> 发布时间：{{ article.timestamp.timeString }}</p>

        </div>

        <el-pagination
            :current-page.sync="params.page"
            :page-size.sync="params.size"
            :total="total"
            background
            layout="prev, pager, next,jumper"
            @current-change="visitorBoardMessage()"
        >
        </el-pagination>
      </el-card>
      <br>
      <el-card>
        <el-row>
          <el-col :span="12"><h3>发表留言</h3></el-col>
          <el-col :span="12"><p style="text-align: right"></p></el-col>
        </el-row>
        <el-form label-width="50px">
          <el-form-item label="标题">
            <el-input v-model="AddBoardMessage.subject" clearable placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input v-model="AddBoardMessage.content" :rows="7" clearable placeholder="请输入内容"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="AddBoardMessage.author" clearable placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="text-align: right" type="primary" @click="visitorAddBoardMessage(); ">发表留言</el-button>
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
      },
      params: {
        page: 1,
        size: 5
      },
      total: 0,
      content: {}
    }
  },
  methods: {
    visitorBoardMessage() {
      getBoardMessage(this.params).then(res => {
        console.log(res)
        this.content = res.data.records
        this.total = res.data.total
      })
    },
    visitorAddBoardMessage() {
      addBoardMessage(this.AddBoardMessage).then(res => {
        console.log(res)
        this.AddBoardMessage = {}
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