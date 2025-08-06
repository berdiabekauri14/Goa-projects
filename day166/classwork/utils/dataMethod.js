const fs = require('fs');

const readFile = (filePath) => {
    fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return null;
        }
        return data;
    });
}

module.exports = { readFile };