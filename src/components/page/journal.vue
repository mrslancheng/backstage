<template>
  <div class="xtrz" id="xtrz">
    <div class="DZsearch">
      <el-col :span="6" id="DZsearch">
        <el-input placeholder="请输入搜索关键字" v-model="search" >
          <template slot="append">
            <div @click="goSearchClick">
              <i class="el-icon-search" style="margin-right:6px;"></i>查询
            </div>
          </template>
        </el-input>
      </el-col>
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="IP"
        label="IP地址">
      </el-table-column>
      <el-table-column
        prop="JCY"
        label="检察院">
      </el-table-column>
      <el-table-column
        prop="AN"
        label="案件">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,15, 30, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="currentTotal"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
              search:"",
              pagesize:10,
              pageindex:1,
              currentPage: 1,
              currentTotal: 4,
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                IP: '192.168.1.129',
                JCY:"下城区检察院",
                AN:"张三贩毒案"
              }, {
                date: '2016-05-04',
                name: '王小虎',
                IP: '192.168.1.129',
                JCY:"滨江区检察院",
                AN:"张三贩毒案"
              }, {
                date: '2016-05-01',
                name: '王小虎',
                IP: '192.168.1.129',
                JCY:"拱墅区检察院",
                AN:"张三贩毒案"
              }, {
                date: '2016-05-03',
                name: '王小虎',
                IP: '192.168.1.129',
                JCY:"西湖区检察院",
                AN:"张三贩毒案"
              }]
            }
        },
        methods: {
          goSearchClick:function(){
            console.log(this.search)
          },
          handleSizeChange(val){
            var _this=this;
            _this.pageSize = val;

          },
          handleCurrentChange(val) {
            this.cur_page = val;
          }
        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
