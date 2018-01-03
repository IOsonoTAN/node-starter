const redis = require('redis')
const bluebird = require('bluebird')
const config = require('../../config')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient({
  url: config.redis.url
})

client.on('error', (e) => console.error('Redis connection error: ', e))

module.exports = client
