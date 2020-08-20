<template>
  <div class="anlb" id="anlb">
    <div class="DZsearch">
      <el-col :span="6" id="DZsearch">
        <el-input placeholder="请输入搜索关键字" v-model="search">
          <template slot="append">
            <div @click="goSearchClick">
              <i class="el-icon-search" style="margin-right:6px;"></i>查询
            </div>
          </template>
        </el-input>
      </el-col>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" ></el-table-column>
      <el-table-column prop="AN" label="案件名称"></el-table-column>

      <el-table-column prop="JCY" label="承办部门"></el-table-column>
      <el-table-column prop="CBR" label="承办人"></el-table-column>
      <el-table-column label="操作" width="88">
        <template slot-scope="scope">
          <el-link :underline="false" @click="handleEdit(scope.$index, scope.row)" type="primary">下载</el-link>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹出框 -->
    <el-dialog title="下载" :visible.sync="editVisible" width="500px" id="tan-chu-kuang">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="下载原因">
          <el-input type="textarea" :rows="2" v-model="form.cause" style="width:100%"></el-input>
        </el-form-item>
        <el-form-item label="下载密码">
          <el-input v-model="form.password" style="width:100%"></el-input>
        </el-form-item>

        <el-form-item label="是否需要水印">
          <el-radio-group v-model="form.start">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="水印位置" v-if="form.start==1">
          <el-radio-group v-model="form.seat">
            <el-radio :label="1">全部</el-radio>
            <el-radio :label="2">页头</el-radio>
            <el-radio :label="3">主体</el-radio>
            <el-radio :label="4">页尾</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveEdit">确 定</el-button>
        <el-button @click="editVisible = false" class="dck_gb">关 闭</el-button>
      </span>
    </el-dialog>
    <iframe style="width:0px;display:none" id="iframefiledown" src="blank" ></iframe>
    <!--分页功能-->
    <div class="pagination">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="currentPage"
                     :page-sizes="[10,15, 30, 50, 100]"
                     :page-size="pagesize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="currentTotal"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        editVisible: false,
        search: "",
        form: { cause: '', password: '', start: 0, seat: ''},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          CBR: '张三',
          JCY:"下城区检察院",
          AN:"张三贩毒案"
        }, {
          date: '2016-05-04',
          name: '王小虎',
          CBR: '张三',
          JCY:"滨江区检察院",
          AN:"张三贩毒案"
        }, {
          date: '2016-05-01',
          name: '王小虎',
          CBR: '张三',
          JCY:"拱墅区检察院",
          AN:"张三贩毒案"
        }, {
          date: '2016-05-03',
          name: '王小虎',
          CBR: '张三',
          JCY:"西湖区检察院",
          AN:"张三贩毒案"
        }],
        pagesize: 10,
        pageindex: 1,
        currentPage: 1,
        currentTotal: 4,
        jobNumber:"",
        bmsah:""
      }
    },

    methods: {

      handleEdit(index, row) {
        this.editVisible = true;
        this.bmsah=row.bmsah;
      },
      saveEdit() {

//         form: { cause: '', password: '', start: 0, seat: '' },
        var _this=this;
        if(_this.form.cause==''){
          _this.$message.error("请输入下载原因");
          return;
        }else if(_this.form.password==''){
          _this.$message.error("请输入下载密码");
          return;
        }else if(_this.form.start==1){
          if(_this.form.seat==""||_this.form.seat==null){
            _this.$message.error("请选择水印位置");
            return;
          }
        }
        _this.editVisible = false;
        _this.goPDFClick();


      },
      goPDFClick:function(){

      },
      goSearchClick: function () {
        console.log(this.search)
      },
      handleSizeChange(val) {
        var _this = this;
        _this.pagesize = val;


      },
      handleCurrentChange(val) {
        var _this=this;
        _this.currentPage = val;

      }

    },
    mounted() {
      var _this=this;
      var username = localStorage.getItem('ms_username');
      username =$.base64.decode(username,"UTF-8");
      username = JSON.parse(username);
//      console.log(username)



    }

  }
</script>
<style scoped>

</style>
