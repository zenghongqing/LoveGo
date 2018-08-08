<template>
    <div class="market">
        <shop-goods-item :shopGoodsList="marketGoodsList" :titleImg="titleImg" :bannerImg="bannerImg"></shop-goods-item>
    </div>
</template>
<script>
import shopGoodsItem from '@/components/shop-goods-item/shop-goods-item.vue'
export default {
    data () {
        return {
            titleImg: 'http://img63.ddimg.cn/upload_img/00670/qd/dfdg5465.jpg',
            bannerImg: 'http://img59.ddimg.cn/14540041595359_y.jpg',
            marketGoodsList: [
                {
                    type: '艺福堂养生花茶',
                    price: '3件8折叠加99减50券',
                    imgSrc: 'http://img63.ddimg.cn/upload_img/00670/qd/333333333tgrft-1533641738.jpg'
                },
                {
                    type: '三只松鼠',
                    price: '满199减120',
                    imgSrc: 'http://img59.ddimg.cn/115250027252309_y.jpg'
                },
                {
                    type: '储物小家具',
                    price: '9.9元起',
                    imgSrc: 'http://img50.ddimg.cn/174040037645010_y.jpg'
                },
                {
                    type: '欧莱雅专卖',
                    price: '全场低至5折',
                    imgSrc: 'http://img55.ddimg.cn/14540041533425_y.jpg'
                },
                {
                    type: '当当优品收纳',
                    price: '59元秒',
                    imgSrc: 'http://img51.ddimg.cn/99999990002551551.jpg'
                },
                {
                    type: '当当超市馆',
                    price: '品质精选',
                    imgSrc: 'http://img60.ddimg.cn/upload_img/00670/qd/ewtrytuu-1531217573.jpg'
                },
                {
                    type: '当当优品床单',
                    price: '49元秒',
                    imgSrc: 'http://img63.ddimg.cn/upload_img/00452/1/0808-y-p-7-500-1533624282.jpg'
                },
                {
                    type: '袋鼠妈妈',
                    price: '满199减110',
                    imgSrc: 'http://img56.ddimg.cn/99380046930706_y.jpg'
                },
                {
                    type: '卡拉羊书包',
                    price: '刻字签名',
                    imgSrc: 'http://img55.ddimg.cn/215080047117505_y.jpg'
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
.market {
    position: relative;
}
</style>
