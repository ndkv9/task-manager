const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({})
  res.json(tasks)
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const updateTask = (req, res) => {
  res.send('update a task')
}

const deleteTask = (req, res) => {
  res.send('delete a task')
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }
