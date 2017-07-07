var configValues = require('./config.json');

module.exports = {
    dbstring : function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds149412.mlab.com:49412/tododb';
    }
}

