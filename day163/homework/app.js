const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url = "/" || req.url === "/index.html") {
        fs.readFile('index.html', "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading index.html');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/about.html") {
        fs.readFile('about.html', "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading about.html');
            } else {
                res.end(data);
            }
        });
    } else if (req.url === "/contact.html") {
        fs.readFile('contact.html', "utf-8", (err, data) => {
            if (err) {
                res.end('Error loading contact.html');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// სერვერი არის ბაზა, რომელიც პასუხობს სხვადასხვა HTML ფაილებს მოთხოვნის მიხედვით. მომხმარებელი, რომელიც აკითხავს სერვერს, მიიღებს შესაბამის HTML ფაილს, მაგალითად, /index.html, /about.html ან /contact.html.
// სერვერი ასევე მართავს შეცდომებს, თუ ფაილი ვერ იძებნება ან ვერ იტვირთება.
// ეს არის მარტივი HTTP სერვერი, რომელიც შექმნილია Node.js-ის გამოყენებით

// http მოდული გამოიყენება სერვერის შექმნისთვის


// req(require - მოთხოვნა) და res(response - პასუხი) ობიექტები გამოიყენება მომხმარებლის მიერ გაგზავნილი მოთხოვნისა და სერვერის მიერ დაბრუნებული პასუხის მართვისთვის.

// res.end() მეთოდი გამოიყენება პასუხის დასრულებისთვის და მომხმარებელს მონაცემების გაგზავნისთვის.