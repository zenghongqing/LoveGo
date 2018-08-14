src/components/better-scroll/scroll.vue<template>
    <div class="scroll" ref=wrapper>
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data () {
        return {}
    },
    props: {
        // 是否触发滚动时间
        probeType: {
            type: Number,
            default: 1
        },
        // 是否监听滚动事件
        listenScroll: {
            type: Boolean,
            default: false
        },
        /** * 是否派发滚动到底部的事件，用于上拉加载 */
        pullup: {
            type: Boolean,
            default: false
        },
        /** * 是否派发顶部下拉的事件，用于下拉刷新 */
        pulldown: {
            type: Boolean,
            default: false
        },
        // 是否回到顶部的标志位
        isGoToTop: {
            type: Boolean,
            default: false
        }
    },
    mounted () {
        setTimeout(() => {
            this.initScroll()
        }, 30)
    },
    methods: {
        initScroll () {
            if (!this.$refs.wrapper) {
                return
            }
            this.$refs.wrapper.style.height = document.documentElement.clientHeight + 'px'
            if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    scrollY: true, // 滚动方向为y轴
                    click: true, // 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用event._constructed，若是bs派发的则为true
                    momentum: true, // 当快速滑动时是否开启滑动惯性
                    bounce: false, // 是否启用回弹动画效果
                    bounceTime: 700, // 弹力动画持续的毫秒数
                    deceleration: 0.001, // 滚动动量减速越大越快，建议不大于0.01
                    momentumLimitTime: 300, // 符合惯性拖动的最大时间
                    momentumLimitDistance: 15, // 符合惯性拖动的最小拖动距离
                    // 重新调整窗口大小时,重新计算better-scroll时间间隔
                    resizePolling: 60
                })
            } else {
                this.scroll.refresh()
            }
            // 监听滚动事件
            if (this.listenScroll) {
                // 滚动结束
                let self = this
                this.scroll.on('scroll', (pos) => {
                    self.$emit('scrollDistance', pos)
                })
            }
            // 是否派发滚动到底部事件，用于上拉加载
            if (this.pullup) {
                this.scroll.on('scrollEnd', () => {
                    if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                        this.$emit('scrollEnd', false)
                    }
                })
            }
        },
        // 确保绑定成功
        refresh () {
            this.scroll && this.scroll.refresh()
        },
        scrollTo () {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement () {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    // overflow: hidden;
}
</style>
