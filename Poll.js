const { Schema, model } = require('mongoose')

// Poll Object shape
const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
  options: {
    type: [{
      name: String,
      vote: Number,
    }]
  }
})

const Poll = model('Poll', pollSchema)

module.exports = Poll