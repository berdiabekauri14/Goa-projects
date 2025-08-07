const express = require('express');

const fs = require('fs');

const app = express();

const cars = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));

app.get('/', (req, res) => {
    if (req.url === "/cars" && req.method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.send(cars);
    } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.send("Error has been occurred");
    }
});

app.listen(() => {
    console.log('Server is running on port 3000');
});