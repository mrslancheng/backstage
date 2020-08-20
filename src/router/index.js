import Vue from 'vue';
import Router from 'vue-router';

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/index.vue'], resolve),
          meta: { title: '案件列表' }
        },
        {
          path: '/roles',
          component: resolve => require(['../components/page/roles.vue'], resolve),
          meta: { title: '权限管理' }
        },
        {
          path: '/journal',
          component: resolve => require(['../components/page/journal.vue'], resolve),
          meta: { title: '系统日志' }
        },
        {
          path: '/404',
          component: resolve => require(['../components/page/404.vue'], resolve),
          meta: { title: '404' }
        },
        {
          path: '/userinform',
            component: resolve => require(['../components/page/userinform.vue'], resolve),
          meta: { title: '用户信息' }
        }

      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/login.vue'], resolve)
    }

  ]
})

