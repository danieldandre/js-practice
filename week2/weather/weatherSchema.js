import { z } from 'zod';

export const WeatherRequest = z.object({
  city: z.string().min(1),
  units: z.enum(["metric", "imperial", "standard"]).default("metric"),
});

/*
const input = { city: "Lisbon", units: "imperial" };
const badInput = { city: "London", units: "celsius" };

try {
    console.log(WeatherRequest.parse(input));
    console.log(WeatherRequest.parse(badInput));
} catch (error) {
    console.log("Bad Input")
}
*/