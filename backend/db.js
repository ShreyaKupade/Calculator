const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '://aivencloud.com',
    port: 27519,
    user: 'avnadmin',
    password: 'AVNS_9OZCfqw8NetSZTVszu4', // Aapka password
    database: 'defaultdb',
    ssl: {
        rejectUnauthorized: false // Yeh line cloud ke liye bahut zaruri hai
    }
});

db.connect(err => {
    if (err) {
        console.error("Cloud Connection Error: " + err.message);
    } else {
        console.log("✅ Successfully connected to Aiven Cloud Database!");
    }
});

module.exports = db;
