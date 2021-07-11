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
                <el-button type="primary" @click="addSubsidy">添加</el-button>
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
                <el-input v-model="selectSubsidy.name" :rows="2" type="textarea"/>
              </el-form-item>
              <el-form-item label="补贴金额">
                <el-input v-model="selectSubsidy.price"/>
              </el-form-item>
              <el-input v-if="false" v-model="selectSubsidy.companyUuid"/>
              <el-input v-if="false" v-model="selectSubsidy.uuid"/>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="addsubsidy">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div style="text-align: right">
            <el-button v-if="$route.query.id" plain type="success" @click="visible.updateVisible = true">添加补贴
            </el-button>
            <el-button plain type="primary" @click="visible.visible = true">修改补贴</el-button>
            <el-button plain type="danger" @click="delSubsidy()">删除补贴</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table ref="multipleTable"
                    :data="subsidyData"
                    @select="select"
                    @select-all="selectAll"
                    @selection-change="selects">
            <el-table-column label="补贴" prop="name"></el-table-column>
            <el-table-column label="补贴金额" prop="price"></el-table-column>
            <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
            <el-table-column type="selection"></el-table-column>
          </el-table>
          <el-pagination
              :current-page.sync="paging.page"
              :page-size.sync="paging.size"
              :total="subsidyTotal"
              background
              layout="prev, pager, next,jumper"
              @current-change="querySubsidy"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-tab-pane>

    <el-tab-pane label="专利" name="">
      <el-container>
        <el-header>
          <!--          添加专利弹窗-->
          <el-dialog :visible.sync="visible.addSubsidyVisible" title="添加专利"
                     width="30%">
            <el-form label-width="100px">
              <el-form-item label="专利名称">
                <el-input v-model="patent.name"/>
              </el-form-item>
              <el-form-item label="专利状态">

                <el-select v-model="patent.status" style="width: 100%">
                  <el-option value="申请"></el-option>
                  <el-option value="待续费"></el-option>
                  <el-option value="实审"></el-option>
                  <el-option value="有效"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="专利类型">
                <el-select v-model="patent.type" style="width: 100%">
                  <el-option value="著作权"></el-option>
                  <el-option value="外观结构专利"></el-option>
                  <el-option value="发明专利"></el-option>
                  <el-option value="实用新型专利"></el-option>

                </el-select>
              </el-form-item>
              <el-form-item label="专利内容">
                <el-input v-model="patent.description" autosize type="textarea"/>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button @click="patent = {}">清空</el-button>
                <el-button type="primary" @click="addPatent">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <!--          修改专利弹窗-->
          <el-dialog :visible.sync="visible.editSubsidyVisible" title="修改专利"
                     width="30%">
            <el-form label-width="100px">
              <el-form-item label="专利名称">
                <el-input v-model="selectPatent.name"/>
              </el-form-item>
              <el-form-item label="专利状态">
                <el-input v-model="selectPatent.status"/>
              </el-form-item>
              <el-form-item label="专利类型">
                <el-input v-model="selectPatent.type"/>
              </el-form-item>
              <el-form-item label="专利内容">
                <el-input v-model="selectPatent.description" :rows="2" type="textarea"/>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="patentDialog">修改</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div style="text-align: right">
            <el-button v-if="$route.query.id" plain type="success" @click="visible.addSubsidyVisible = true">添加专利
            </el-button>
            <el-button plain type="primary" @click="visible.editSubsidyVisible = true;">修改专利</el-button>
            <el-button plain type="danger" @click="delePatent">删除专利</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table :data="patentData" @selection-change="patentChange">
            <el-table-column label="专利名称" prop="name"></el-table-column>
            <el-table-column label="专利状态" prop="status"></el-table-column>
            <el-table-column label="专利类型	" prop="type"></el-table-column>
            <el-table-column label="专利内容" prop="description"></el-table-column>
            <el-table-column type="selection"></el-table-column>
          </el-table>
          <el-pagination
              :current-page.sync="paging.page"
              :page-size.sync="paging.size"
              :total="patentTotal"
              background
              layout="prev, pager, next,jumper"
              @current-change="queryPatent"
          >
          </el-pagination>
        </el-main>
      </el-container>
    </el-tab-pane>
    <el-tab-pane label="公司" name="">
      <hatch-compony/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {
  AddPatent,
  AddSubsidy,
  deletePatent,
  deleteSubsidy,
  QueryPatentPage,
  QuerySubsidyPage,
  UpdatePatent,
  UpdateSubsidy
} from "../../../network/output";
import {copyObj} from "../../../common/utils";
import HatchCompony from "./hatchCompony";

export default {
  name: "compony",
  components: {HatchCompony},
  data() {
    return {
      visible: {
        updateVisible: false,
        visible: false,
        addSubsidyVisible: false,
        editSubsidyVisible: false,
      },
      subsidyData: undefined,
      patentData: undefined,
      paging: {
        page: 1,
        size: 20,
        condition: {
          companyUuid: undefined,
        },
      },
      patentTotal: null,
      subsidyTotal: null,
      patent: {
        companyUuid: undefined,
      },
      subsidy: {
        companyUuid: this.$route.query.id,
      },
      selectPatent: {},
      selectSubsidy: {},
    }
  },
  mounted() {
    this.queryPatent();
    this.querySubsidy();
  },
  methods: {
    //选择补贴
    selects(e) {
      console.log(e)
      this.selectSubsidy = copyObj(e[0], {})
    },
    //选择专利
    patentChange(e) {
      console.log(e)
      this.selectPatent = e[0] ? copyObj(e[0]) : {};
    },
    delePatent() {
      deletePatent(this.selectPatent.uuid).then(res => {
        if (res.code === 2000) {
          this.queryPatent();
        }
      })
    },
    patentDialog() {
      UpdatePatent(this.selectPatent).then(res => {
        console.log(res);
        if (res.code === 2000) {
          this.queryPatent();
          this.visible.editSubsidyVisible = false;
        }
      })
    },
    //添加专利
    addPatent() {
      this.patent.companyUuid = this.$route.query.id;
      AddPatent(this.patent).then(res => {
        console.log(res);
        if (res.code === 2000) {
          this.queryPatent();
          this.visible.addSubsidyVisible = false;
          this.patent = {};
        }
      })
    },
    //删除补贴
    delSubsidy() {
      deleteSubsidy(this.selectSubsidy.uuid).then(res => {
        console.log(res)
        if (res.code === 2000) {
          this.querySubsidy();
        }
      })
    },
    //修改补贴
    addsubsidy() {
      UpdateSubsidy(this.selectSubsidy).then(res => {
        console.log(res)
        if (res.code === 2000) {
          this.querySubsidy();
          this.visible.visible = false;
        }
      })
    },
    //查询跳转公司专利
    queryPatent() {
      this.paging.condition.companyUuid = this.$route.query.id;
      QueryPatentPage(this.paging).then(res => {
        let d = res.data;
        this.patentData = d.records;
        this.patentTotal = res.data.total;
        console.log(res)
      })
    },
    //查询跳转公司补贴
    querySubsidy() {
      this.paging.condition.companyUuid = this.$route.query.id;
      QuerySubsidyPage(this.paging).then(res => {
        let d = res.data;
        this.subsidyData = d.records;
        this.subsidyTotal = res.data.total;
        console.log(this.subsidyData)
      })
    },
    addSubsidy() {
      AddSubsidy(this.subsidy).then(res => {
        console.log(res)
        if (res.code === 2000) {
          this.subsidy.price = undefined,
              this.subsidy.name = undefined,
              this.querySubsidy();
          this.visible.updateVisible = false;
        }
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