<template>
  <el-tabs>
    <el-tab-pane label="补贴" name="">
      <el-container>
        <el-header>
          <!--          添加补贴弹窗-->
          <el-dialog
              :visible.sync="visible.updateVisible"
              title="添加补贴"
              width="30%">
            <el-form label-width="100px">
              <el-form-item label="补贴名称">
                <el-input v-model="subsidy.name"/>
              </el-form-item>
              <el-form-item label="补贴金额">
                <el-input v-model="subsidy.price"/>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button type="success" @click="addSubsidy">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <!--          修改补贴弹窗-->
          <el-dialog
              :visible.sync="visible.visible"
              title="修改补贴"
              width="30%">
            <el-form label-width="100px">
              <el-form-item label="补贴说明">
                <el-input v-model="afferent.name"/>
              </el-form-item>
              <el-form-item label="补贴金额">
                <el-input v-model="afferent.price"/>
              </el-form-item>
              <el-input v-if="false"/>
              <el-input v-if="false"/>
              <el-form-item style="text-align: right">
                <el-button @click="addsubsidy">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div style="text-align: right">
            <el-button plain type="success" @click="visible.updateVisible = true">添加补贴</el-button>
            <el-button plain type="primary" @click="up">修改补贴</el-button>
            <el-button plain type="danger">删除补贴</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table ref="multipleTable"
                    :data="subsidyData"
                    @select="select"
                    @select-all="selectAll"
                    @selection-change="change = $event">
            <el-table-column type="selection"></el-table-column>
            <el-table-column label="补贴" prop="name"></el-table-column>
            <el-table-column label="补贴金额" prop="price"></el-table-column>
            <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-tab-pane>

    <el-tab-pane label="专利" name="">
      <el-container>
        <el-header>
          <div style="text-align: right">
            <el-button plain type="success">新建专利</el-button>
            <el-button plain type="primary">修改专利</el-button>
            <el-button plain type="danger">删除专利</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table :data="patentData">
            <el-table-column label="专利名称" prop="name"></el-table-column>
            <el-table-column label="专利状态" prop="status"></el-table-column>
            <el-table-column label="专利类型	" prop="type"></el-table-column>
            <el-table-column label="专利内容" prop="description"></el-table-column>
            <!--        <el-table-column label="" prop=""></el-table-column>-->
          </el-table>
        </el-main>
      </el-container>
    </el-tab-pane>
    <el-tab-pane label="查询" name="">

    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {AddSubsidy, QueryPatentPage, QuerySubsidyPage} from "../../../network/output";
// import Subsidy from "./newcomponents/compony/subsidy";
export default {
  name: "compony",
  components: {},
  data() {
    return {
      visible: {
        updateVisible: false,
        visible: false,
      },
      subsidyData: undefined,
      patentData: undefined,
      paging: {
        page: 1,
        size: 1000,
        condition: {
          companyUuid: undefined,
        }
      },

      subsidy: {
        name: undefined,
        price: undefined,
        companyUuid: this.$route.query.id,
      },
      change: undefined,
      afferent: {
        name: undefined,
        price: undefined,
        companyUuid: undefined,
        uuid: undefined,
      },
    }
  },
  mounted() {
    this.queryPatent();
    this.querySubsidy();
  },
  methods: {
    addsubsidy() {
      // this.afferent.name = this.change[0].name
      AddSubsidy(this.afferent).then(res => {
        console.log(res)
      })
    },
    up() {
      this.visible.visible = true;
      this.afferent = this.change[0];
      console.log(this.afferent);
    },
    //查询跳转公司专利
    queryPatent() {
      this.paging.condition.companyUuid = this.$route.query.id;
      QueryPatentPage(this.paging).then(res => {
        let d = res.data;
        this.patentData = d.records;
        console.log(this.patentData)
      })
    },
    //查询跳转公司补贴
    querySubsidy() {
      this.paging.condition.companyUuid = this.$route.query.id;
      QuerySubsidyPage(this.paging).then(res => {
        let d = res.data;
        this.subsidyData = d.records;
        console.log(this.subsidyData)
      })
    },
    addSubsidy() {
      AddSubsidy(this.subsidy).then(res => {
        console.log(res)
      })
    },
    select(selection) {
      if (selection.length > 1) {
        let del_row = selection.shift()
        this.$refs.multipleTable.toggleRowSelection(del_row, false)
      }
    },
    selectAll(selection) {
      if (selection.length > 1) {
        selection.length = 1
      }
    },

  },

}
</script>

<style scoped>

</style>