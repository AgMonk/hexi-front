<template>
  <el-container>
    <el-header></el-header>
    <el-main>
      <!--      <el-button @click="addAnnouncement"></el-button>-->
      <el-table
          :data="article">
        <el-table-column type="expand">
          <template>
            <el-form class="demo-table-expand" inline label-position="left">
              <el-form-item label="内容">
                <!--                <span>{{ props.row.name }}</span>-->
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="作者" prop="author"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
        <el-table-column label="内容" prop="content"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import {AddAnnouncement, AnnouncementDel, AnnouncementPage, UpdateAnnouncement} from "../../network/output";

export default {
  name: "announcement",
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
        start: undefined,
        end: undefined
      },
      writeArticle: {
        title: "测试",
        content: "目前默认为“柳南区”，会每天6、18点自动更新该地区天气，如果使用该接口查询其他地区天气，会切换为自动更新该地区天气",
      },
      article: undefined,
    }
  },
  methods: {
    sub() {

    },
    announcementPage() {
      AnnouncementPage(this.paging).then(res => {
        this.article = res.data.records;
        let str = res.data.records;
        for (let i = 0; i < str.length; i++) {
          console.log(str[i].content)
        }
      })
    },
    addAnnouncement() {
      AddAnnouncement(this.writeArticle).then(res => {
        console.log(res)
      })
    },
    updateAnnouncement() {
      UpdateAnnouncement().then(res => {
        console.log(res)
      })
    },
    announcementDel() {
      AnnouncementDel().then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.announcementPage();
    this.sub()
  }
}
</script>

<style scoped>

</style>