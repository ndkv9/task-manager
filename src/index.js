const http = require('http')
const app = require('./app')
const connectDB = require('./db/connect')

const server = http.createServer(app)

const PORT = process.env.PORT || 3001

const start = async () => {
  try {
    await connectDB()
    server.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

start()
