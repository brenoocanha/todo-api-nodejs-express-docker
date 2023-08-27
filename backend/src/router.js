const express = require('express');
const tasksConstroller = require('./controllers/tasks');
const tasksMiddleware = require('./middlewares/tasks');

const router = express.Router();

router.get('/tasks', tasksConstroller.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksConstroller.createTask);
router.delete('/tasks/:id', tasksConstroller.deleteTask);
router.put('/tasks/:id',
	tasksMiddleware.validateFieldStatus,
	tasksMiddleware.validateFieldTitle,
	tasksConstroller.updateTask
);


module.exports = router;