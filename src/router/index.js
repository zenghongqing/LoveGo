import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载,代码分割
// 首页
const Index = r => require.ensure([], () => r(require('@/view/index/index')), 'index')
const IndexHome = r => require.ensure([], () => r(require('@/view/index/home/home')), 'home')
// 分类
const Category = r => require.ensure([], () => r(require('@/view/category/category')), 'category')
// 购物车
const ShopCart = r => require.ensure([], () => r(require('@/view/shopcart/shopcart')), 'shopcart')
// 我的
const My = r => require.ensure([], () => r(require('@/view/my/my')), 'my')
// 首页中的推荐
const Recommend = r => require.ensure([], () => r(require('@/view/index/performance/recommend/recommend')), 'recommend')
Vue.use(Router)
const routes = [
    {// 首页
        path: '/home',
        name: 'home',
        component: IndexHome,
        children: [
            {
                path: '/',
                component: Index
            },
            {
                path: 'recommend',
                component: Recommend
            }
        ]
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
    },
    {
        // 推荐
        path: '/recommend',
        component: Recommend
    }
]
const router = new Router({
    // 采用history路由模式
    mode: 'history',
    routes
})
// router.beforeEach(() => {})
export default router