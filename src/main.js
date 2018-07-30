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
