<template>
    <div class="performance">
        <div class="title">
            <h2>
                <p class="ico"></p>
                <span>根据您的偏好猜您可能喜欢</span>
            </h2>
        </div>
        <div class="recommend"></div>
        <ul></ul>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../assets/scss/mixins.scss";
.performance {
    position: relative;
    .title {
        height: 40px;
        width: 100%;
        background: #eff4fa;
        color: #313c47;
        position: relative;
        h2 {
            font-weight: normal;
            height: 100%;
            width: 60%;
            margin: 0 auto;
            line-height: 40px;
            .ico {
                display: inline-block;
                width: 13px;
                height: 13px;
                background: $red;
                border-radius: 50%;
                color: #fff;
                position: relative;
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 16%;
                    height: 1px;
                    width: 4px;
                    background: #fff;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 33%;
                    height: 1px;
                    width: 8px;
                    background: #fff;
                    -webkit-transform: rotate(135deg);
                    transform: rotate(135deg);
                }
            }
            span {
                display: inline-block;
                font-size: 14px;
                // vertical-align: middle;
            }
        }
    }
}
</style>
