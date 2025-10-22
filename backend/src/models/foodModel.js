const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: false,
  },
  description: {
    type: String
  },
  foopartnet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'foodpartner'
}
})

module.exports = mongoose.model('Food', foodSchema)