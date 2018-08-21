const Koa = require('koa')
const app = new Koa()
const routes = require('./routes')
const body = require('koa-bodyparser')
const serve = require('koa-static')
const path = require('path')
const { port } = require('./config')
app.use(body())
// 设置静态目录
app.use(serve(
    path.join(__dirname, '/public')
))
// 路由配置
routes(app)

app.listen(port, () => {
    console.log('程序正在启动...')
})