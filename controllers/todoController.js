var userModel = require('../models/user-model');
var bodyParser = require('body-parser');
var setupController = require('./setupController');
module.exports = function(app){
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
res.sendfile('./public/views/todo-login.html');
});


app.post('/',function(req,res){

    var userModelObj = userModel({
        username: req.body.registerName,
        email: req.body.registerEmail,
        password:req.body.registerPassword
    });
    userModelObj.save(function(error){
        if(error) throw error;
        else
        res.sendfile('./public/views/todo-login.html');
    });
    
});


app.get('/register',function(req,res){
    res.sendfile('./public/views/todo-register.html');
});


app.post('/dashboard/',function(req,res){
   
    userModel.find({email:req.body.loginEmail,password:req.body.loginPassword},function(err, data){
        if(err) throw err;
      setupController.currentUserID = data[0]._id;
            if(data.length !== 0){
                 //console.log(data);
                 //console.log(currentUserID);
                 //console.log(data[0]._id);
            res.sendfile('./public/views/todo-dashboard.html');
            }
            else{
            res.send("Login failed Testing");
            }
    });
       // next();
    
    
});



}


