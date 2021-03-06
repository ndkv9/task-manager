const Task = require('../models/Task')
const getAllTasks = async (_req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks, amount: tasks.length })
}

const getTask = async (req, res) => {
  const id = req.params.id
  const returnedTask = await Task.findById(id)
  if (!returnedTask) {
    return res.status(404).json({ msg: `cannot found task with id ${id}` })
  }

  return res.status(200).json({ task: returnedTask })
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const updateTask = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const taskToUpdate = await Task.findById(id)

  if (!taskToUpdate) {
    return res.status(404).json({ msg: `cannot found task with id ${id}` })
  }

  const taskObj = {
    ...body,
  }

  const returnedTask = await Task.findByIdAndUpdate(id, taskObj, {
    new: true,
    runValidators: true,
  })

  return res.status(200).json({ task: returnedTask })
}

const deleteTask = async (req, res) => {
  const id = req.params.id
  await Task.findByIdAndDelete(id)
  res.status(204).end()
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }
