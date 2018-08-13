<template>
    <div class="go-top">
        <a href="javascript:;" class="btn-back" @click="goTop">
            <img src="http://touch.m.dangdang.com/images/go-top.png">
        </a>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
        goTop () {
            let distance = document.documentElement.scrollTop || document.body.scrollTop
            let step = distance / 50 // 每步的距离
            let timer = null
            cancelAnimationFrame(timer)
            console.log(step)
            timer = requestAnimationFrame(function step () {
                if (distance > 0) {
                    distance -= step
                    window.scrollTo(0, distance)
                    window.requestAnimationFrame(step)
                } else {
                    cancelAnimationFrame(timer)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.go-top {
    position: fixed;
    right: 15px;
    bottom: 60px;
    z-index: 99;
    .btn-back {
        display: block;
        width: 50px;
        height: 50px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>