# vue-project-admin

> 后台管理系统软件V1.0（使用的技术栈有：vue+element+bus总线）

## 项目截图

# 登录

![image](https://github.com/mrslancheng/vue-image/blob/master/login4.jpg) 

# 首页

![image](https://github.com/mrslancheng/vue-image/blob/master/index3.jpg)

# 赞赏
![image](https://github.com/mrslancheng/vue-image/blob/master/zs2.jpg)

# 前言

vue-project-admin项目一套多功能的后台管理模板，适用于90%以上的后台管理系统开发。基于Vuejs，使用Element-UI框架；可快速完成后台管理软件开发与二次开发。


# 项目文件说明

``` bash

build                 存放项目构建webpack相关代码
config                用于指定开发和打包中的静态资源路径，要压缩的文件类型，开发使用的端口号
dist                  用于存放项目打包后文件
node_modules          项目依赖文件库
src                   经常操作使用的文件夹
----assets            存放静态资源文件，包含CSS、JS、image、iconfont字体文件及其他类型资源文件
----component         放置通用模块组件，避免重复工作 
--------common        存放通用组件；如：页头、页尾、页面左边菜单
--------page          存放不通用的组件
----router            index.js放置路由设置文件
----App.vue           入口组件，page里的组件会被插入到此组件中 
----main.js           入口JS文件，影响全局，作用是引入全局使用的库、公共样式、方法、设置路由守卫等
static                静态资源文件夹，打包过程中不会改变此文件夹中的内容只会原样复制过去
index.html            本地打开的index页面
package.json          存放引用项目名称、版本号、作者、项目启动命令、依赖库文件版本等信息（注：不要更改）
package-lock.json     锁定安装时包的版本号，项目上传github时保证其它人在安装时依赖保持一致（注：不要更改）

```
# 安装步骤

``` bash
# git获取项目代码
 git clone https://github.com/mrslancheng/backstage.git

# 安装依赖
npm install

# 启动vue项目  //可以使用localhost:8080、http://192.168.1.1:8080两种方式打开
npm run dev

# 项目打包命令
npm run build
```

# 功能
``` bash
Element UI 
登录/注销 
窗口最大化
案件列表
权限管理
系统日志
用户信息
404
进度条插件
AXIOS
路由守卫
```
