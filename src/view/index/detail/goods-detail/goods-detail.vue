<template>
    <div class="goods-detail">
        <span>商品详情</span>
        <i class="iconfont icon-qianwang" @click="goToDetail"></i>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
        // 前往商品详情页
        goToDetail () {}
    }
}
</script>
<style lang="scss" scoped>
.goods-detail {
    min-height: 45px;
    padding: 0 13px;
    line-height: 45px;
    span {
        float: left;
    }
    i {
        float: right;
    }
}
</style>
