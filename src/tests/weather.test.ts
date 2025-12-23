import { getWeatherData } from "../utils/weather";

describe("weather Tests", () => {
  test("should fetch weather data for given coordinates", async () => {
    const data = await getWeatherData(1, 1);

    expect(data).toMatchObject({
      isError: false,
      content: {
        latitude: expect.any(Number),
        longitude: expect.any(Number),
        temperature: {
          unit: "°C",
          value: expect.any(Number),
        },
        time: {
          unit: "iso8601",
          value: expect.any(String),
        },
        windSpeed: {
          unit: "km/h",
          value: expect.any(Number),
        },
        relativeHumidity: {
          unit: "%",
          value: expect.any(Number),
        },
      },
    });
  });

  test("should return error for invalid coordinates", async () => {
    const data = await getWeatherData(91, 91);

    expect(data).toMatchObject({
      isError: true,
      error: expect.any(String),
    });
  });
});
