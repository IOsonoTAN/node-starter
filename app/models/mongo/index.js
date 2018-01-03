const mongoose = require('mongoose')
const config = require('../../config')

const user = require('./user')

mongoose.connect(config.mongodb.url)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = {
  user: user(db)
}
