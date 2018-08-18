<template>
    <div class="cart-control">
        <transition name="move">
            <i class="iconfont icon-dijian minus" v-show="count" @click.stop="decrease"></i>
        </transition>
        <input class="buy-num" id="buyNum" type="tel" v-show="count" :value="count">
        <i class="iconfont icon-dizeng add" @click.stop="add"></i>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    props: {
        count: {
            type: Number,
            default: 1
        },
        idx: {
            type: Number,
            default: 0
        }
    },
    methods: {
        add () {
            this.$emit('getAddNum', true, this.idx)
        },
        decrease () {
            if (this.count > 1) {
                this.$emit('getDecNum', true, this.idx)
            } else {
                this.$emit('getDecNum', false, this.idx)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cart-control {
    position: relative;
    float: left;
    width: 80px;
    .minus, .add {
        position: relative;
        float: left;
        // display: inline-block;
        width: 24px;
        height: 50px;
        line-height: 50px;
        // background-color: #fff;
        text-align: center;
    }
    .buy-num {
        width: 24px;
        height: 50px;
        float: left;
        line-height: 50px;
        text-align: center;
    }
}
.move-enter-active, .move-leave-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    transition: all .4s;
    -webkit-transition: all .4s;
    i {
        transform: rotate(0);
        transition: all .4s;
    }
}
.move-enter, .move-leave-to {
    opacity: 0;
    transform: translate3d(24px, 0, 0);
    transition: all .4s;
    i {
      transform: rotate(360deg);
      transition: all .4s;
    }
}
</style>