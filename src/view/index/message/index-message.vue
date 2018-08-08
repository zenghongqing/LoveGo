<template>
    <div class="message">
        <a href="javascript:void(0);" class="ico">
            <img src="http://img60.ddimg.cn/upload_img/00709/789065/123.png" alt="">
        </a>
        <swiper class="wrapper" :options="messageOptions" ref="messageWrapper">
            <swiper-slide class="wrapper-item" v-for="(item) in messageList" :key="item.id">
                <span class="label">
                    {{item.label}}
                </span>
                <span class="text">{{item.text}}</span>
            </swiper-slide>
        </swiper>
        <a href="javascript:;" class="more">更多</a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            messageOptions: {
                direction: 'vertical',
                autoplay: {
                    delay: 4000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                }
            },
            messageList: [
                {
                    label: '热卖',
                    text: '文艺品类日，每满100减50'
                },
                {
                    label: '热卖',
                    text: '文艺品类日，每满100减50'
                },
                {
                    label: '热卖',
                    text: '文艺品类日，每满100减50'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/mixins.scss";
.message {
    height: 34px;
    width: 100%;
    line-height: 40px;
    position: relative;
    .ico {
        height: 100%;
        width: 100px;
        float: left;
        img {
            display: block;
            height: 100%;
            width: 80px;
            margin: 0 auto;
        }
    }
    .wrapper {
        height: 100%;
        width: 60%;
        float: left;
        .wrapper-item {
            height: 100%;
            width: 100%;
            .label {
                display: inline-block;
                width: 40px;
                height: 14px;
                border-radius: 4px;
                line-height: 16px;
                border: 1px solid $red;
                color: $red;
                font-weight: bold;
            }
            .text {
                line-height: 20px;
            }
        }
    }
    .more {
        color: #666;
        display: block;
        height: 100%;
        width: 50px;
        float: right;
        font-weight: bold;
    }
}
</style>