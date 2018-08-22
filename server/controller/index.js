const User = require('../models').User
// 下面这两个包用来生成时间
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
// 用于密码加密
const sha1 = require('sha1')
const createToken = require('../token/createToken')
const findUser = (username) => {
    return new Promise((resolve, reject) => {
        User.findOne({username}, (err, doc) => {
            if (err) {
                reject(err)
            }
            console.log(doc, 'doc')
            resolve(doc)
        })
    })
}
const Reg = async (ctx, next) => {
    let user = new User({
        username: ctx.request.body.username,
        password: sha1(ctx.request.body.password),
        token: createToken(this.username)
    })
    // 将objectid转换为用户创建时间(可以不用)
    user.create_time = moment(objectIdToTimestamp(user._id)).format('YYYY-MM-DD HH:mm:ss')
    let doc = await findUser(user.username)
    if (doc) {
        console.log('用户名已经存在')
        ctx.status = 200
        ctx.body = {
            success: false
        }
    } else {
        await new Promise((resolve, reject) => {
            user.save((err) => {
                if (err) {
                    return reject(err)
                }
                resolve()
            })
        })
        console.log('注册成功')
        ctx.status = 200
        ctx.body = {
            success: true
        }
    }
}
const Login = async (ctx, next) => {
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let doc = await findUser(username)
    if (!doc) {
        console.log('检查到用户名不存在')
        ctx.status = 200
        ctx.body = {
            info: false
        }
    } else if (doc.password === sha1(password)) {
        console.log('密码一致')
        // 生成一个新的token,并存到数据库
        let token = createToken(username)
        doc.token = token
        await new Promise((resolve, reject) => {
            doc.save((err) => {
                if (err) {
                    return reject(err)
                }
                resolve()
            })
        })
        ctx.status = 200
        ctx.body = {
            success: true,
            username,
            token, // 登录成功要创建一个新的token,应该存入数据库
            create_time: doc.create_time
        }
    } else {
        console.log('密码错误!')
        ctx.status = 200
        ctx.body = {
            success: false
        }
    }
}
module.exports = {
    Reg,
    Login
}