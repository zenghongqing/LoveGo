<template>
    <div class="shopcart">
        <header>
            <i class="iconfont icon-fanhui back" @click="goBack"></i>
            <span>购物车</span>
            <i class="iconfont icon-gouwuche cart"></i>
        </header>
        <cross-line></cross-line>
        <div class="main" v-for="(item, index) in shopcartList" :key="item.id">
            <div class="shop-item">
                <div class="top">
                    <input type="checkbox" :class="{'c-checkbox': true, 'c-checkbox-on': item.checked, 'c-checkbox-off': !item.checked}" :checked="item.checked" @click="toggle(index)">
                    <div class="shop-title">
                        <span>LoveGo</span>
                        <i class="iconfont icon-qianwang"></i>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="left">
                    <input type="checkbox" :class="{'c-checkbox': true, 'c-checkbox-on': item.checked, 'c-checkbox-off': !item.checked}" :checked="item.checked" @click="toggle(index)">
                </div>
                <div class="middle">
                    <img :src="item.imgSrc">
                </div>
                <div class="right">
                    <p class="desc">
                        {{item.desc}}
                    </p>
                    <div class="img">
                        <img :src="item.adImgSrc">
                    </div>
                    <div class="price">
                        <i class="iconfont icon-renminbifuhao"></i>
                        <span>{{item.price}}</span>
                    </div>
                </div>
                <cart-control class="control" :idx="index" :count="item.count" @getDecNum="getDecCount" @getAddNum="getAddCount"></cart-control>
            </div>
            <el-alert title="不可再减少" type="warning" show-icon v-show="item.isShow"></el-alert>
        </div>
        <div class="total">
            <div class="select-all">
                <input type="checkbox" :class="{'c-checkbox': true, 'c-checkbox-on': isAllSelected, 'c-checkbox-off': !isAllSelected}" :checked="isAllSelected" @click="toggleAll">
                <label>全选</label>
            </div>
            <div class="price">
                <span class="title">合计:</span>
                <i class="iconfont icon-renminbifuhao">{{allMoney}}</i>
                <button class="pay" @click="goPay">结算({{allMoney}})</button>
            </div>
        </div>
    </div>
