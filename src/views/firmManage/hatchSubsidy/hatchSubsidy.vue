<template>
  <el-container>
    <el-header>
      <el-button @click="visible = true;">添加补贴</el-button>
      <el-dialog
          :visible.sync="visible"
          title="添加补贴"
          width="30%">
        <SubsidyFrom/>
      </el-dialog>
      <el-dialog
          :visible.sync="updateVisible"
          title="修改补贴"
          width="30%">
        <update-subsidy :updateSubsidy="updateSubsidy"/>
      </el-dialog>
    </el-header>
    <el-main>
      <el-table :data="subsidyData">
        <el-table-column label="补贴" prop="name"></el-table-column>
        <el-table-column label="补贴金额" prop="price"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click=" updateSubsidy = scope.row; updateVisible = true; ">
              修改
            </el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button @click="del(scope.row.uuid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
          :current-page.sync="paging.page"
          :page-size.sync="paging.size"
          :total="1000"
          background
          layout="prev, pager, next,jumper"
      >
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import {deleteCompony, QuerySubsidyPage} from "../../../network/output";
import SubsidyFrom from "./SubsidyFrom";
import updateSubsidy from "./updateSubsidy";

export default {
  components: {
    SubsidyFrom,
    updateSubsidy,
  },
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
      },
      subsidyData: [],
      componyLoading: true,
      visible: false,
      updateVisible: false,
      updateSubsidy: {},
    }
  },
  created() {
    this.querySubsidy();
  },

  methods: {

    querySubsidy() {
      QuerySubsidyPage(this.paging).then(res => {
        let d = res.data;
        this.subsidyData = d.records;
        console.log(this.subsidyData)
      })
    },
    del(id) {
      deleteCompony(id).then(res => {
        console.log(res, id);
      })
    },
    update() {
      // console.log(this.updateCompony)
    }
  }
}
</script>

<style scoped>

</style>