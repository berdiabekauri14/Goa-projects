const express = require('express');
const app = express();

const tours = []

app.get("/tours", (req, res) => {
  res.json(tours);
});

app.get("/tours/:id", (req, res) => {
  const tourId = req.params.id;
  const tour = tours.find(t => t.id === tourId);
  
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).send('Tour not found');
  }
});

app.post("/tours/:query", (req, res) => {
    const { id, name, price, duration } = req.body;
    const query = req.query;

    if (!name || !price || !duration) {
        return res.status(400).send('Missing required fields');
    }
    
    if (query.name && query.name !== name) {
        return res.status(400).send('Name does not match query parameter');
    } else if (query.price && query.price !== price) {
        return res.status(400).send('Price does not match query parameter');
    } else if (query.duration && query.duration !== duration) {
        return res.status(400).send('Duration does not match query parameter');
    }

    if (tours.length >= 2) {
        return res.status(400).send('Tour limit reached');
    }

    res.query.limit = 2;

    const newTours = {
        name,
        price,
        duration,
        id: id.now()
    }

    tours.push(newTours); 

    res.json(tours)
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});