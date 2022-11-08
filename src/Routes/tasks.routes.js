const {Router} = require("express");

const {getAllTasks, getById, deleteTasks, postTasks, update} = require("../Controllers/tasks.controllers");

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getById);

router.post('/tasks', postTasks);

router.put('/tasks/:id', update);

router.delete('/tasks/:id', deleteTasks);












module.exports = router;