const hotels = [
    { id: 1, name: "Grand Palace Hotel", location: "New York", stars: 5 },
    { id: 2, name: "Sea View Resort", location: "Miami", stars: 4 },
    { id: 3, name: "Mountain Retreat", location: "Denver", stars: 3 }
];

const getHotels = (req, res) => {
    res.json(hotels);
}

const getHotel = (req, res) => {
    const hotelId = parseInt(req.params.id)
    const hotel = hotels.find(el => el === hotelId * 1)

    if (hotel) {
        res.json(hotel)
    } else {
        return res.status(404).json({
            status: "fail",
            message: "404 not found"
        })
    }
}

const createHotel = (req, res) => {
    const { name, location, stars } = req.body;

    if (!name || !location || !stars) {
        return res.status(400).json({
            status: "Something missing",
            message: "name, location and stars are required"
        })
    }

    const newHotel = {
        id: hotels[hotels.length - 1] + 1,
        name,
        location,
        stars
    }

    hotels.push(newHotel)

    res.json(hotels)
}

const deleteHotel = (req, res) => {
    const { id } = req.params;
    const hotelIndex = hotels.findIndex(el => el.id === id * 1);

    if (hotelIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Post cant be found!"
        });
    }

    hotels.splice(hotelIndex, 1);

    res.status(204).send();
}

const updateHotel = (req, res) => {
    const { id } = req.params
    const { title, year, genre } = req.body;

    const hotel = hotels.find(el => el === id * 1)

    if (!hotel) {
        return res.status(404).json({
            status: "fail",
            message: "404 not found"
        })
    }

    if(title) hotel.title = title;
    if(year) hotel.year = year;
    if(genre) hotel.genre = genre;

    res.json(post);
}

module.exports = { getHotels, getHotel, createHotel, deleteHotel, updateHotel }