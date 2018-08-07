<template>
    <div class="second-kill">
        <div class="title">
            <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg">
            <a href="javascript:;" class="more">更多</a>
        </div>
        <div class="time">
            <span class="seckill-h">
                <span>0</span>
                <span>0</span>
            </span>
            <span class="seckill-h-text">时</span>
            <span class="seckill-m">
                <span>0</span>
                <span>0</span>
            </span>
            <span class="seckill-m-text">分</span>
            <span class="seckill-s">
                <span>0</span>
                <span>0</span>
            </span>
            <span class="seckill-s-text">秒</span>
        </div>
        <div class="second-kill-content">
            <swiper class="content" :options="secoKillOptions">
                <swiper-slide class="kill-item" v-for="(item) in secoKillList" :key="item.id">
                    <p class="pic"><img :src="item.imgSrc"></p>
                    <p class="name">
                        {{item.desc}}
                    </p>
                    <div class="price">
                        <p class="new-price">
                            <strong><em>¥</em>{{item.newPrice}}</strong>
                        </p>
                        <p class="origin-price">
                            <strong><em>¥</em>{{item.originPrice}}<hr></strong>
                        </p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            secoKillOptions: {
                direction: 'horizontal',
                slidesPerView: 4
            },
            secoKillList: [
                {
                    imgSrc: 'http://img3m7.ddimg.cn/71/13/1449556487-1_h_1.jpg',
                    desc: '8.7开抢限时秒杀_卤味零食大礼包】网红小吃休闲零食鸭肉类吃货一整箱',
                    newPrice: '1388',
                    originPrice: '1799'
                },
                {
                    imgSrc: 'http://img3m9.ddimg.cn/89/24/1172122469-1_h_1.jpg',
                    desc: '【每满99减60】美特斯邦威男装长袖t恤男士春季圆领纯色休闲ins针织恤青年潮流Y',
                    newPrice: '39',
                    originPrice: '1119'
                },
                {
                    imgSrc: 'http://img3m9.ddimg.cn/72/18/1073627649-1_h_3.jpg',
                    desc: '【夏末大促销！39元秒杀包邮！】乌龟先森 单鞋 女士夏季新款韩版单色尖头浅口绒面鞋女式时尚简约休闲舒适百搭鞋子',
                    newPrice: '139',
                    originPrice: '449.00'
                },
                {
                    imgSrc: 'http://img3m6.ddimg.cn/60/28/1446289476-1_h_1.jpg',
                    desc: '【限量40罐，秒完即止】汉馨堂 坚果水果燕麦片 冲调即食早餐冲饮谷物代餐干吃营养早餐粉果珍500g 坚果燕麦片 500g',
                    newPrice: '32',
                    originPrice: '45.90'
                },
                {
                    imgSrc: 'http://img3m9.ddimg.cn/53/6/1362713669-1_h_1.jpg',
                    desc: '【8.5-7日 满200减50 满400减100】 361男鞋夏季时尚亮色网面透气舒适防滑耐磨运动休闲跑鞋671732277',
                    newPrice: '69',
                    originPrice: '239.00'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/scss/mixins.scss';
.second-kill {
    width: 100%;
    position: relative;
    padding: 2px 0 6px 0;
    .title {
        width: 100%;
        height: 40px;
        img {
            width: 100%;
            height: 100%;
        }
        a {
            position: absolute;
            right: 0;
            top: 16px;
            width: 40px;
            height: 100%;
            line-height: 50%;
            overflow: hidden;
            text-indent: -1000px;
        }
    }
    .time {
        text-align: center;
        overflow: hidden;
        .seckill-h, .seckill-m, .seckill-s {
            display: inline-block;
            background: #000;
            border-radius: 5px;
            text-align: center;
            vertical-align: middle;
            height: 30px;
            padding: 0 2px;
            span {
                color:#fff;
                font-size: 14px;
                font-weight: bold;
                line-height: 30px;
                float: left;

            }
        }
        .seckill-s {
            background: $red;
        }
    }
    .second-kill-content {
        padding: 10px 0 0 8px;
        position: relative;
        .swiper-container {
            position: relative;
            width: 100%;
            .swiper-wrapper {
                height: 140px;
                // width: px;
                .swiper-slide{
                    width: 80px;
                    height: 100%;
                    float: left;
                    img {
                        width: 82px;
                        height: 94px;
                        display: block;
                    }
                    .name {
                        width: 80px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .price {
                        margin: 0 auto;
                        text-align: center;
                        .new-price, .origin-price {
                            // display: inline-block;
                            float: left;
                            line-height: 16px;
                            height: 16px;
                            width: 80px;
                            text-align: center;
                            font-weight: 700;
                            overflow: hidden;
                            strong {
                                em {
                                    font-size: 16px;
                                    font-style: normal;
                                }
                            }
                        }
                        .new-price {
                            color: #f23030;
                            font-size: 16px;
                            margin-top: 4px;
                            strong {
                                em {
                                    font-size: 12px;
                                    font-style: normal;
                                }
                            }
                        }
                        .origin-price {
                            font-size: 12px;
                            position: relative;
                            strong {
                                color: #666;
                                em {
                                    font-size: 12px;
                                    font-style: normal;
                                }
                                hr {
                                    position: absolute;
                                    left: 0;
                                    top: 8px;
                                    width: 100%;
                                    height: 1px;
                                    transform: scale(0.5);
                                    -webkit-transform: scale(0.5);
                                    -moz-transform: scale(0.5);
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
