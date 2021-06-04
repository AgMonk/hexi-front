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
                <el-input v-model="afferent.name"/>
              </el-form-item>
              <el-form-item label="补贴金额">
                <el-input v-model="afferent.price"/>
              </el-form-item>
              <el-input v-if="false" v-model="afferent.companyUuid"/>
              <el-input v-if="false" v-model="afferent.uuid"/>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="addsubsidy">添加</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div style="text-align: right">
            <el-button plain type="success" @click="visible.updateVisible = true">添加补贴</el-button>
            <el-button plain type="primary" @click="up">修改补贴</el-button>
            <el-button plain type="danger" @click="dele">删除补贴</el-button>
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
          <!--          添加专利弹窗-->
          <el-dialog :visible.sync="visible.addSubsidyVisible" title="添加专利"
                     width="30%">
            <el-form label-width="100px">
              <el-form-item label="专利名称">
                <el-input v-model="patent.name"/>
              </el-form-item>
              <el-form-item label="专利状态">
                <el-autocomplete
                    v-model="patent.status"
                    :fetch-suggestions="querySearch"
                    style="width: 100%"
                />
              </el-form-item>
              <el-form-item label="专利类型">
                <el-autocomplete
                    v-model="patent.type"
                    :fetch-suggestions="querySearch1"
                    style="width: 100%"/>
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
                <el-input v-model="editpatent.name"/>
              </el-form-item>
              <el-form-item label="专利状态">
                <el-input v-model="editpatent.status"/>
              </el-form-item>
              <el-form-item label="专利类型">
                <el-input v-model="editpatent.type"/>
              </el-form-item>
              <el-form-item label="专利内容">
                <el-input v-model="editpatent.description"/>
              </el-form-item>
              <el-form-item style="text-align: right">
                <el-button type="primary" @click="patentDialog">修改</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <div style="text-align: right">
            <el-button plain type="success" @click="visible.addSubsidyVisible = true">添加专利</el-button>
            <el-button plain type="primary" @click="editPatent">修改专利</el-button>
            <el-button plain type="danger" @click="delePatent">删除专利</el-button>
          </div>
        </el-header>
        <el-main>
          <el-table :data="patentData" @selection-change="patentchange = $event">>
            <el-table-column type="selection"></el-table-column>
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
// import Subsidy from "./newcomponents/compony/subsidy";
export default {
  name: "compony",
  components: {},
  data() {
    return {
      restaurants: [],
      restaurants1: [],

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
        size: 1000,
        condition: {
          companyUuid: undefined,
        }
      },

      patent: {
        name: undefined,
        description: undefined,
        status: undefined,
        type: undefined,
        companyUuid: undefined,
      },
      editpatent: {
        uuid: undefined,
        name: undefined,
        description: undefined,
        status: undefined,
        type: undefined,
        companyUuid: undefined,
      },
      subsidy: {
        name: undefined,
        price: undefined,
        companyUuid: this.$route.query.id,
      },
      afferent: {
        name: undefined,
        price: undefined,
        companyUuid: undefined,
        uuid: undefined,
      },

      change: undefined,
      patentchange: undefined,
    }
  },
  mounted() {
    this.queryPatent();
    this.querySubsidy();
    this.restaurants = this.loadAll();
    this.restaurants1 = this.loadAll1();
  },
  methods: {
    querySearch1(queryString, cb) {
      let restaurants = this.restaurants1;
      let results = queryString ? restaurants.filter(this.createFilter1(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter1(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll1() {
      return [
        {"value": "外观结构专利"},
        {"value": "著作权"},
        {"value": "发明专利"},
        {"value": "实用新型专利"},
      ];
    },
    querySearch(queryString, cb) {
      let restaurants = this.restaurants;
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        {"value": "申请"},
        {"value": "待续费"},
        {"value": "实审"},
        {"value": "有效"},
      ];
    },

    delePatent() {
      let id = this.patentchange[0].uuid;
      deletePatent(id).then(res => {
        console.log(res);
        this.queryPatent();
      })
    },
    editPatent() {
      this.visible.editSubsidyVisible = true;
      this.editpatent = this.patentchange[0];
    },
    patentDialog() {
      UpdatePatent(this.editpatent).then(res => {
        console.log(res);

      })
    },
    addPatent() {
      this.patent.companyUuid = this.$route.query.id;
      AddPatent(this.patent).then(res => {
        console.log(res);
      })
    },

    dele() {
      let id = this.change[0].uuid;
      deleteSubsidy(id).then(res => {
        console.log(res);
        this.querySubsidy();
      })
    },
    addsubsidy() {
      // this.afferent.name = this.change[0].name
      UpdateSubsidy(this.afferent).then(res => {
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