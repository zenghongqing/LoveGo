<template>
    <div class="header">
        <i class="iconfont icon-shangcheng"></i>
        <div class="search">
            <input type="text" class="input" placeholder="精选商品,有优惠">
        </div>
        <div class="cate"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    }
}
</script>
<style lang="scss" scoped>
.header {
    line-height: 30px;
    width: 100%;
    font-size: 14px;
    position: relative;
    display: flex;
    i {
        width: 30px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
        position: absolute;
        left: 15px;
        top: 10px;
        vertical-align: middle;
    }
    .search {
        height: 30px;
        width: 100%;
        display: inline-block;
        position: relative;
        margin: 10px 55px 0px 55px;
        .input {
            width: 100%;
            height: 100%;
            background: #eee;
            border-radius: 70px;
            text-indent: 40px;
        }
        &:after {
            content: '';
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            left: 15px;
            top: 8px;
            background: url('../../../assets/image/svg/search.svg') no-repeat;
            background-size: 100% 100%;
        }
    }
    .cate {
        width: 40px;
        height: 30px;
        position: absolute;
        right: 0;
        top: 10px;
        background: url('../../../assets/image/svg/footer_lei1.svg') no-repeat;
        background-size: 30px;
    }
}
</style>