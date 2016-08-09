
var connection = require('./connection.js');

function connect(ob) {
	// column1=value, column2=value2,...
	var array = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			array.push(key + '=' + ob[key]);
		}
	}

	return array.toString();
}

var orm = {
	selectAll: function(table, cb){
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})
	},
	insertOne: function (table, burger_name, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + connect(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;
		console.log(condition);

		// console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
};

module.exports = orm;