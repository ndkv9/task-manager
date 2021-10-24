const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

describe('API tests', () => {
  it('tasks are returned as JSON', async () => {
    await api.get('/api/v1/tasks').expect('Content-Type', /application\/json/)
  }, 5000)

  it('there is one task at beginning', async () => {
    const response = await api.get('/api/v1/tasks')
    expect(response.body.amount).toBe(1)
  })

  it('return with proper content', async () => {
    const response = await api.get('/api/v1/tasks')
    expect(response.body.tasks[0].name).toBe('a testing task from test-db')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
