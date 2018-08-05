<template>
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
        data: {
            type: Array,
            default: null
        },
        // 是否触发滚动时间
        probeType: {
            type: Number,
            default: 1
        },
        // 是否监听滚动事件
        listenScroll: {
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
        initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            // 设置scroll高度，不设置无法滑动
            this.$refs.wrapper.style.height = document.documentElement.clientHeight - 50 + 'px'
            if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    scrollY: true,// 滚动方向为y轴
                    click: true,// 是否派发click事件，通常判断浏览器派发的click还是betterscroll派发的click，可以用event._constructed，若是bs派发的则为true
                    momentum: true,// 当快速滑动时是否开启滑动惯性
                    bounce: false,// 是否启用回弹动画效果
                    bounceTime: 700,// 弹力动画持续的毫秒数
                    deceleration: 0.001,// 滚动动量减速越大越快，建议不大于0.01
                    momentumLimitTime: 300,// 符合惯性拖动的最大时间
                    momentumLimitDistance: 15, // 符合惯性拖动的最小拖动距离
                    resizePolling: 60 // 重新调整窗口大小时，重新计算better-scroll的时间间隔 
                })
            } else {
                this.scroll.refresh()
            }
            // 监听滚动事件
            if (this.listenScroll) {
                // 滚动开始触发
                this.scroll.on('scrollStart', () => {
                    this.$emit('scrollStore', true)
                })
                // pos为位置参数
                this.scroll.on('scroll', (pos) => {
                    this.$emit('distance', Math.abs(pos.y))
                    this.$emit('scrollStore', true)
                })
                // 滚动结束
                this.scroll.on('scrollEnd', () => {
                    this.emit('scrollStore', false)
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
    },
    watch: {
        data (val) {
            setTimeout(() => {
                this.refresh()
            }, 20)
        }
    }
}
</script>
<style lang="scss" scoped>
.scroll {
    position: fixed;
    // 自定义
    // top:50px;
    left: 0px;
    width: 100%;
    overflow: hidden;
}
</style>


