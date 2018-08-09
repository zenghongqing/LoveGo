<template>
    <b-scroll-load-data :pullup="true" class="scroll" @scrollEnd="scrollEnd" @scrollDistance="scrollDistance">
        <div class="index" ref="indexWrapper">
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
        IndexPerformance
    },
    mounted () {
    },
    methods: {
        scrollEnd (flag) {
            if (!flag) {
                console.log(flag)
                this.isShowPerformance = true
            } else {
                this.isShowPerformance = false
            }
        },
        scrollDistance (pos) {
            console.log(pos)
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