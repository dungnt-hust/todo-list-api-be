'use strict';

let dbConn = require('./../../config/db.config');

//object Task
let Task = function(task) {
    this.name = task.name;
    this.description = task.description;
    this.status = 1;
    this.created_time = new Date();
    this.updated_time = new Date();
};

Task.createTask = function createTask(newTask, result) {
    dbConn.query('INSERT INTO tasks set ?', newTask, function(err, res) {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

Task.list = function list(result) {
    dbConn.query("SELECT * FROM tasks", function(err, res){
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("task: ", res);
            result(null, res);
        }
    });
} 

Task.getById = function getById(taskId, result) {
    dbConn.query("SELECT * FROM tasks WHERE id = ?", taskId, function(err, res){
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("task: ", res);
            result(null, res);
        }
    });
} 

Task.update = function update(taskId, task, result) {
    dbConn.query("UPDATE tasks SET description= ? WHERE id = ?", [task.description, taskId], function(err, res){
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("task: ", res);
            result(null, res);
        }
    });
}

Task.remove = function remove(taskId, result) {
    dbConn.query("UPDATE tasks SET status = 3 WHERE id = ?", taskId, function(err, res){
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            console.log("task: ", res);
            result(null, res);
        }
    });
} 
module.exports = Task;