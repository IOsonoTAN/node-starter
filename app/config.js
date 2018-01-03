const databaseName = 'starter'
const env = process.env

module.exports = {
  nodeEnv: env.NODE_ENV || 'development',
  port: env.PORT || 3000,
  mongodb: {
    url: env.MONGODB_URL || `mongodb://localhost:27017/${databaseName}`,
    paginate: {
      limit: env.MONGODB_PAGINATE_LIMIT || 10
    }
  },
  redis: {
    url: env.REDIS_URL || 'redis://localhost:6379'
  }
}
