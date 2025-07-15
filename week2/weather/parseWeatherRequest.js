import { WeatherRequest } from "./weatherSchema.js";

export function parseWeatherRequest(input) {
    return WeatherRequest.parse(input);
}