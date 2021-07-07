<template>
  <el-container>
    <el-header>

      <el-button><a href="api/Subsidy/downloadTemplate">补贴导入模板</a></el-button>
      <el-button><a href="api/Subsidy/export">导出补贴数据</a></el-button>
      <el-button type="text">
        <el-upload
            :on-success="handleAvatarSuccess"
            action="api/Subsidy/import"
            multiple>
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-button>

    </el-header>
    <el-main>
      <h3>成功上传数：{{ complete.length }}</h3>
      <hr>
      <h3>上传失败数：</h3>
      <el-table :data="failures">
        <el-table-column label="补贴名称" prop="data.name"></el-table-column>
        <el-table-column label="位置" prop="index"></el-table-column>
        <el-table-column label="错误信息" prop="errors"></el-table-column>
      </el-table>

    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "subsidyExport",
  data() {
    return {
      complete: [],
      failures: []
    }
  },
  methods: {
    handleAvatarSuccess(res) {
      this.complete = res.data.success
      console.log(res)
      console.log(this.complete)
      this.failures = res.data.failures
    }
  }
}
</script>

<style scoped>

</style>