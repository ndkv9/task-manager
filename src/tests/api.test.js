const mongoose = require('mongoose')
const supertest = require('supertest')
const config = require('../utils/config')
const app = require('../app')

const api = supertest(app)

console.log('uri', config.MONGODB_URI)

it('tasks are returned as JSON', async () => {
  await api.get('/api/v1/tasks').expect('Content-Type', /application\/json/)
}, 5000)

afterAll(() => {
  mongoose.connection.close()
})
