<template>
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
        <cross-line></cross-line>
    </div>
</template>
<script>
import IndexHeader from '@/view/index/header/header'
import IndexBanner from '@/view/index/banner/banner'
import IndexTypes from '@/view/index/type-item/type-item'
import CrossLine from '@/components/cross-line/cross-line.vue'
import IndexMessage from '@/view/index/message/index-message'
import IndexVisit from '@/view/index/visit/index-visit'
import IndexSecKill from '@/view/index/seco-kill/second-kill.vue'
import IndexBookShop from '@/view/index/book-shop/index-book-shop.vue'
import IndexMarket from '@/view/index/index-market/index-market.vue'
export default {
    data () {
        return {}
    },
    components: {
        IndexHeader,
        IndexBanner,
        IndexTypes,
        CrossLine,
        IndexMessage,
        IndexVisit,
        IndexSecKill,
        IndexBookShop,
        IndexMarket
    }
}
</script>
<style lang="scss" scoped>
.index {
    overflow: scroll;
    padding-bottom: 50px;
}
</style>