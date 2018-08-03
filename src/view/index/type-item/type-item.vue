<template>
    <div class="types">
        <div class="type-item" v-for="item in typesData" :key="item.id">
            <span class="box">
                <img :src="item.url">
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            typesData: [
                {
                    url: 'https://m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png',
                    name: '图书榜'
                },
                {
                    url: 'https://m.360buyimg.com/mobilecms/jfs/t23128/336/1542099359/200643/277906d4/5b62cd62N4751be53.gif',
                    name: '尾品汇'
                },
                {
                    url: 'https://m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
                    name: '拼团'
                },
                {
                    url: 'https://m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
                    name: '领券中心'
                },
                {
                    url: 'https://m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
                    name: '签到'
                }
            ]
        }
    },
    props: {},
    created () {},
    methods: {}
}
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/mixins.scss";
.types {
    position: relative;
    display: flex;
    width: 100%;
    height: 75px;
    @include onepx('bottom');
    .type-item {
        float: left;
        flex: 1;
        justify-content: space-around;
        .box {
            height: 100px;
            display: block;
            img {
                width: 45px;
                height: 45px;
            }
            span {
                // padding-top: 50px;
                display: block;
                width: 100%;
                text-align: center;
            }
        }
    }
}
</style>