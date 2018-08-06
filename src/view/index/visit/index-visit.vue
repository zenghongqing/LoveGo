<template>
    <div class="visit">
        <span class="title-img">
            <img src="https://m.360buyimg.com/mobilecms/jfs/t20863/125/519979559/24806/2e941d67/5b0fecc7N541bb0dd.png!q70.jpg">
        </span>
        <div class="real-show" v-for="item in visitList" :key="item.id">
            <div class="visit-text">
                <strong ata-titcolor="#FF2A2A,#F139D2">{{item.name}}</strong>
                <p>{{item.title}}</p>
            </div>
            <div class="visit-graphic">
                <img :src="item.imgSrc">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            visitList: [
                {
                    name: '白条商城',
                    title: '打白条换新机',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t21478/328/1357656620/59637/7af07d52/5b285e10N598a0f3f.jpg!q70.jpg.dpg'
                },
                {
                    name: '品牌秒杀',
                    title: '低价抢大牌',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t20845/274/1898979256/38009/6f461017/5b3b2a0cNede9d540.png!q70.jpg.dpg'
                },
                {
                    name: '白条商城',
                    title: '打白条换新机',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t21478/328/1357656620/59637/7af07d52/5b285e10N598a0f3f.jpg!q70.jpg.dpg'
                },
                {
                    name: '品牌秒杀',
                    title: '低价抢大牌',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t20845/274/1898979256/38009/6f461017/5b3b2a0cNede9d540.png!q70.jpg.dpg'
                },
                {
                    name: '白条商城',
                    title: '打白条换新机',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t21478/328/1357656620/59637/7af07d52/5b285e10N598a0f3f.jpg!q70.jpg.dpg'
                },
                {
                    name: '品牌秒杀',
                    title: '低价抢大牌',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t20845/274/1898979256/38009/6f461017/5b3b2a0cNede9d540.png!q70.jpg.dpg'
                },
                {
                    name: '白条商城',
                    title: '打白条换新机',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t21478/328/1357656620/59637/7af07d52/5b285e10N598a0f3f.jpg!q70.jpg.dpg'
                },
                {
                    name: '品牌秒杀',
                    title: '低价抢大牌',
                    imgSrc: 'https://m.360buyimg.com/n1/s130x130_jfs/t20845/274/1898979256/38009/6f461017/5b3b2a0cNede9d540.png!q70.jpg.dpg'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.visit {
    position: relative;
    width: 100%;
    .title-img {
        display: block;
        height: 40px;
        width: 100%;
        background: #f6f6f6;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .real-show {
        padding: 8px 0px 2px 4px;
        width: 25%;
        box-sizing: border-box;
        height: 100%;
        float: left;
        // border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        border-right: 1px solid #eee;
        strong {
            background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 16px;
            font-weight: normal;
            line-height: 18px;
            color: #222;
            display: inline-block;
            max-width: 100%;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .visit-graphic {
            width: 80px;
            height: 80px;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
</style>