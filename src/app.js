require('express-async-errors')
const taskRouter = require('./routes/task')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const notFound = require('./middlewares/404')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.static('public'))
app.use(express.json())

// routes
app.get('/ping', (_req, res) => {
  res.send('pong!')
})
app.use('/api/v1/tasks', taskRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
