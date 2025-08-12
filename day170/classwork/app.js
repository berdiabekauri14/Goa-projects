const express = require('express');

const app = express();

// 1) link parameters
// 2) query
// 3) body

const tours = [
    { id: 3, name: 'Snow Adventurer', price: 997, duration: 4 },
    { id: 1, name: 'Forest Hiker', price: 397, duration: 5 },
    { id: 4, name: 'City Wanderer', price: 1197, duration: 9 },
    { id: 2, name: 'Sea Explorer', price: 497, duration: 7 },
    { id: 5, name: 'Park Camper', price: 1497, duration: 10 }
];

app.get('/tours', (req, res) => {
    const { sort } = req.query;

    const copiedTours = [...tours];

    // sort = price : asc
    // sort = -price : desc

    if(sort === 'duration') {
        copiedTours.sort((a, b) => a.duration - b.duration);
    } else if(sort === '-duration') {
        copiedTours.sort((a, b) => b.duration - a.duration);
    }

    res.json(copiedTours);
});

app.get("/tours/:id", (req, res) => {
    const toursId = parseInt(req.params.id)
    const tour = tours.find(t => t.id === toursId)

    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({error: "Tour not found"});
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});