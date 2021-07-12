<template>
  <el-container>
    <el-main>
      <car-pack/>
      <h3>查询车辆</h3>
      <el-row>
        <el-form :inline="true" :model="paging">
          <el-form-item label="起止时间">
            <el-date-picker v-model="paging.start"
                            format="yyyy-MM-dd HH:mm"
                            placeholder="选择开始时间"
                            style="width: 180px"
                            type="datetime"
                            value-format="timestamp"/>
            <el-date-picker v-model="paging.end"
                            format="yyyy-MM-dd HH:mm"
                            placeholder="选择结束时间"
                            style="width: 180px"
                            type="datetime"
                            value-format="timestamp"/>
          </el-form-item>
          <el-form-item label="进/出">
            <el-select v-model="paging.condition.type" placeholder="可不选">
              <el-option label="进" value="IN"></el-option>
              <el-option label="出" value="OUT"></el-option>
              <el-option label="进/出" value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="牌照">
            <el-input v-model="paging.condition.plateNo" placeholder="可不填"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="barrierPage();">查询</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="car">
          <el-table-column label="车主" prop="owner"></el-table-column>
          <el-table-column label="车牌" prop="plateNo"></el-table-column>
          <el-table-column label="车辆" prop="carTypeName"></el-table-column>
          <el-table-column label="进出" prop="gateName"></el-table-column>
          <el-table-column label="进出口" prop="gateNo"></el-table-column>
          <el-table-column label="时间" prop="timestamp.timeString"></el-table-column>
          <el-table-column label="" prop="reason"></el-table-column>
        </el-table>
        <el-pagination
            :current-page.sync="paging.page"
            :page-size.sync="paging.size"
            :total="total"
            background
            layout="prev, pager, next,jumper"
            @current-change="barrierPage"
        >
        </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {BarrierPage, CarStatus} from "../../network/output";
import {copyObj} from "../../common/utils";
import CarPack from "./carPack";

export default {
  name: "barrierPage",
  components: {CarPack},
  data() {
    return {
      paging: {
        page: 1,
        size: 10,
        start: undefined,
        end: undefined,
        condition: {
          type: undefined,
          plateNo: undefined,
        }
      },
      car: undefined,
      total: undefined,
    }
  },
  mounted() {
    this.carStatus();
  },
  methods: {
    barrierPage() {
      let d = copyObj(this.paging);
      d.start /= 1000;
      d.end /= 1000;
      BarrierPage(d).then(res => {
        this.car = res.data.records;
        this.total = res.data.total;
        console.log(res);
      })
    },
    page() {
      BarrierPage(this.paging).then(res => {
        console.log(res)
      })
    },
    carStatus() {
      let day = 7;
      CarStatus(day).then(res => {
        console.log(res)
      })
    },
  },
}
</script>

<style scoped>

</style>