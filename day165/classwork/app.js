const http = require('http');
const fs = require('fs');
const url = require('url');

const cars = JSON.parse(fs.readFileSync('cars.json', 'utf8'));

const server = http.createServer((req, res) => { 
    const parsedUrl = url.parse(req.url, true);
    const id = parsedUrl.query.id;

    if (id) {
        const car = cars.find(car => car.id === Number(id));
        if (car) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(car));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Car not found</h1>');
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(cars));
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});