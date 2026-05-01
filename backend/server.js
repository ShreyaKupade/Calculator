const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'SumedhShreya', // Change this to your real MySQL password!
    database: 'calc_db'
});

db.connect(err => {
    if (err) {
        console.error("❌ Database connection failed:", err.message);
    } else {
        console.log("✅ Connected to MySQL Database!");
    }
});

// API Route to save calculation
app.post('/api/save', (req, res) => {
    const { formula, total } = req.body;
    const sql = "INSERT INTO history (calculation, result) VALUES (?, ?)";
    db.query(sql, [`${formula} = ${total}`, total], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "Saved!" });
    });
});

app.listen(5000, () => {
    console.log("🚀 Server is running on http://localhost:5000");
});
