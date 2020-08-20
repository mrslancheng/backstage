<template>
  <div class="qxgl" id="QXGL">
    <div class="dzqxglbox">
      <div class="left">
        <div class="titles">
          <i class="el-icon-s-operation"></i>
          部门列表
        </div>
        <div class="dzul">
          <ul>
            <li v-for="(item,index) in list" :class="{attr:index==active}" @click="addClassFun(index)">
              <div class="libox">
                <i class="el-icon-user"></i>{{item}}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="title">
          <i class="el-icon-collection-tag"></i>人员明细
        </div>
        <div class="dzMXbox">
          <ul>
            <li style="margin-bottom:0">
              <span class="txtName">姓名</span>
              <span class="txtxian">拥有权限</span>
            </li>
          </ul>
          <ul>
            <li v-for="item in peopleList">
              <div class="DZullibox">
                <span class="txtName">{{item.name}}</span>
                <el-checkbox-group v-model="item.checkList">
                  <el-checkbox label="在办案件"></el-checkbox>
                  <el-checkbox label="权限管理"></el-checkbox>
                  <el-checkbox label="系统日志"></el-checkbox>
                </el-checkbox-group>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="dzbtn">
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        list: ["全部", "办公室", "技术部", "后勤保障", "销售部", "财务部", "领导", "其它"],
        peopleList: [
          { name: "张三", checkList: ['在办案件'] },
          { name: "李四", checkList: ['在办案件'] },
          { name: "王五", checkList: ['在办案件'] },
          { name: "赵六", checkList: ['在办案件'] },
          { name: "刘能", checkList: ['在办案件'] },
          { name: "尼古拉斯", checkList: ['在办案件'] },
          { name: "Ceshi", checkList: ['在办案件'] },
          { name: "测试", checkList: ['在办案件'] },
          { name: "测试账号", checkList: ['在办案件'] },
          { name: "杨克多多", checkList: ['在办案件'] },
          { name: "赵六", checkList: ['在办案件'] },
          { name: "Ceshi", checkList: ['在办案件'] },
          { name: "测试", checkList: ['在办案件'] },
          { name: "测试账号", checkList: ['在办案件'] },
          { name: "杨克多多", checkList: ['在办案件'] },
        ]
      }
    },
    methods: {
      addClassFun: function (index) {
        this.active = index;
        $("ul li:first-child").removeClass('active');
      }
    },
    mounted() {
      //钩子函数--钩子函数是Windows消息处理机制的一部分,钩子的本质是一段用以处理系统消息的程序，通过系统调用，把它挂入系统

    }
  }
</script>
<style scoped>

</style>
