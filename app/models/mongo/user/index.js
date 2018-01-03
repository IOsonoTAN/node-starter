const schema = require('./schema')
const { setOptions } = require('../helpers')

let User
const collectionName = 'user'

const find = async (criteria = {}, options = {}) => {
  const result = await User.paginate(criteria, setOptions(options))
  return result
}

const findOne = async (criteria = {}, field = {}) => {
  const result = await User.findOne(criteria, field)
  return result
}

const store = async (data) => {
  const user = new User(data)
  await user.save()
  return user
}

module.exports = (_db) => {
  User = _db.model(collectionName, schema)

  return {
    find,
    findOne,
    store
  }
}
