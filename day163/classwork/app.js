const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            res.end("Error reading file");
            return;
        }
        res.end(data);
    });
    } else if (req.url === "/" || req.url === "/register.html") {
        fs.readFile("register.html", "utf-8", (err, data) => {
        if (err) {
            res.end("Error reading file");
            return;
        }
        res.end(data);
    });
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});