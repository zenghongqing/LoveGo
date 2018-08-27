const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shopCommentInfo = new Schema({// 产品评论
    createTime: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    },
    username: {
        type: String
    },
    productNo: {
        type: String
    },
    star: {
        type: Number
    },
    image_url: {
        type: Array
    },
    content: {
        type: String
    }
})
shopCommentInfo.index({
    createTime: -1
})
module.exports = mongoose.model('shopCommentInfo', shopCommentInfo)
