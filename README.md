## LOVE-GO简介
实现一个购物商城，基本功能包括:注册、登录、商品展示、订单和购物车、分类搜索、会员、定位、支付、评论等功能。
### 技术选型:
前端(webpack+vue+sass+axios+vuex+vue-router+elementUI+eslint+PWA)<br>
服务端(koa2+mongoose)

部署: 阿里云/腾讯云 + deploy(编译源码) + cdn + pm2 + docker

### 目录结构
\| - README<br>
\| - build<br>
...
\| - src<br>
 &nbsp;&nbsp;&nbsp;&nbsp;--- App.vue<br>
 &nbsp;&nbsp;&nbsp;&nbsp;--- api  接入后端服务的api<br>
 &nbsp;&nbsp;&nbsp;&nbsp;--- assets (iconfonts,webp,png,scss)<br>
 &nbsp;&nbsp;&nbsp;&nbsp;--- components 组件(所有组件)<br>
&nbsp;&nbsp;&nbsp;&nbsp;--- main.js vue入口文件<br>
&nbsp;&nbsp;&nbsp;&nbsp;--- router 路由<br>
&nbsp;&nbsp;&nbsp;&nbsp;--- store (modules状态管理)<br>
&nbsp;&nbsp;&nbsp;&nbsp;--- util (通用函数) <br>
&nbsp;&nbsp;&nbsp;&nbsp;--- plugins (通用的插件)<br>
&nbsp;&nbsp;&nbsp;&nbsp;--- view (各个页面)

-static (静态文件)<br>
-test

### 项目工程化的生命周期
<img src="./recycle.jpeg">



