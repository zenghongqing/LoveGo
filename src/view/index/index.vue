<template>
    <b-scroll-load-data ref="scrollRef" :pullup="true" :pulldown="true" class="scroll" :listenScroll="true" @scrollEnd="scrollEnd" @scrollDistance="scrollDistance" @hideGoToTop="hideGoToTop">
        <div class="index">
            <index-header></index-header>
            <index-banner></index-banner>
            <index-types></index-types>
            <index-message></index-message>
            <cross-line></cross-line>
            <index-visit></index-visit>
            <index-sec-kill></index-sec-kill>
            <cross-line></cross-line>
            <index-book-shop></index-book-shop>
            <cross-line></cross-line>
            <index-market></index-market>
            <index-performance v-if="isShowPerformance"></index-performance>
        </div>
        <go-to-top v-show="isShowGoTop" @goToTop="goToTop"></go-to-top>
        <footer-nav-com></footer-nav-com>
    </b-scroll-load-data>
</template>
<script>
import BScrollLoadData from '@/components/better-scroll/scroll'
import IndexHeader from '@/view/index/header/header'
import IndexBanner from '@/view/index/banner/banner'
import IndexTypes from '@/view/index/type-item/type-item'
import CrossLine from '@/components/cross-line/cross-line.vue'
import IndexMessage from '@/view/index/message/index-message'
import IndexVisit from '@/view/index/visit/index-visit'
import IndexSecKill from '@/view/index/seco-kill/second-kill.vue'
import IndexBookShop from '@/view/index/book-shop/index-book-shop.vue'
import IndexMarket from '@/view/index/index-market/index-market.vue'
import IndexPerformance from '@/view/index/performance/index-performance'
import GoToTop from '@/components/go-to-top/go-to-top'
import FooterNavCom from '@/components/footer/footer-bar'
export default {
    data () {
        return {
            isShowPerformance: false, // 是否显示您的喜好
            isShowGoTop: false // 是否显示滑动到顶部的图标
        }
    },
    components: {
        BScrollLoadData,
        IndexHeader,
        IndexBanner,
        IndexTypes,
        CrossLine,
        IndexMessage,
        IndexVisit,
        IndexSecKill,
        IndexBookShop,
        IndexMarket,
        IndexPerformance,
        GoToTop,
        FooterNavCom
    },
    mounted () {
    },
    methods: {
        scrollEnd (flag) {
            if (!flag) {
                this.isShowPerformance = true
            } else {
                this.isShowPerformance = false
            }
        },
        scrollDistance (pos) {
            // 获取屏幕高度
            let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            console.log(pos.y, Math.abs(pos.y) > clientHeight - 100, 'top')
            if (Math.abs(pos.y) > clientHeight - 60) {
                this.isShowGoTop = true
            }
        },
        // 隐藏回到顶部图标
        hideGoToTop () {
            this.isShowGoTop = false
        },
        /**
         * 点击回到顶部, 并隐藏回到顶部图案
        */
        goToTop () {
            this.$refs.scrollRef.scrollTo(0, 0, 500)
            this.isShowGoTop = false
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    position: relative;
    padding-bottom: 50px;
}
</style>