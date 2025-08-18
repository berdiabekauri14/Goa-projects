const express = require("express")

const app = express()

app.use((req, res, next) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        req.body = JSON.parse(body);
        next();
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})