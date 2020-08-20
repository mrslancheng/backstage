<template>
   <div class="DZError">
     <div class="error-page">
       <div class="error-code">
         4<span>0</span>4
       </div>
       <div class="error-desc">{{errorName}}</div>
       <div class="error-handle">
         <router-link to="/">
           <el-button type="primary" size="large">返回首页</el-button>
         </router-link>
         <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        data () {
            return {
                errorName: '啊哦~ 你所访问的页面不存在'
            }
        },
        methods: {
          goBack(){
            this.$router.go(-1);
          }

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
