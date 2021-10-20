const http = require('http')
const app = require('./app')
const config = require('./utils/config')
const connectDB = require('./db/connect')

const server = http.createServer(app)

const PORT = config.PORT || 3001
const MONGODB_URI = config.MONGODB_URI

const start = async () => {
  try {
    await connectDB(MONGODB_URI)
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

start()
