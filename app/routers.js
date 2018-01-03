const Router = require('koa-router')
const router = new Router({
  prefix: '/v1'
})

const { users } = require('./controllers')

router.get('/users', users.list)
router.post('/users', users.create)

module.exports = router
