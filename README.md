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

该项目一套多功能的后台管理模板，适用于85%的后台管理系统开发。基于VUE，使用Element-UI框架；可快速完成后台管理软件开发与二次开发。

# 功能

Element UI <br/>
登录/注销 <br/>
窗口最大化<br/>
案件列表<br/>
权限管理<br/>
系统日志<br/>
用户信息<br/>
404<br/>
进度条插件<br/>
AXIOS<br/>
路由守卫<br/>

# 项目文件说明

build  &nbsp;&nbsp;----------------- 存放项目构建webpack相关代码  <br/>
config ----------------- 用于指定开发和打包中的静态资源路径，要压缩的文件类型，开发使用的端口号<br/>
dist   &nbsp;&nbsp;&nbsp;&nbsp;----------------- 用于存放项目打包后文件<br/>
node_modules   &nbsp;------- 项目依赖文件库<br/>
src   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;----------------- 经常操作使用的文件夹<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;assets   &nbsp;&nbsp;------------- 放置静态资源文件，包含CSS、JS、image、iconfont字体文件及其他类型资源文件<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;component   -------- 放置通用模块组件，避免重复工作<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;router   ------------- &nbsp;index.js放置路由设置文件<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;App.vue   ----------- &nbsp;入口组件，page里的组件会被插入到此组件中<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;main.js    ------------- 入口JS文件，影响全局，作用是引入全局使用的库、公共样式、方法、设置路由守卫等<br/>
static   ------------------ 静态资源文件夹，打包过程中不会改变此文件夹中的内容只会原样复制过去<br/>
index.html   ------------ 本地打开的index页面<br/>
package.json   --------- &nbsp;存放引用项目名称、版本号、作者、项目启动命令、依赖库文件版本等信息（注：最好不要随意修改）<br/>
package-lock.json   ---- 锁定安装时包的版本号，项目上传github时保证其它人在安装时依赖保持一致（注：不要更改）<br/>


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
