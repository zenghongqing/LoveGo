<template>
    <div class="recommend">
        <header>
            <h2></h2>
            <i class="iconfont icon-fanhui" @click="goBack"></i>
        </header>
        <section class="recommend-list">
            <div class="recommend-list-one" v-for="item in recommendList" :key="item.id">
                <a href="javascript:void(0);" class="pic">
                    <img :src="item.imgSrc">
                </a>
                <div class="title">{{item.title}}</div>
                <div class="price">
                    <i class="iconfont icon-renminbifuhao">{{item.price}}</i>
                    <p class="labels" v-for="label in item.tags" :key="label.id">
                        <span :class="{'label-common': true, 'label1': label.isLabel1}">{{label.name}}</span>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            recommendList: [
                {
                    imgSrc: 'http://img3m9.ddimg.cn/94/28/25288159-1_h_3.jpg',
                    title: '小学生日记周记  看这一本就够  综合新课标和新教材编排  开心作文',
                    price: '12.9',
                    tags: [
                        {
                            name: '当当自营',
                            isLabel1: false
                        },
                        {
                            name: '减满',
                            isLabel1: true
                        }
                    ]
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/63/8/23719968-1_h_2.jpg',
                    title: '小学生日记起步 注音 作文之星升级版 名师指导全优佳',
                    price: '12.90',
                    tags: [
                        {
                            name: '当当自营',
                            isLabel1: false
                        },
                        {
                            name: '减满',
                            isLabel1: true
                        },
                        {
                            name: '加价购',
                            isLabel1: true
                        }
                    ]
                },
                {
                    imgSrc: 'http://img3m9.ddimg.cn/94/28/25288159-1_h_3.jpg',
                    title: '小学生日记周记  看这一本就够  综合新课标和新教材编排  开心作文',
                    price: '12.9',
                    tags: [
                        {
                            name: '当当自营',
                            isLabel1: false
                        },
                        {
                            name: '减满',
                            isLabel1: true
                        }
                    ]
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/63/8/23719968-1_h_2.jpg',
                    title: '小学生日记起步 注音 作文之星升级版 名师指导全优佳',
                    price: '12.90',
                    tags: [
                        {
                            name: '当当自营',
                            isLabel1: false
                        },
                        {
                            name: '减满',
                            isLabel1: true
                        },
                        {
                            name: '加价购',
                            isLabel1: true
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../../assets/scss/mixins.scss";
.recommend {
    background: #f2f2f2 url('../../../../assets/image/bg.png') no-repeat;
    background-size: 100% auto;
    height: 100%;
    width: 100%;
    position: relative;
    header {
        height: 40px;
        width: 100%;
        position: relative;
        h2 {
            height: 100%;
            background: url('../../../../assets/image/logo@3x.png') center no-repeat;
            background-size: 40px 30px;
        }
        i {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            color: #fff;
        }
    }
    .recommend-list {
        border-radius: 10px 10px 0 0;
        width: 92%;
        overflow-y: scroll;
        height: calc(100% - 50px);
        position: fixed;
        top: 50px;
        left: 4%;
        .recommend-list-one {
            border-radius: 10px;
            background-color: #fff;
            height: 270px;
            color: #323232;
             margin-top: 6px;
             &:nth-of-type(1) {
                 margin-top: 0;
             }
            .pic {
                display: block;
                width: 180px;
                height: 180px;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .title {
                width: 96%;
                font-size: 16px;
                line-height: 20px;
                color: inherit;
                font-weight: bold;
                margin: 4px auto;
                text-align: left;
            }
            .price {
                color: $red;
                i {
                    float: left;
                    font-size: 18px;
                    font-weight: bold;
                }
                .labels {
                    float: left;
                    margin-left: 10px;
                    font-size: 14px;
                    font-weight: bold;
                    .label-common {
                        display: block;
                        border: 1px solid $red;
                        border-radius: 3px;
                        float: left;
                        &.label1 {
                            background: $red;
                            color: #fff;
                            margin-left: 4px;
                            padding: 0 12px;
                        }
                    }
                }
            }
        }
    }
}
</style>