</template>
<script>
import CrossLine from '@/components/cross-line/cross-line'
import CartControl from '@/components/cart-control/cart-control'
export default {
    data () {
        return {
            checked: false, // 该商品是否被选中
            count: 0, // 选择的数量
            isAllSelected: false,
            allChecked: false,
            shopcartList: [
                {
                    checked: false,
                    imgSrc: 'https://gw.alicdn.com/bao/uploaded/i4/725677994/TB24vyjnCcqBKNjSZFgXXX_kXXa_!!725677994-0-sm.jpg_200x200q50s150.jpg_.webp',
                    desc: '三只松鼠 坚果组合305g夏威夷果185g开口甘栗120g',
                    adImgSrc: '//gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png',
                    count: 2,
                    price: 89.24
                },
                {
                    checked: false,
                    imgSrc: 'https://gw.alicdn.com/bao/uploaded/i4/725677994/TB24vyjnCcqBKNjSZFgXXX_kXXa_!!725677994-0-sm.jpg_200x200q50s150.jpg_.webp',
                    desc: '三只松鼠 坚果组合305g夏威夷果185g开口甘栗120g',
                    adImgSrc: '//gw.alicdn.com/tfs/TB10WFoJH9YBuNjy0FgXXcxcXXa-405-72.png',
                    count: 1,
                    price: 55.24
                }
            ]
        }
    },
    components: {
        CrossLine,
        CartControl
    },
    watch: {
    },
    computed: {
        // 被选中的数量
        checkedNum () {
            let num = 0
            for (let i = 0; i < this.shopcartList.length; i++) {
                if (this.shopcartList[i].count) {
                    num++
                }
            }
            return num
        },
        // 总价
        allMoney () {
            let total = 0
            for (let i = 0; i < this.shopcartList.length; i++) {
                if (this.shopcartList[i].price && this.shopcartList[i].count && this.shopcartList[i].checked) {
                    total += this.shopcartList[i].price * this.shopcartList[i].count
                }
            }
            return Math.floor(total * 100) / 100
        }
    },
    created () {
        this.updateCheckStatus()
    },
    methods: {
        // 更新选种商品的状态
        updateCheckStatus () {
            let num = 0
            for (let i = 0; i < this.shopcartList.length; i++) {
                if (this.shopcartList[i].count) {
                    num++
                    this.shopcartList[i].checked = true
                }
            }
            this.isAllSelected = num === this.shopcartList.length
        },
        // 设置全选或全不选
        setAllCheckStatus (status) {
            for (let i = 0; i < this.shopcartList.length; i++) {
                this.shopcartList[i].checked = status
            }
        },
        goBack () {
            this.$router.go(-1)
        },
        toggle (index) {
            this.shopcartList[index].checked = !this.shopcartList[index].checked
            this.$nextTick(() => {
                let oneCart = this.shopcartList.filter(item => {
                    return item.checked === false
                })
                // 如果有一个没选中，则取消全选，如果全都选择，则选中全选
                if (oneCart.length) {
                    this.isAllSelected = false
                } else {
                    this.isAllSelected = true
                }
            })
        },
        toggleAll () {
            this.isAllSelected = !this.isAllSelected
            this.setAllCheckStatus(this.isAllSelected)
        },
        /**
         * @description 获取选择某一个商品的数量
         * @flag {Boolean} 是否大于1
         * @idx {Number} 第几件商品
        */
        getDecCount (flag, idx) {
            if (flag) {
                this.shopcartList[idx].count--
                this.$set(this.shopcartList[idx], 'isShow', false)
            } else {
                this.$set(this.shopcartList[idx], 'isShow', (this.shopcartList[idx].count) === 1)
            }
            this.updateCheckStatus()
        },
        getAddCount (flag, idx) {
            if (flag) {
                this.shopcartList[idx].count++
            }
            this.$set(this.shopcartList[idx], 'isShow', false)
            this.updateCheckStatus()
        },
        goPay () {}
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins';
.c-checkbox {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    // visibility: hidden;
    &:after {
        content: '';
        width: 24px;
        height: 24px;
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        border-radius: 24px;
        background-size: 24px 24px;
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
        @include onepx('bottom');
        .shop-item {
            padding: 0 10px;
            .top {
                height: 50px;
                width: 100%;
                line-height: 50px;
                position: relative;
                @include onepx('bottom');
                .shop-title {
                    position: absolute;
                    left: 15%;
                    span {
                        font-size: 14px;
                    }
                    i {
                        padding-left: 15px;
                    }
                }
            }
        }
        .content {
            position: relative;
            height: 100px;
            width: 100%;
            padding: 8px 0;
            .left {
                height: 100%;
                width: 12%;
                float: left;
                .c-checkbox {
                    left: 10px;
                }
            }
            .middle {
                float: left;
                height: 100%;
                width: 100px;
                img {
                    width: 100px;
                    height: 100px;
                }
            }
            .right {
                width: 200px;
                float: left;
                position: relative;
                .desc {
                    text-align: left;
                    margin-left: 10px;
                }
                .img {
                    width: 60px;
                    height: 10px;
                    margin: 4px 0 0 10px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .price {
                float: left;
                margin: 6px 0 0 10px;
                width: 100%;
                height: 24px;
                i {
                    float: left;
                    color: $red;
                }
                span {
                        color: $red;
                        float: left;
                        line-height: 24px;
                        font-size: 16px;
                        font-weight: 700;
                    }
                }
            }
        }
        .control {
            position: absolute;
            width: 80px;
            height: 40px;
            right: 10px;
            bottom: 4px;
            z-index: 2;
        }
    }
    .total {
        position: fixed;
        bottom: 0;
        display: flex;
        height: 45px;
        width: 100%;
        line-height: 45px;
        border-top: 1px solid rgba(7, 17, 27, 0.1);
        z-index: 100;
        .select-all {
            flex: 1;
            .c-checkbox {
                &:after {
                    padding-left: 15px;
                }
                label {
                    flex: 1;
                    font-size: 14px;
                }
            }
        }
        .price {
            flex: 2;
            .title {
                color: #000;
                font-size: 14px;
            }
            i, .money {
                color: #f50;
            }
            .pay {
                height: 100%;
                width: 100px;
                background: #f50;
                color: #fff;
                float: right;
            }
        }
    }
}
</style>
