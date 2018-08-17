<template>
    <div class="shopcart">
        <header>
            <i class="iconfont icon-fanhui back" @click="goBack"></i>
            <span>购物车</span>
            <i class="iconfont icon-gouwuche cart"></i>
        </header>
        <cross-line></cross-line>
        <div class="main">
            <div class="shop-item">
                <div class="top">
                    <input type="checkbox" :class="{'c-checkbox': true, 'c-checkbox-on': checked, 'c-checkbox-off': !checked}" :checked="checked" @click="toggle">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CrossLine from '@/components/cross-line/cross-line'
export default {
    data () {
        return {
            checked: false // 该商品是否被选中
        }
    },
    components: {
        CrossLine
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        },
        toggle () {
            this.checked = !this.checked
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins';
.shopcart {
    position: relative;
    header {
        height: 50px;
        line-height: 50px;
        width: 100%;
        text-align: center;
        @include onepx('bottom');
        span {
            height: 100%;
            width: 80%;
            display: inline-block;
            margin: 0 auto;
            font-size: 16px;
        }
    }
    .main {
        position: relative;
        .shop-item {
            padding: 0 10px;
            .top {
                height: 30px;
                line-height: 30px;
                .c-checkbox {
                    display: block;
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    background-color: #fff;
                    position: relative;
                    &:after {
                        content: '';
                        width: 28px;
                        height: 28px;
                        display: block;
                        position: absolute;
                        left: -4px;
                        top: -4px;
                        border-radius: 28px;
                        background-size: 28px 28px;
                        background-position: center center;
                        background-color: #fff;
                        background-repeat: no-repeat;
                    }
                }
                .c-checkbox-off {
                    &:after {
                        background-image: url('../../assets/image/c_checkbox_off.png');
                    }
                }
                .c-checkbox-on {
                    &:after {
                        background-image: url('../../assets/image/c_checkbox_on.png');
                    }
                }
            }
        }
    }
}
</style>
