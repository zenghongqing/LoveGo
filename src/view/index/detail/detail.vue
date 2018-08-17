<template>
    <b-scroll-load-data ref="scrollRef" :pullup="true" :pulldown="true" class="scroll" :listenScroll="true" @scrollDistance="scrollDistance" @hideGoToTop="hideGoToTop">
        <div class="detail">
            <header>
                <i class="iconfont icon-fanhui back" @click="goBack"></i>
                <span>商品详情</span>
                <i class="iconfont icon-gouwuche cart"></i>
            </header>
            <swiper :options="detailImgOptions">
                <swiper-slide v-for="item in picList" :key="item.id">
                    <a href="javascript;void(0);" class="pic">
                        <img :src="item" alt="">
                    </a>
                </swiper-slide>
            </swiper>
            <section class="detail-desc">
                <div class="text-wrap">
                    村上春树全新旅行随笔，在焦虑的时代像村上一样享受人生，发现一个温暖有趣的世界
                </div>
                <div class="item-desc">青春正能量 文艺每满100减50</div>
                <div class="price"><i class="iconfont icon-renminbifuhao"></i>49.00</div>
            </section>
            <cross-line></cross-line>
            <section class="desination">
                <span>送至</span>
                <p class="area">广东省深圳市南山区软件产业基地</p>
                <span>运费</span>
                <p class="fee">运费6元，满49包邮</p>
            </section>
            <cross-line></cross-line>
            <goods-detail></goods-detail>
            <cross-line></cross-line>
            <section class="nums">
                <span class="title">数量</span>
                <cart-control :count="count" @getDecNum="getDecCount" @getAddNum="getAddCount"></cart-control>
            </section>
            <cross-line></cross-line>
            <div class="rating">
                <header>
                    <h3>商品评价</h3>
                    <span class="good-rating">好评 99%</span>
                </header>
                <rating-select :ratingsMsg="ratingsMsg" :selectType="selectType" :onlyContent="onlyContent" @select="select" @switchContent="switchContent"></rating-select>
            </div>
        </div>
        <buy-collect-component :num="count"></buy-collect-component>
        <go-to-top v-show="isShowGoTop" @goToTop="goToTop"></go-to-top>
    </b-scroll-load-data>
</template>
<script>
import CrossLine from '@/components/cross-line/cross-line'
import CartControl from '@/components/cart-control/cart-control'
import RatingSelect from './rating-select/rating-select'
import GoodsDetail from './goods-detail/goods-detail'
import BScrollLoadData from '@/components/better-scroll/scroll'
import GoToTop from '@/components/go-to-top/go-to-top'
import BuyCollectComponent from '@/components/buy-collect/buy-collect'
export default {
    data () {
        return {
            picList: [
                'http://img3m0.ddimg.cn/45/1/25265340-1_e_15401.jpg',
                'http://img3m0.ddimg.cn/45/1/25265340-2_e_15861.jpg',
                'http://img3m0.ddimg.cn/45/1/25265340-3_e_15938.jpg',
                'http://img3m0.ddimg.cn/45/1/25265340-5_e_3.jpg',
                'http://img3m0.ddimg.cn/45/1/25265340-6_e_3.jpg'
            ],
            detailImgOptions: {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                },
                effect: 'cubic',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                }
            },
            selectType: 2, // 选择评价的种类
            onlyContent: true,
            isShowGoTop: false, // 是否显示滑动到顶部的图标
            ratingsMsg: {
                all: 1111,
                positive: 1100,
                negtive: 11,
                ratings: [
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    },
                    {
                        username: 'j***9',
                        starSize: 24,
                        score: 4.8,
                        date: '2018-06-03',
                        content: '裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。'
                    }
                ]
            },
            count: 0 // 选择购买的数量
        }
    },
    components: {
        CrossLine,
        CartControl,
        RatingSelect,
        GoodsDetail,
        BScrollLoadData,
        GoToTop,
        BuyCollectComponent
    },
    methods: {
        getDecCount (flag) {
            if (flag) {
                this.count--
            }
        },
        getAddCount (flag) {
            if (flag) {
                this.count++
            }
        },
        // 选择评价的种类
        select (type) {
            this.selectType = type
        },
        // 切换内容
        switchContent (onlyContent) {
            this.onlyContent = !onlyContent
        },
        // 返回首页
        goBack () {
            this.$router.go(-1)
        },
        scrollDistance (pos) {
            // 获取屏幕高度
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            console.log(Math.abs(pos.y), clientHeight - 60, Math.abs(pos.y) > clientHeight - 60, 'top')
            if (Math.abs(pos.y) > clientHeight / 2) {
                this.isShowGoTop = true
            }
        },
        hideGoToTop () {
            this.isShowGoTop = false
        },
        goToTop () {
            console.log(111)
            this.$refs.scrollRef.scrollTo(0, 0, 500)
            this.isShowGoTop = false
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/mixins';
.detail {
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
    .swiper-container {
        height: 300px;
        width: 100%;
        padding: 10px 0;
        a {
            display: block;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .detail-desc {
        background: #fff;
        padding: 10px 15px;
        @include onepx('top');
        position: relative;
        .text-wrap {
            font-size: 14px;
            color: #333;
            text-align: left;
            font-weight: 600;
            width: 90%;
        }
        .item-desc {
            color: $red;
            text-align: left;
            line-height: 18px;
            font-size: 12px;
            font-weight: bold;
        }
        .price {
            color: $red;
            font-weight: bold;
            text-align: left;
            font-size: 18px;
            i {
                font-size: 12px;
            }
        }
    }
    .desination {
        position: relative;
        padding: 13px 0px 12px;
        span {
            width: 35px;
            display: inline-block;
            color: #999;
            height: 30px;
            font-size: 14px;
            margin-right: 10px;
        }
        .area, .fee {
            text-align: left;
            font-size: 14px;
            font-weight: 400;
            display: inline-block;
            width: 80%;
        }
    }
    .nums {
        height: 50px;
        position: relative;
        padding: 0 16px;
        overflow: hidden;
        .title {
            float: left;
            width: 50px;
            line-height: 50px;
            height: 100%;
            text-align: left;
        }
    }
    .rating {
        position: relative;
        header {
            min-height: 45px;
            width: 100%;
            @include onepx('bottom');
            h3 {
                float: left;
                margin-left: 13px;
            }
            .good-rating {
                float: left;
                width: 20%;
                margin-left: 10px;
                font-size: 13px;
                color: $red;
                font-weight: bold;
            }
        }
    }
}
</style>
