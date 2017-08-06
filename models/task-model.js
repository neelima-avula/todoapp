var mongoose = require('mongoose');

var schema = mongoose.Schema;

var taskSchema = new schema({
    task : String,
    isDone: Boolean,
    userID:String    
});

var taskModel = mongoose.model('taskTable',taskSchema);

module.exports = taskModel;

