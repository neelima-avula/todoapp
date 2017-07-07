var mongoose = require('mongoose');
 var schema = mongoose.Schema;

var userSchema = new schema({
    username: String,
    email: String,
    password: String
});

var usermodel = mongoose.model('userTable', userSchema);

module.exports = usermodel;