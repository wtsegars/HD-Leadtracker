const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hd_leads_1755'
});

connection.connect(function(err) {
    if (err) {
        console.log("Error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;