<template>
  <el-tabs>
    <el-tab-pane label="补贴" name="">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="12">
              <el-form :inline="true">
                <el-form-item label="搜索补贴">
                  <el-input v-model="subsidyQuery.condition.name" placeholder="输入补贴名称"/>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="lookupSubsidy()">搜索</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right">
                <el-button v-if="$route.query.id" plain type="success" @click="visible.updateVisible = true">添加补贴
                </el-button>
                <el-button plain type="primary" @click="visible.visible = true">修改补贴</el-button>
                <el-button plain type="danger" @click="delSubsidy()">删除补贴</el-button>
              </div>
            </el-col>
          </el-row>
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

            <add-patent-dialog :uuid="$route.query.id" @success="visible.addSubsidyVisible = false; queryPatent()"/>
          </el-dialog>
          <!--          修改专利弹窗-->
          <el-dialog :visible.sync="visible.editSubsidyVisible" title="修改专利"
                     width="30%">

            <modify-patent-component :selectPatent="selectPatent"
                                     @success="visible.editSubsidyVisible = false; queryPatent()"/>
          </el-dialog>
          <el-row>
            <el-col :span="12">
              <el-form :inline="true">
                <el-form-item label="搜索专利">
                  <el-input v-model="patentQuery.condition.name" placeholder="输入专利名称"/>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="lookupPatent">搜索</el-button>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="12">
              <div style="text-align: right">
                <el-button v-if="$route.query.id" plain type="success" @click="visible.addSubsidyVisible = true">添加专利
                </el-button>
                <el-button plain type="primary" @click="visible.editSubsidyVisible = true;">修改专利</el-button>
                <el-button plain type="danger" @click="delePatent">删除专利</el-button>
              </div>

            </el-col>
          </el-row>

        </el-header>
        <el-main>
          <el-table :data="patentData" @select="select1"
                    @selection-change="patentChange"
                    @select-all="selectAll1"
          >
            <el-table-column label="专利名称" prop="name"></el-table-column>
            <el-table-column label="专利状态" prop="status"></el-table-column>
            <el-table-column label="专利类型	" prop="type"></el-table-column>
            <el-table-column label="专利内容" prop="description"></el-table-column>
            <el-table-column label="专利号" prop="id"></el-table-column>
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
  </el-tabs>
</template>
<script>
import {
  AddSubsidy,
  deletePatent,
  deleteSubsidy,
  QueryPatentPage,
  QuerySubsidyPage,
  UpdateSubsidy
} from "../../../network/output";
import {copyObj} from "../../../common/utils";
import AddPatentDialog from "../../../components/patentComponent/addPatentDialog";
import ModifyPatentComponent from "../../../components/patentComponent/modifyPatentComponent";

export default {
  name: "compony",
  components: {ModifyPatentComponent, AddPatentDialog},
  data() {
    return {
      //查询专利
      patentQuery: {
        condition: {
          name: ''
        }
      },
      //查询补贴
      subsidyQuery: {
        condition: {
          name: ''
        }
      },
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
    //查询专利
    lookupPatent() {
      QueryPatentPage(this.patentQuery).then(res => {
        console.log(res)
        let d = res.data;
        this.patentData = d.records;
        this.patentTotal = res.data.total;
      })
    },
    //查寻补贴
    lookupSubsidy() {
      QuerySubsidyPage(this.subsidyQuery).then(res => {
        console.log(res)
        let d = res.data;
        this.subsidyData = d.records;
        this.subsidyTotal = res.data.total
      })
    },

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
    select1(selection) {
      if (selection.length > 1) {
        let del_row = selection.shift()
        this.$refs.multipleTable.toggleRowSelection(del_row, false)
      }
    },
    selectAll1(selection) {
      if (selection.length > 1) {
        selection.length = 1
      }
    },

  },

}
</script>

<style scoped>

</style>