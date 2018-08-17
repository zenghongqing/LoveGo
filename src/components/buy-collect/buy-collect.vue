<template>
    <div class="buy-select">
        <div class="select">
            <i :class="['iconfont', isSelected ?'icon-shoucang':'icon-emptyheart']" @click="selected"></i>
            <span class="text">收藏</span>
        </div>
        <div class="buy">
            <i class="iconfont icon-gouwuche1"></i>
            <span class="num" v-if="num">{{num}}</span>
            <span class="text">购物车</span>
        </div>
        <div class="btns">
            <button class="btn">加入购物车</button>
            <button class="btn">直接购买</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isSelected: false // 是否收藏
        }
    },
    props: {
        num: {
            type: Number,
            default: 0
        }
    },
    methods: {
        selected () {
            this.isSelected = !this.isSelected
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-select {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    line-height: 55px;
    background: #fff;
    .select, .buy {
        float: left;
        width: 20%;
        height: 100%;
        position: relative;
        i {
            display: block;
            height: 15px;
        }
        &.buy {
            .num {
                position: absolute;
                left: 54%;
                top: 10px;
                color: #fff;
                font-size: 10px;
                font-weight: 700;
                background: #e4393c;
                display: block;
                height: 16px;
                width: 16px;
                line-height: 16px;
                border-radius: 10px;
            }
        }
    }
    .btns {
        height: 100%;
        width: 60%;
        float: left;
        .btn {
            height: 100%;
            width: 50%;
            float: left;
            color: #fff;
            font-weight: 700;
            &:nth-of-type(1) {
                background-color: #ff9600;
            }
            &:nth-of-type(2) {
                background-color: #e4393c;
            }
        }
    }
}
</style>
