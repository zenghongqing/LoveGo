<template>
    <div class="shop">
        <shop-goods-item :shopGoodsList="bookList" :titleImg="titleImg" :bannerImg="bannerImg" :isRed="true"></shop-goods-item>
    </div>
</template>
<script>
import shopGoodsItem from '@/components/shop-goods-item/shop-goods-item.vue'
export default {
    data () {
        return {
            titleImg: 'http://img61.ddimg.cn/upload_img/00705/yhj/tslc-bt.jpg',
            bannerImg: 'http://img60.ddimg.cn/upload_img/00705/B/1242-332-1533639781.jpg',
            bookList: [
                {
                    type: '文艺畅品',
                    price: '每满100减50',
                    imgSrc: 'http://img62.ddimg.cn/upload_img/00702/B/500-500-gxsl-1533021601.jpg'
                },
                {
                    type: '电子书',
                    price: '满20元5折',
                    imgSrc: 'http://img61.ddimg.cn/ddreader/dangebook/8y20y5z500-500.jpg'
                },
                {
                    type: '万种童书',
                    price: '5折封顶',
                    imgSrc: 'http://img60.ddimg.cn/upload_img/00705/1/2.26-1519631966.jpg'
                },
                {
                    type: '亲子/生活',
                    price: '每满100减50',
                    imgSrc: 'http://img62.ddimg.cn/upload_img/00705/Y/4-sh-10.23.jpg'
                },
                {
                    type: '人文社科',
                    price: '5折封顶',
                    imgSrc: 'http://img62.ddimg.cn/upload_img/00702/Y/500-500-6.15-1529495182.jpg'
                },
                {
                    type: '中小学阅读',
                    price: '每满75减25',
                    imgSrc: 'http://img62.ddimg.cn/upload_img/00702/B/500-500-jf-8.1-1533029685.jpg'
                },
                {
                    type: '成功励志',
                    price: '每满100减50',
                    imgSrc: 'http://img63.ddimg.cn/upload_img/00705/B/500-500-lz-1533025765.jpg'
                },
                {
                    type: '经济管理',
                    price: '5折封顶',
                    imgSrc: 'http://img60.ddimg.cn/upload_img/00702/S/500-500-jg-1532347476.jpg'
                },
                {
                    type: '考试图书',
                    price: '每满100减30',
                    imgSrc: 'http://img60.ddimg.cn/upload_img/00702/B/500-500-ks-1533030646.jpg'
                }
            ]
        }
    },
    components: {
        shopGoodsItem
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/mixins.scss';
.shop {
    position: relative;
}
</style>
