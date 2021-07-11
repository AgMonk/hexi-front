<template>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-row>
        <el-col :span="12"><h3>查询角色列表</h3></el-col>
        <el-col :span="12">
          <el-button style="float: right" type="primary" @click="dialogVisible.add = true; roleFromData  = {} ">新增角色
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="text item">
      <el-table :data="userLists">
        <!-- 下拉框 -->
        <el-table-column label="权限" type="expand">
          <template slot-scope="scope">
            <el-table :data="scope.row.permissions">
              <el-table-column label="备注" prop="remark"/>
              <el-table-column label="权限字符串">
                <template slot-scope="scope">
                  {{ scope.row.namespace }}:{{ scope.row.action }}:{{ scope.row.target }}
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="英文名称" prop="name"></el-table-column>
        <el-table-column label="中文名称" prop="nickname"></el-table-column>
        <el-table-column>
          <template slot-scope="del">
            <el-button type="primary" @click="roleFromData = del.row; dialogVisible.edit = true; ">修改角色</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="del">
            <el-button type="danger" @click="dele(del.row.id);">删除角色</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
        :current-page.sync="param.page"
        :page-size.sync="param.size"
        :total="total"
        layout="prev, pager, next, jumper"
        @current-change="queryRole">
    </el-pagination>

    <el-dialog title="添加角色" :visible.sync="dialogVisible.add" width="40%">
      <role-from :data="roleFromData" @success="dialogVisible.add = false; queryRole()"/>
    </el-dialog>
    <el-dialog title="修改角色" :visible.sync="dialogVisible.edit" width="40%">
      <role-from :data="roleFromData" @success="dialogVisible.edit = false; queryRole()"/>
    </el-dialog>

  </el-card>
</template>

<script>
import roleFrom from "../../../../components/from/roleFrom";
import {QueryRole, UserDel} from "../../../../network/output";

export default {
  name: "Permission",
  components: {
    roleFrom,
  },
  data() {
    return {
      param: {
        page: 1,
        size: 5,
      },
      userLists: [],
      dialogVisible: {
        add: false,
        edit: false,
      },
      roleFromData: {},
      total: null,
    }
  },
  methods: {
    queryRole() {
      QueryRole(this.param).then(res => {
        this.userLists = res.data.records;
        this.total = res.data.total;
      })
    },
    dele(id) {
      this.$confirm("确定删除？").then(() => {
        UserDel(id).then(() => {
        })
      }).catch(() => {})
      .then(() => this.queryRole())
    },
  },
  mounted() {
    this.queryRole();
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>