<template>
  <div class="login-wrap">
        <div class="ms-login">
          <div class="ms-title">{{longinName}}</div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content ">
            <el-form-item prop="jcy" class="el-input--small">
              <treeselect :multiple="false"  :options="options" :normalizer="normalizer" placeholder="请选择检察院" v-model="jcy" />
            </el-form-item>
            <el-form-item prop="username" class="el-input--small">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" class="el-input--small">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
              </el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </div>
            <div style="font-size:13px;color:#fff;">
              咨询热线：0123-45678910<br>Copyright © 2020 XXXX科技有限公司
            </div>


          </el-form>
        </div>
  </div>
</template>

<script>
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'
  export default {
    components: {Treeselect},
    data () {
      return {

        ruleForm:{username:"",password:""},
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        jcy: null,
        options: [],
        remenber:true,
        longinName:window.gurl.loginName
      }

    },
    mounted: function () {



    },
    methods: {
      normalizer(node) {
        return {
          id: node.dwbm,
          label: node.dwmc,
          children: node.list
        }
      },
      submitForm(formName) {
        var _this=this;
        _this.$refs[formName].validate((valid) => {
          if (valid) {
            var object={};
            object.name=_this.ruleForm.username;
            object.password=_this.ruleForm.password;
            object.gender=0;
            object=JSON.stringify(object)
            var username= $.base64.encode(object,"UTF-8")
            localStorage.setItem('ms_username',username);
            _this.$router.push('/index');
          }
          else {
            _this.$message.error("登录失败，您输入的检察院、用户名或密码有误，请重新输入！");
            return false;
        }
      });
      },


    },

  }
</script>

<style scoped>


</style>
