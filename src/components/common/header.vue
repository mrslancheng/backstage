<template>
  <div class="heads" >
    <div class="heads-icon">
      <i class=" iconstr" :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="collapseChage"></i>
    </div>
    <div class="headsTxt">
      <span>{{titleName}}&nbsp;</span>
    </div>
    <div class="heads-right">
      <div class="flexs">
        <div class="padrt10 btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-full-screen" ></i>

          </el-tooltip>
        </div>
        <div class="user-avator">
          <router-link to="/userinform" >
            <img src="../../assets/image/tou2.jpg" alt="">

          </router-link>

        </div>
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}} <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="#" target="_blank">
              <el-dropdown-item>关于我们</el-dropdown-item>
            </a>
            <a href="#" target="_blank">
              <el-dropdown-item>消息中心</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div ref="indexImportOrder" @closeMain="closeMain"></div>
  </div>
</template>
<script>
  import bus from './bus';
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        tagsList: [],
        titleName: "",
        name:"穆上",
        gender:"",
        reFresh:true

      }
    },
    computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        username =$.base64.decode(username,"UTF-8");
        username=JSON.parse(username);
        this.gender=username.gender;
        var signname=username.name;
        return signname ? signname : this.name;
      }

    },

    created() {
      this.setTags(this.$route);

    },
    methods: {
      closeMain(val){
        this.gender = val;
      },
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ms_username');
          this.$router.push('/login');
        }
      },
      // 侧边栏折叠
      collapseChage() {
        this.collapse = !this.collapse;
        bus.$emit('collapse', this.collapse);

      },
      setTags(route) {
        const isExist = this.tagsList.some(item => {
            return item.path === route.fullPath;
      })
        if (!isExist) {
          var object = {};
          object.titles = route.query.name;
          object.title = route.meta.title;
          object.path = route.fullPath;
          object.name = route.matched[1].components.default.name;
          this.titleName = object.title;

        }
        bus.$emit('tags', this.tagsList);
      },
      checkFull(){
        //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
        //火狐浏览器
        var isFull = document.mozFullScreen ||
          document.fullScreen ||
            //谷歌浏览器及Webkit内核浏览器
          document.webkitIsFullScreen ||
          document.webkitRequestFullScreen ||
          document.mozRequestFullScreen ||
          document.msFullscreenEnabled
        if (isFull === undefined) {
          isFull = false
        }
        return isFull;
      },
      // 全屏事件
      handleFullScreen(){
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      }
    },
    mounted() {

    },
    created(){
      let _this = this;
      _this.setTags(_this.$route);
      window.onresize = function(){
        if(!_this.checkFull()){
          // 退出全屏后要执行的动作
          _this.fullscreen = false;
        }
      }

    }


  }
</script>
<style scoped>

</style>
