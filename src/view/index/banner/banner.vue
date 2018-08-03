<template>
    <swiper :options="bannerOptions">
        <swiper-slide v-for="item in imgsList" :key="item.id">
            <a>
                <img :src="item" alt="">
            </a>
        </swiper-slide>
    </swiper>
</template>
<script>
// import '@/mock/banner'
// import api from '@/api/api.js'
export default {
    data () {
        return {
            bannerOptions: {
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                }
            },
            imgsList: [
                'http://img52.ddimg.cn/173090042061442_y.jpg',
                'http://img60.ddimg.cn/upload_img/00450/lily/1242-366-sj0-1533177244.jpg',
                'http://img60.ddimg.cn/upload_img/00702/B/1242x366_lyx_0731-1533027849.jpg',
                'http://img51.ddimg.cn/14540041334681_y.jpg',
                'http://img60.ddimg.cn/upload_img/00570/tongshu/1242x366_djj_0801-1533104592.jpg'
            ]
        }
    },
    created () {
        // api.getIndexBannerPics().then(res => {
        //     if (res && res.data) {
        //         console.log(res)
        //         this.imgsList = res.data
        //     }
        // }).catch(e => {
        //     console.log(e)
        // })
    }
}
</script>
<style lang="scss" scoped>
.swiper-container {
    margin-top: 0.1rem;
    position: relative;
    .swiper-wrapper {
        height: 140px;
        width: 100%;
        swiper-slide, a, img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
