const { Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: {
    type: Date
  },
  isValidated: {
    type: Boolean,
    default: true
  }
}, {
  versionKey: false
})

schema.plugin(mongoosePaginate)

module.exports = schema
