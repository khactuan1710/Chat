const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khactuan2312',
    port: '3306',
    database: 'chatapp'
})


db.connect(error => {
    if (error) throw error
    console.log('successfully connected to the database');
});

module.exports = db;