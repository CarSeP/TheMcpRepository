import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { returnData } from "../utils/returnData";

interface Params extends RequestInit {
  method?: string;
}

export default async (server: McpServer) => {
  server.tool(
    "handle-fetch",
    "tool for making HTTP requests to external APIs and fetching data in JSON or text format. Supports various HTTP methods, custom headers, and request bodies.",
    {
      url: z.string().describe("The URL to fetch data from"),
      method: z.enum([
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH",
        "HEAD",
        "OPTIONS",
        "CONNECT",
        "TRACE",
      ]).describe("The HTTP method to use for the request"),
      body: z.string().optional().describe("The request body as a string (ignored for GET and HEAD methods)"),
      headers: z.string().optional().describe("JSON string of headers to include in the request"),
      output: z.enum(["json", "text"]).describe("The format of the response data to return"),
    },
    async ({ url, method, body, headers, output }) => {
      let params: Params = {};

      params.method = method;

      if (body && method !== "GET" && method !== "HEAD") {
        params.body = body;
      }

      if (headers) {
        params.headers = JSON.parse(headers) as HeadersInit;
      }

      try {
        const response = await fetch(url, params);

        if (!response.ok) {
          return returnData(
            `Error fetching data, status: ${response.status}`,
            true,
          );
        }

        const data = await response[output]();

        return returnData(JSON.stringify(data));
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );
};
