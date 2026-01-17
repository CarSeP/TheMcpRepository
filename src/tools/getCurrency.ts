import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { returnData } from "../utils/returnData";
import { getCurrency, getCurrencyDifference } from "../utils/currency";
import z from "zod";

export default async (server: McpServer) => {
  server.tool(
    "get-currency-code",
    "Retrieves a comprehensive list of available currency codes and their full names from the currency API.",
    {},
    async () => {
      const data = await getCurrency();

      if (data.isError) {
        return returnData(JSON.stringify(data), true);
      }

      return returnData(JSON.stringify(data.content));
    },
  );

  server.tool(
    "get-currency-difference",
    "Fetches the current exchange rates for a specified currency code, showing its value relative to other currencies.",
    {
      currencyCode: z
        .string()
        .describe(
          "The ISO currency code (e.g., 'usd', 'eur') to retrieve exchange rates for",
        ),
    },
    async ({ currencyCode }) => {
      const data = await getCurrencyDifference(currencyCode);

      if (data.isError) {
        return returnData(JSON.stringify(data), true);
      }

      return returnData(JSON.stringify(data.content));
    },
  );
};
