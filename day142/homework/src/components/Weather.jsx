import { useState, useEffect } from "react";
import "./Weather.css";

export default function Weather() {
    const input = document.querySelector("input").value;
    const [cityName, setCityName] = useState(input);
    const [weather, setWeather] = useState(0);

    useEffect(() => {
        fetch("https://www.weatherapi.com/")
            .then(res => res.json())
            .then(json => console.log(json));

        setWeather(fetch("https://www.weatherapi.com/").temp_c);
    }, [])

    return (
        <main>
            <h1>Weather app</h1>
            <br />
            <input type="text" placeholder="Enter an city" />
            <br />
            <h1 id="cityName"{... setCityName(cityName)}></h1>
            <h2 id="weather">{weather}</h2>
        </main>
    )
}