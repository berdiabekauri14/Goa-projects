const express = require("express")

const carsRouter = express.Router();

const cars = [
  {
    "id": 1,
    "make": "Toyota",
    "model": "Camry",
    "year": 2022,
    "color": "Silver"
  },
  {
    "id": 2,
    "make": "Honda",
    "model": "Civic",
    "year": 2021,
    "color": "Blue"
  },
  {
    "id": 3,
    "make": "Ford",
    "model": "Mustang",
    "year": 2023,
    "color": "Red"
  },
  {
    "id": 4,
    "make": "Tesla",
    "model": "Model 3",
    "year": 2024,
    "color": "White"
  },
  {
    "id": 5,
    "make": "BMW",
    "model": "X5",
    "year": 2020,
    "color": "Black"
  }
]

carsRouter.get("/", (req, res) => {
    res.json(cars)
})

carsRouter.get("/:id", (req, res) => {
    const carId = parseInt(req.params.id)
    const car = cars.find(c => c.id === carId)

    if (car) {
        res.json(car)
    } else {
        res.status(404).json({error: "Car not found"})
    }
})

carsRouter.post("/:query", express.json(), (req, res) => {
    const { id, make, model, year, color } = req.body;
    const query = req.query

    if (query.id && query.id !== id) {
        return res.status(400).send("Id doesnt match")
    } else if (query.make && query.make !== make) {
        return res.status(400).send("make doesnt match")
    } else if (query.model && query.model !== model) {
        return res.status(400).send("model doesnt match")
    } else if (query.year && query.year !== year) {
        return res.status(400).send("year doesnt match")
    } else if (query.color && query.color !== color) {
        return res.status(400).send("color doesnt match")
    }

    const newCar = {
        id: Date.now(),
        make,
        model,
        year,
        color
    }

    cars.push(newCar)

    res.json(cars)
})

carsRouter.delete("/:id", express.json(), (req, res) => {
    const carId = parseInt(req.params.id)
    const car = cars.find(c => c.id === carId)

    if (car) {
        car.id = ""
        car.make = ""
        car.model = ""
        car.year = ""
        car.color = ""
    } else {
        res.json(car)
    }
})

module.exports = carsRouter;