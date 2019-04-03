const mysql = require('mysql2');

const connection_pool = mysql.createPool({
    host:'localhost',
    password: '123321',
    user: 'root',
    database: 'test-node-sql'
})

module.exports = connection_pool.promise();