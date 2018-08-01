<template>
    <div class="footer">
        <div v-for="(item, index) in bottomNavData" :key="item.id" :class="{'item': true, 'on': currentIndex === index}" @click="toRouter(index)">{{item.name}}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            currentIndex: 0,
            bottomNavData: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '分类',
                    path: '/category'
                },
                {
                    name: '购物车',
                    path: '/shopcart'
                },
                {
                    name: '我的',
                    path: '/my'
                }
            ]
        }
    },
    methods: {
        /**
         * @param {index} Number 底部导航栏点击第几个
         * @desc 点击底部导航栏路由跳转以及
        */
        toRouter (index) {
            this.currentIndex = index
            this.$router.push({
                path: this.bottomNavData[index].path
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin background ($path) {
    background: url($path) no-repeat center 25%;
    background-size: 40px;
}
.footer {
    height: 100px;
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0px;
    .item {
        flex: 1;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        text-align: center;
        line-height: 160px;
        color: #888;
        font-size: 18px;
        &:nth-of-type(1) {
            @include background('../../assets/image/svg/footer_home1.svg');
        }
        &:nth-of-type(1).on {
            @include background('../../assets/image/svg/footer_home.svg');
            color: #ff6700;
        }
        &:nth-of-type(2) {
            @include background('../../assets/image/svg/footer_lei1.svg');
        }
        &:nth-of-type(2).on {
            @include background('../../assets/image/svg/footer_lei.svg');
            color: #ff6700;
        }
        &:nth-of-type(3) {
            @include background('../../assets/image/svg/footer_cart1.svg');
        }
        &:nth-of-type(3).on {
            @include background('../../assets/image/svg/footer_cart.svg');
            color: #ff6700;
        }
        &:nth-of-type(4) {
            @include background('../../assets/image/svg/footer_me1.svg');
        }
        &:nth-of-type(4).on {
            @include background('../../assets/image/svg/footer_me.svg');
            color: #ff6700;
        }
    }
}
</style>