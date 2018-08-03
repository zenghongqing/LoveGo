// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入状态管理store
import store from './store/state'
// 引入elmenent-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入淘宝可伸缩库
import 'lib-flexible/flexible'
/* 引入初始化样式库 */
import '@/assets/scss/reset.scss'
// 引入图片懒加载模块
import VueLazyLoad from 'vue-lazyload'
// 引入阿里字体图标
import '@/assets/iconfont/iconfont.css'
// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
Vue.use(VueAwesomeSwiper)
// 注册图片懒加载模块
Vue.use(VueLazyLoad, {
    loading: '../static/loading-bars.svg'
})
// 使用elementUI
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
