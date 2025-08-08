// 1) შექმენით express სერვერი, რომელიც უსმენს მოთხოვნებს პორეტ 3000სზე თქვენი დავალებაა, შექმნათ თავიდან მასივი რომელშიც იქნება 5 მანქანა მოცემული, დაარეგისტრირეთ როუტე GET /cars რომელიც დააბრუნებს ყველა მანქანას json ფორმატში, შემდეგ დაარეგისტრირეთ GET /cars/:id როუტე, დასერჩეთ ექსპრესში როგორ გამოიყენოთ პარამეტრები, შესწავლის შემდეგ მასივიდან აირჩიეთ ის მანქანა რომელიც ემთხვევა გადმოცემულ პარამეტრს, გატესტეთ postman გამოყენებით თქვენი შექმენილი express ის API

const express = require('express');
const app = express();

const cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2018 },
    { id: 2, brand: "Honda", model: "Civic", year: 2019 },
    { id: 3, brand: "BMW", model: "X5", year: 2020 },
    { id: 4, brand: "Mercedes", model: "C-Class", year: 2021 },
    { id: 5, brand: "Ford", model: "Focus", year: 2017 }
];

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id);
    const car = cars.find(c => c.id === carId);
    if (car) {
        res.json(car);
    } else {
        res.status(404).json({ error: "მანქანა ვერ მოიძებნა" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});