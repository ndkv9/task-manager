const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide task name'],
    maxlength: [20, 'name cannot be more than 20 characters'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

TaskSchema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  },
})

module.exports = mongoose.model('Task', TaskSchema)
