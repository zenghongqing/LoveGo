const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shopOrderInfo = new Schema({
    orderInfo: {
        createTime: {
            type: Date,
            default: Date.now
        },
        addressInfo: {
            type: Object
        },
        OrderNo: {
            type: String
        },
        memberToken: {
            type: String
        },
        total_fee: {
            type: Number
        },
        cancel_status: {
            type: Number
        },
        confirm_status: {
            type: Number
        },
        pay_status: {
            type: Number
        },
        finish_status: {
            type: Number
        },
        comment_status: {
            type: Number
        }
    },
    productList: {
        type: Array
    }
}, {
    collection: 'shopOrderInfo'
})

shopOrderInfo.index({
    createTime: -1
})
module.exports = mongoose.model('shopOrderInfo', shopOrderInfo)