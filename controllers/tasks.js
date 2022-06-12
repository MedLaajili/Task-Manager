const Task = require("../models/task")

const getAllTasks = (req,res)=> {
    res.send('all items from the file')
}
const createTask = async (req,res)=> {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const updateTask = (req,res)=> {
    res.send('update task')
}
const getTask = (req,res)=> {
    res.json({id:req.params.id})
}
const deleteTask = (req,res)=> {
    res.send('delete task')
}
module.exports = {
    getAllTasks,deleteTask,updateTask,getTask,createTask
}