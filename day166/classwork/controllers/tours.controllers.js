const fs = require('fs');

const getTours = (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading tours file:', err);
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    })
}

module.exports = getTours;