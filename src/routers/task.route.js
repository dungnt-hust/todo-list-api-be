'use strict'

const express = require('express');

const router = express.Router();

const taskController = require('../controllers/task.controller');

//list
router.get('/list', taskController.list);

//create 
router.post('/create', taskController.createTask);

//get
router.get('/get', taskController.getById);

//update
router.post('/update', taskController.update);

//delete
router.post('/delete', taskController.remove);

module.exports= router;