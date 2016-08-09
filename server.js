//Set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();

var connection = require('./config/connection');

var PORT = 3000;
// var orm = require('./config/orm');



app.get('/', function(req, res){
	res.send('Yo dawg');
});

app.get('/api', function(req, res){
	connection.query('SELECT * FROM burgers', function(err, data){
		if(err) throw err;
		res.send(data);
	})
})


//MYSQL Connection 
connection.connect(function(err){
	if(err){
		console.log(err);
		return
	}
	console.log('Connected as id ' + connection.threadId);
})

//Express server up and running
app.listen(PORT);