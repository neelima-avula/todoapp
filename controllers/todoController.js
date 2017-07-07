var userModel = require('../models/user-model');
var bodyParser = require('body-parser');

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
       // console.log("neelima testing");
        //res.send(data);
            //console.log("ansfdas"+data);
            if(data.length !== 0){
            res.sendfile('./public/views/todo-dashboard.html');
            }
            else{
            res.send("vamsamma this is not working");
            }
    
       

    });
    
});
}


