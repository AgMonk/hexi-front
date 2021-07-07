<template>
  <el-container>
    <el-header>

      <el-button><a href="api/Patent/downloadTemplate">专利导入模板</a></el-button>
      <el-button><a href="api/Patent/export">导出专利数据</a></el-button>
      <el-button type="text">
        <el-upload
            :on-success="handleAvatarSuccess"
            action="api/Patent/import"
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
        <el-table-column label="专利名称" prop="data.name"></el-table-column>
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
  name: "patentExport",
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
      if (res.code === 2000) {
        this.$message({
          message: res.message,
          type: 'success'
        })
      }
      if (res.code !== 2000) {
        this.$message.error({
          message: res.message
        })

      }

    }
  }
}
</script>

<style scoped>

</style>