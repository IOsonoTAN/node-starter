const { mongodb } = require('../../config')
const { limit } = mongodb.paginate

const setOptions = (options) => Object.assign(options, {
  limit
})

module.exports = {
  setOptions
}
