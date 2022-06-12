const express = require('express');
const router = express.Router();
const task =require('../controllers/tasks')


router.route('/').get(task.getAllTasks).post(task.createTask);
router.route('/:id').get(task.getTask).patch(task.updateTask).delete(task.deleteTask);

module.exports = router 