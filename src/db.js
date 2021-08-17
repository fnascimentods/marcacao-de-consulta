const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_mc',
    port: '3306'
});

connection.connect((error)=>{
    if (error) throw error;

    console.log(`Conencted at database: ${process.env.DATABASE_NAME}`);
});

module.exports = connection;