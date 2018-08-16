<template>
    <div class="ratings-select">
        <div class="type">
            <span class="block all" :class="{'active': selectType === 2}" @click="select(2)">{{desc.all}}
                <span class="count">1111</span>
            </span>
            <span class="block positive" :class="{'active': selectType === 1}" @click="select(1)">{{desc.positive}}
                <span class="count">1100</span>
            </span>
            <span class="block negtive" :class="{'active': selectType === 0}" @click="select(0)">{{desc.negative}}
                <span class="count">11</span>
            </span>
        </div>
        <div class="choice" @click="switchContent" :class="{'on': onlyContent === true}">
            <i class="iconfont icon-icon_check_circle"></i>
            <span class="text">只能看到有内容的评价</span>
        </div>
        <div class="rating-list">
            <ul>
                <li>
                    <div class="rating-user">
                        <span class="user">j***9</span>
                        <star-component class="star" :size="24" :score="4.8"></star-component>
                        <span class="date">2018-06-03</span>
                    </div>
                    <div class="content">
                        裤子已收到，质量很好，穿起来既好看又显瘦，很喜欢，一下买了两条。
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import StarComponent from '@/components/star/star'
// 正面评价，负面评价，所有
const ALL = 2
const POSITIVE = 1
const NEGTIVE = 0
export default {
    data () {
        return {}
    },
    props: {
        desc: {
            type: Object,
            default () {
                return {
                    all: '全部',
                    positive: '满意',
                    negative: '不满意'
                }
            }
        },
        ratings: {
            type: Array,
            default: null
        },
        selectType: {
            type: Number,
            default: ALL
        },
        onlyContent: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        positiveRatings () {
            return this.ratings.filter(item => {
                return item.rateType === POSITIVE
            })
        },
        negativeRatings () {
            return this.ratings.filter(item => {
                return item.rateType === NEGTIVE
            })
        }
    },
    components: {
        StarComponent
    },
    methods: {
        // 切换评价
        select (type) {
            this.$emit('select', type)
        },
        // 切换只有文字的评价内容
        switchContent () {
            this.$emit('switchContent', this.onlyContent)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../../assets/scss/mixins.scss';
.ratings-select {
    .type {
        padding: 8px 0;
        margin: 0 13px;
        .block {
            display: inline-block;
            padding: 8px 12px;
            margin-right: 8px;
            border-radius: 2px;
            font-size: 12px;
            line-height: 16px;
            color: #4d555d;
            &.all {
                background: rgba(0,160,220,.2);
            }
            &.positive {
                background: rgba(0,160,220,.2);
            }
            &.negative {
                background: rgba(77,85,93,.2);
                &.active {
                    background-color: rgba(77, 85, 93, 1.0);
                }
            }
            &.active {
                background: #00B7FF;
                color: #fff;
            }
        }
    }
    .choice {
      i {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        color: #fff;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
      }
      &.on i {
        background-color: #00c850;
        color: #fff;
      }
      padding: 8px 18px;
      line-height: 24px;
      color: #93999f;
      border-bottom: 1px solid rgba(7,17,27,.1);
      .text {
        font-size: 14px;
      }
    }
    .rating-list {
        padding: 8px 13px;
        color: #333;
        font-size: 12px;
        li {
            text-align: left;
            padding-bottom: 6px;
            @include onepx('bottom');
            .rating-user {
                line-height: 16px;
                padding: 4px 0;
                overflow: hidden;
                .user {
                    display: inline-block;
                    max-width: 58px;
                    color: #999;
                    vertical-align: middle;
                }
                .star {
                    display: inline-block;
                }
                .date {
                    float: right;
                    color: #999;
                    margin-left: -60px;
                }
            }
        }
    }
}
</style>
