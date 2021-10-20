const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
})

TaskSchema.set('toJSON', {
  transform: (_document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString()
    delete returnedObj._id
    delete returnedObj.__v
  },
})

module.exports = mongoose.model('Task', TaskSchema)
