const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'appuser',
    password: process.env.DB_PASSWORD || 'apppassword',
    database: process.env.DB_NAME || 'myappdb',
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get('/contacts', (req, res) => {
    pool.query('SELECT * FROM contacts', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Помилка бази даних' });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend server is successfully running on port ${port}`);
});