const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('CONNECTED TO THE MONGODB..'))
  .catch(err => console.log(err.message))
