import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载,代码分割
// 首页
const Index = r => require.ensure([], () => r(require('@/view/index/index')), 'index')
// 分类
const Category = r => require.ensure([], () => r(require('@/view/category/category')), 'category')
// 购物车
const ShopCart = r => require.ensure([], () => r(require('@/view/shopcart/shopcart')), 'shopcart')
// 我的
const My = r => require.ensure([], () => r(require('@/view/my/my')), 'my')
Vue.use(Router)
const routes = [
    {// 首页
        path: '/',
        name: 'index',
        component: Index
    },
    {// 分类
        path: '/category',
        name: 'category',
        component: Category
    },
    {// 购物车
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart
    },
    {// 我的
        path: '/my',
        name: 'my',
        component: My
    }
]
const router = new Router({
    // 采用history路由模式
    mode: 'history',
    routes
})
// router.beforeEach(() => {})
export default router