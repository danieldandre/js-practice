import { parseWeatherRequest } from "./parseWeatherRequest.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve() + "/week2/weather/.env"});

const API_KEY = process.env.OWN_KEY;
if (!API_KEY) {
    throw new Error("Missing OpenWeather API key. Set OWN_KEY env variable.");
}

export async function fetchWeather(cityRaw, unitsRaw) {
    const { city, units } = parseWeatherRequest({ city:cityRaw, units:unitsRaw });
    await new Promise(r => setTimeout(r, 500));

    try {
        const url_location = new URL(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const location = await(await fetch(url_location)).json();
        const url_weather = new URL(`https://api.openweathermap.org/data/3.0/onecall?lat=${location[0].lat}&lon=${location[0].lon}&units=${units}&appid=${API_KEY}`);
        return await(await fetch(url_weather)).json();
    } catch (error) {
        console.error("[fetchWeather] failed:", err.message);
    }
}


fetchWeather("Lisbon").then(data => console.log(data))