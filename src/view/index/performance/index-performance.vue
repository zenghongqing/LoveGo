<template>
    <div class="performance">
        <div class="title">
            <h2>
                <p class="ico"></p>
                <span>根据您的偏好猜您可能喜欢</span>
            </h2>
        </div>
        <ul class="performance-list">
            <li>
                <a href="javascript:void(0);" class="query">
                    <div class="recommend">
                        <span class="btn" @click="queryRecommend">点击查看</span>
                    </div>
                </a>
            </li>
            <li class="ios" v-for="(item) in performanceList" :key="item.id">
                <router-link to="/home" class="query">
                    <aside>
                        <img :src="item.imgSrc">
                    </aside>
                    <span class="name">{{item.name}}</span>
                    <p class="labels">
                        <span class="label_common">{{item.labels[0]}}</span>
                        <span class="label_common label1">{{item.labels[1]}}</span>
                        <span class="label_common label1">{{item.labels[2]}}</span>
                    </p>
                    <em class="money">
                        <i class="left">￥</i><i class="middle">{{item.integer}}</i>.<i class="right">{{item.point}}</i>
                    </em>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            performanceList: [
                {
                    imgSrc: 'http://img3m1.ddimg.cn/41/3/22706681-1_h_1.jpg',
                    name: '小学生日记起步 (二、三年级适用)',
                    labels: ['当当自营', '满减', '加价购'],
                    integer: 8,
                    point: 80
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/4/0/23676448-1_h_1.jpg',
                    name: '小学生作文 看图写话就三步—从20字到200字（二年级）超43000多名读者热评!',
                    labels: ['当当自营', '满减', '加价购'],
                    integer: 22,
                    point: 10
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/4/24/23478448-1_h_2.jpg',
                    name: '小学生看图写话（提高篇·1～2年级）',
                    labels: ['当当自营', '满减', '加价购'],
                    integer: 13,
                    point: 50
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/4/0/23676448-1_h_1.jpg',
                    name: '小学生作文 看图写话就三步—从20字到200字（二年级）超43000多名读者热评!',
                    labels: ['当当自营', '满减', '加价购'],
                    integer: 22,
                    point: 10
                },
                {
                    imgSrc: 'http://img3m8.ddimg.cn/4/24/23478448-1_h_2.jpg',
                    name: '小学生看图写话（提高篇·1～2年级）',
                    labels: ['当当自营', '满减', '加价购'],
                    integer: 13,
                    point: 50
                }
            ]
        }
    },
    methods: {
        // 点击查看推荐
        queryRecommend () {
            this.$router.push('/home/recommend')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/mixins.scss";
.performance {
    position: relative;
    .title {
        height: 40px;
        width: 100%;
        background: #eff4fa;
        color: #313c47;
        position: relative;
        h2 {
            font-weight: normal;
            height: 100%;
            width: 60%;
            margin: 0 auto;
            line-height: 40px;
            .ico {
                display: inline-block;
                width: 13px;
                height: 13px;
                background: $red;
                border-radius: 50%;
                color: #fff;
                position: relative;
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 16%;
                    height: 1px;
                    width: 4px;
                    background: #fff;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 33%;
                    height: 1px;
                    width: 8px;
                    background: #fff;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                }
            }
            span {
                display: inline-block;
                font-size: 14px;
                // vertical-align: middle;
            }
        }
    }
    .performance-list {
        position: relative;
        overflow: hidden;
        background: #eff4fa;
        .ios:nth-child(even) {
            padding-left: 4px;
            padding-bottom: 4px;
            float: right;
        }
        .ios:nth-child(odd) {
            padding-right: 4px;
            padding-bottom: 4px;
            float: left;
        }
        li {
            height: 260px;
            overflow: hidden;
            width: 49%;
            margin-bottom: 4px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            float: left;
            &.ios {
                background: #fff;
                padding-right: 0px;
                width: 49%;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
                aside {
                    display: block;
                    position: relative;
                    img {
                        display: block;
                        height: 170px;
                        width: 100%;
                    }
                }
                .name {
                    color: #232323;
                    line-height: 20px;
                    font-size: 13px;
                    display: block;
                    height: 38px;
                    padding: 4px 4px 0;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: left;
                }
                .labels {
                    height: 20px;
                    overflow: hidden;
                    font-size: 0;
                    padding: 4px 4px 0 4px;
                    .label_common {
                        float: left;
                        font-size: 10px;
                        border: 1px solid $red;
                        padding: 0 2px;
                        color: $red;
                        border-radius: 3px;
                        margin-right: 4px;
                        &.label1 {
                            background: $red;
                            color: #fff;
                            font-weight: bold;
                        }
                    }
                }
                .money {
                    font-size: 12px;
                    color: $red;
                    float: left;
                    margin-right: 4px;
                    font-weight: bold;
                    i {
                        font-style: normal;
                        font-size: 10px;
                        display: inline-block;
                        font-weight: bold;
                    }
                    .left {
                        font-size: 14px;
                    }
                    .middle {
                        font-size: 16px;
                    }
                    .right {
                        font-size: 14px;
                    }
                }
            }
            .query {
                display: block;
                width: 100%;
                height: 100%;
                padding-bottom: 8px;
                .recommend {
                    height: 100%;
                    background: url(http://img63.ddimg.cn/upload_img/00610/test/poster_3x-1524898445.png) no-repeat center center;
                    background-size: 100% 100%;
                    border-radius: 4px;
                    position: relative;
                    .btn {
                        font-size: 12px;
                        font-weight: bold;
                        display: block;
                        width: 70px;
                        text-align: center;
                        border: 1px solid #fff;
                        color: #fff;
                        height: 24px;
                        line-height: 24px;
                        border-radius: 10px;
                        position: absolute;
                        left: 50%;
                        margin-left: -35px;
                        bottom: 40px;
                    }
                }
            }
        }
    }
}
</style>
