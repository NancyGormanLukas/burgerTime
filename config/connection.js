// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

var source = {

    localhost: {
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: "",
        database: "burgers_db"
    },

     burgersDB: {
        port: 3000,
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cm0zdmk2ez4igof5',
        password: "yuhl98jsef0k7ul4",
        database: "lghowl35ljxl5vao" 
    }
}

var connection = mysql.createConnection(source.burgersDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;