const mysql = require("mysql2")

const pool = mysql.createPool({
    user: "root",
    password: "doodle3000",
    host: "localhost",
    database: "anotherone"
})

module.exports = pool.promise();