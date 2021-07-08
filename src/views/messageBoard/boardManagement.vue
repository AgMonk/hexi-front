<template>
  <el-container>
    <el-header><h2>留言管理</h2></el-header>
    <el-main>
      <hr>
      <el-row>
        <el-col :span="12">
          <h3 v-if="params.condition.visible === 1">已审核留言：</h3>
          <h3 v-if="params.condition.visible !== 1">未审核留言：</h3>
        </el-col>
        <el-col :span="12">
          <p style="text-align: right">
            <el-button type="primary" @click="boardMessageQuery(1)">已审核</el-button>
            <el-button type="success" @click="boardMessageQuery(0)">未审核</el-button>
          </p>
        </el-col>
      </el-row>

      <el-table :data="content">

        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form class="demo-table-expand" inline label-position="left">
              <el-form-item label="内容：">
                <span>{{ props.row.content }}</span><br>
                <!--              <span>{{props.row.uuid}}</span>-->
              </el-form-item>
              <br>
              <span style="float: right">
                <el-button plain type="primary" @click="changeVisibility(props.row.uuid)">展示</el-button>
                <el-button plain type="danger" @click="deleteBoardMessage(props.row.uuid)">删除</el-button>
              </span>
            </el-form>
          </template>
        </el-table-column>

        <el-table-column label="标题" prop="subject"></el-table-column>
        <el-table-column label="作者" prop="author"></el-table-column>
        <el-table-column label="内容" prop="intercept"></el-table-column>
        <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
        <el-table-column label="状态" prop="status"></el-table-column>
      </el-table>
      <el-pagination
          :current-page.sync="params.page"
          :page-size.sync="params.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="boardMessageQuery()"
      >
      </el-pagination>
    </el-main>
  </el-container>
</template>

<script>
import {boardMessagePage, BoardMessageVisible, delBoardMessage} from "../../network/output";

export default {
  name: "boardManagement",
  data() {
    return {
      params: {
        page: 1,
        size: 10,
        condition: {
          visible: 0
        }
      },
      content: []
    }
  },
  methods: {
    deleteBoardMessage(uuid) {
      delBoardMessage({id: uuid}).then(res => {
        console.log(res)
      })
    },
    boardMessageQuery(visible) {
      boardMessagePage(this.params, this.params.condition.visible = visible).then(res => {
        console.log(res, visible)
        this.content = res.data.records
        this.total = res.data.total;
        let str = res.data.records;
        for (let i = 0; i < str.length; i++) {
          str[i].intercept = str[i].content.substring(0, 12) + "..."
          str[i].status = str[i].visible ? "已审核" : "未审核"
        }
      })
    },
    changeVisibility(uuid) {
      BoardMessageVisible({id: uuid}).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.boardMessageQuery()
  }

}
</script>

<style scoped>

</style>