const express = require("express")

const app = express()

const users = [
    { id: 1, name: "Andrew", email: "andrew.1998@gmail.com" },
    { id: 2, name: "Berdia", email: "Admin@gmail.com" },
    { id: 3, name: "John", email: "john.doe5@gmail.com" }
]

app.use((req, res, next) => {
    const { name, email } = req.body

    let body = ""

    req.on("data", (chunk) => {
        if (!name || email) {
            res.status(404).json({
                status: "fail",
                message: "404 not found"
            })
        }
        
        body += chunk;
    })


    req.on("end", () => {
        req.body = JSON.parse(body);
        next();
    })

})

app.use((req, res, next) => {
    const { email } = req.body

    if (email !== "Admin@gmail.com") {
        res.send("You are not allowed to view this content because you are not an Admin")
    } else {
        next();
    }
})

app.use((req, res, next) => {
    res.send("Admin has private messages")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})