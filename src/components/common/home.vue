<template>
  <div class="home" id="DZhomebox">
      <vSidebar></vSidebar>
      <div class="main-container" :class="{'content-collapse':collapse}">
        <vHead></vHead>
        <div class="content">
          <transition name="move" mode="out-in">
            <keep-alive :include="tagsList" >
              <router-view ></router-view>
            </keep-alive>
          </transition>
        </div>

    </div>
  </div>
</template>

<script>
  import vHead from './header.vue';
  import vSidebar from './Sidebar.vue';
  import bus from './bus';
  export default {
    data(){
      return {
        tagsList: [],
        collapse: false
      }
    },
    mounted: function () {


    },
    methods: {

    },
    created(){
      bus.$on('collapse', msg => {
        this.collapse = msg;
      })
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      bus.$on('tags', msg => {
        let arr = [];
      for(let i = 0, len = msg.length; i < len; i ++){
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    })
    },
    components:{
      vHead, vSidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
