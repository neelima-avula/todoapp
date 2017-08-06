var taskModel = require('../models/task-model');
var todoController = require('./todoController.js');
var bodyparser = require('body-parser');
var setupController = require('./setupController');

module.exports = function(app){

  app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));


    app.get('/gettasks',function(req,res){

      var result;
                  taskModel.find({userID: setupController.currentUserID},function(err,data){
                    if(err) throw err;
                    else{
                      //console.log("tasks retriving node js");
                      result = data;
                      //console.log(data);
                       //console.log(result);
                  res.send(result);
                    }
                  });
    });

    app.post("/addtask",function(req,res){
      //console.log("db controller result:");
      //console.log(setupController.currentUserID);
        var taskModelObj = taskModel({
                task : req.body.task,
                isDone: false,
                userID: setupController.currentUserID   
        });

        taskModelObj.save(function(err){
                if(err) throw err;
                else{
                  var result;
                  taskModel.find({userID: setupController.currentUserID},function(err,data){
                    if(err) throw err;
                    else{
                      console.log("tasks retriving node js");
                      result = data;
                      console.log(data);
                       console.log(result);
                  res.send(result);
                    }
                  });
                 
                }
             //console.log(taskModel.find({task:"ffffffffff"})); 
              // var obj = taskModel.find({task:"ffffffffff"});     
              //     // res.send("Add todotask success");
              //     res.send(obj);
              //   }
                 
          
        });
    });
}

