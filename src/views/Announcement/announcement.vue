<template>
  <el-container>
    <el-header>

      <el-button plain style="float: right" type="primary" @click="addVisible = true; rowData= {}; mode= '添加'">添加公告
      </el-button>
    </el-header>
    <el-main>
      <!--      <el-button @click="addAnnouncement"></el-button>-->
      <el-table
          :data="article"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form class="demo-table-expand" inline label-position="left">
              <el-form-item label="内容：">
                <span>{{ props.row.content }}</span>
              </el-form-item>
              <br>
              <span style="float: right">
                <el-button plain type="primary" @click="rowData = props.row; visble(); mode ='修改' ">修改内容</el-button>
                <el-button plain type="danger" @click="id = props.row.uuid; announcementDel()">删除内容</el-button>
              </span>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="作者" prop="author"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="intercept"></el-table-column>
      </el-table>

    </el-main>
    <el-footer>
      <el-pagination
          :current-page.sync="paging.page"
          :page-size.sync="paging.size"
          :total="total"
          background
          layout="prev, pager, next,jumper"
          @current-change="announcementPage"
      >
      </el-pagination>
    </el-footer>
    <el-dialog
        :title="mode + '公告'"
        :visible.sync="addVisible"
    >
      <dialog-announcement :mode="mode" :rowData="rowData"/>
    </el-dialog>
    <!--    <el-dialog-->
    <!--        :visible.sync="addVisible"-->
    <!--        title="添加公告内容"-->
    <!--    >-->
    <!--      <dialog-announcement :rowData = "rowData"/>-->
    <!--    </el-dialog>-->
  </el-container>
</template>

<script>
import {AnnouncementDel, AnnouncementPage} from "../../network/output";
import DialogAnnouncement from "./dialogAnnouncement";

export default {
  name: "announcement",
  components: {DialogAnnouncement},
  data() {
    return {
      paging: {
        page: 1,
        size: 5,
        start: undefined,
        end: undefined
      },
      writeArticle: {
        title: "测试",
        content: undefined
      },
      article: undefined,
      total: undefined,
      addVisible: false,
      rowData: undefined,
      id: undefined,
      mode: "添加",
    }
  },
  methods: {
    visble() {
      this.addVisible = true;
      console.log(this.rowData);
    },
    announcementPage() {
      AnnouncementPage(this.paging).then(res => {
        this.article = res.data.records;
        this.total = res.data.total;
        let str = res.data.records;
        for (let i = 0; i < str.length; i++) {
          str[i].intercept = str[i].content.substring(0, 12) + "..."
        }
      })
    },
    announcementDel() {
      AnnouncementDel(this.id).then(res => {
        this.announcementPage();
        console.log(res)
      })
    }
  },
  mounted() {
    this.announcementPage();
  }
}
</script>

<style scoped>
</style>