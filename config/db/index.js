const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 5000,
    user: "root",
    database: "zwallet"
});

module.exports = connection;