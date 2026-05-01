const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Default is usually 'root'
    password: 'SumedhShreya', // IMPORTANT: Put your actual MySQL password here
    database: 'calc_db'     // The database you just created in the image
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL Database!');
});

module.exports = db;
