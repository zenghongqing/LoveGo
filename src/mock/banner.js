const Mock = require('mockjs')
const Random = Mock.Random
// 获取首页轮播图图片
let bannerPics = []
for (let i = 0; i < 5; i++) {
    bannerPics.push(Random.dataImage('375x100'))
}
export default {
    IndexBanner: Mock.mock('/api/indexBannerPic', bannerPics)
}