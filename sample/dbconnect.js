var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'd42377878',
  database : 'fintech'
});
 
connection.connect();
 
connection.query('', function (error, results, fields) {
});
 
connection.end();