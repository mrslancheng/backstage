<template>
    <div class="YHXX">
      <div class="yhxxtx">
        <div class="Txt">头像：</div>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="yhxxgender">
          <div class="Txt">性别：</div>
          <template>
            <el-radio-group v-model="gender">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </template>
      </div>
      <div class="yhxxjj">
        <div class="Txt">简介：</div>
        <div style="width:80%;height:100%">
          <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>

      </div>
      <div class="primarybtn"><el-button type="primary" @click="gosubmit">保存</el-button></div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
              imageUrl: "",
              gender:0,
              textarea:"人生得意须尽欢，莫使金樽空对月。",
              username:{}
            }
        },

        methods: {
          handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          gosubmit(){
            this.username.gender=this.gender;
            var username=this.username;
            username=JSON.stringify(username)
            username= $.base64.encode(username,"UTF-8");
            localStorage.setItem('ms_username',username);
            this.$emit('closeMain',this.gender)
          }


        },
        mounted(){
          let username = localStorage.getItem('ms_username');
          username =$.base64.decode(username,"UTF-8");
          username=JSON.parse(username);
          this.username=username

        }
    }
</script>

<style scoped>


</style>
