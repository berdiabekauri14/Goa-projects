// შექმენით tours API - უნდა შეგეძლოთ tours - ების შეცვლა, დამატება, წაშლა და წამოღება put, get, delete, post - მეთოდებით 

const express = require('express');

const app = express();

const fs = require('fs');

const tours = JSON.parse(fs.readFileSync("./tours.json", "utf-8"));

app.get("/tours", (req, res) => {
  if (req.url === "/tours" && req.method === "GET") {
    res.send(tours)
  } else if (req.url === "/tours" && req.method === "POST") {
    const newTour = req.body;

    tours.push(newTour);

    fs.writeFileSync("./tours.json", JSON.stringify(tours, null, 2));

    res.status(201).send(newTour);
  } else if (req.url === "/tours" && req.method === "DELETE") {
    tours.length = 0;

    fs.writeFileSync("./tours.json", JSON.stringify(tours, null, 2));

    res.status(204).send();
  } else if (req.url === "/tours" && req.method === "PUT") {
    const updatedTours = req.body;

    tours.length = 0;

    tours.push(...updatedTours);

    fs.writeFileSync("./tours.json", JSON.stringify(tours, null, 2));

    res.status(200).send(updatedTours);
  } else {
    res.status(405).send({ message: "Method Not Allowed" });
  }

  res.send(tours);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});