const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {type: String},
    token: {type: String},
    create_time: {type: Date, default: Date.now()}
})
module.exports = mongoose.model('User', userSchema)