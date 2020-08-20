<template>
    <div class="sidebar" id="sidebar" :class="{'el-menu--collapse':collapse}">
      <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" unique-opened router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i><span slot="title">{{item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
</template>

<script>
  import bus from './bus';
  export default {
    data() {
      return {
        collapse: false,
        consumerOBJ:[],
        items: [
          {
            icon: 'el-icon-reading',
            index: 'index',
            title: '案件列表'
          },
          {
            icon: 'el-icon-setting',
            index: 'roles',
            title: '权限管理'
          },
          {
            icon: 'el-icon-monitor',
            index: 'journal',
            title: '系统日志'
          },
          {
            icon: 'el-icon-s-custom',
            index: 'userinform',
            title: '用户信息'
          },
          {
            icon: '',
            index: '404',
            title: '404'
          }

        ]
      }
    },
    mounted() {

    },
    computed:{
      onRoutes(){
//               console.log(this.$route)
        return this.$route.path.replace('/','');
      }
    },
    created(){
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
    })
    }
  }
</script>

<style scoped>

</style>
