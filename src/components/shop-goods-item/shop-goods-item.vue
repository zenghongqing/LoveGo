<template>
    <div class="content">
        <div class="title">
            <img :src="titleImg">
        </div>
        <div class="shop-banner">
            <img :src="bannerImg">
        </div>
        <ul class="shop-content">
            <li v-for="goodItem in shopGoodsList" :key="goodItem.id">
                <p>
                    <span class="type">{{goodItem.type}}</span>
                    <span :class="{'price': true, 'red': isRed}">{{goodItem.price}}</span>
                </p>
                <img :src="goodItem.imgSrc" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    props: {
        isRed: {
            type: Boolean,
            default: false
        },
        shopGoodsList: {
            type: Array
        },
        titleImg: {
            type: String
        },
        bannerImg: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins.scss';
.content {
    .title {
        width: 100%;
        height: 50px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .shop-banner {
        width: 100%;
        height: 100px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .shop-content {
        overflow: hidden;
        box-sizing: border-box;
        li {
            float: left;
            width: 33%;
            height: 180px;
            border-right: 1px solid #eff4fa;
            border-bottom: 1px solid #eff4fa;
            p {
                padding: 16px 8px 0;
                font-size: 14px;
                .type {
                    display: block;
                    font-weight: bold;
                }
                .price {
                    font-weight: bold;
                    color: #6770f2;
                }
                .red {
                    color: $red;
                }
            }
            img {
                width: 100px;
                height: 110px;
            }
        }
    }
}
</style>
