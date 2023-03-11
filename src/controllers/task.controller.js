'use strict'

let Task = require('../models/task.model');

exports.createTask = function(req, res){
    let newTask = new Task(req.body);
    
    if(!newTask.name || !newTask.description){
        res.status(400).send({
            error: true,
            message: 'Please provide task information more'
        });
    }else {
        Task.createTask(newTask, function(err, task){
            if(err) res.send(err)
            res.json(task)
        })
    }
};

exports.list = function(req, res){
    Task.list(function(err, task){
        if(err) res.send(err)
        res.json(task)
    })
};

exports.getById = function(req, res){
    Task.getById(req.query.taskId, function(err, task){
        if(err) res.send(err)
        res.json(task)
    })
};

exports.update = function(req, res){
    Task.update(req.query.taskId, new Task(req.body), function(err, task){
        if(err) res.send(err)
        res.json(task)
    })
};

exports.remove = function(req, res){
    Task.remove(req.query.taskId, function(err, task){
        if(err) res.send(err)
        res.json({message: 'Remove successfully'})
    })
};