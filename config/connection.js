var mysql = require("mysql");



var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Ezra0827",
  database: "burgers_db"
});


connection.connect(function (err) {
  if (err) throw err;
  console.log('connected');


});

module.exports = connection;