const Koa = require('koa')
const morgan = require('koa-morgan')
const router = require('./routers')
const models = require('./models')

const app = new Koa()

app.context.models = models

app.use(morgan('dev'))
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
