const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong!')
})

module.exports = app
