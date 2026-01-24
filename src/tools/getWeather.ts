import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { getWeatherData } from "../utils/weather";
import { getCoordinates } from "../utils/coordinates";
import { returnData } from "../utils/returnData";

export default async (server: McpServer) => {
  server.tool(
    "get-weather-by-coordinates",
    "tool for obtaining meteorological information using longitude and latitude",
    {
      latitude: z.number().describe("latitude"),
      longitude: z.number().describe("longitude"),
    },
    async ({ latitude, longitude }) => {
      const data = await getWeatherData(latitude, longitude);
      if (data.isError) {
        return returnData(JSON.stringify(data), true);
      }
      return returnData(JSON.stringify(data.content));
    },
  );

  server.tool(
    "get-weather-by-city",
    "tool for obtaining weather information by entering the name of the city",
    {
      city: z.string().describe("city name"),
    },
    async ({ city }) => {
      const data = await getCoordinates(city);

      if (data.isError) {
        return returnData(JSON.stringify(data), true);
      }

      if (data.content) {
        const { latitude, longitude } = data.content;

        return returnData(
          JSON.stringify((await getWeatherData(latitude, longitude)).content),
        );
      }

      return returnData("error obtaining data from the API", true);
    },
  );
};
