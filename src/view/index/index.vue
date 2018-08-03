<template>
    <div class="index">
        <index-header></index-header>
        <index-banner></index-banner>
        <index-types></index-types>
    </div>
</template>
<script>
import IndexHeader from '@/view/index/header/header'
import IndexBanner from '@/view/index/banner/banner'
import IndexTypes from '@/view/index/type-item/type-item'
export default {
    data () {
        return {}
    },
    components: {
        IndexHeader,
        IndexBanner,
        IndexTypes
    }
}
</script>
<style lang="scss" scoped>
</style>