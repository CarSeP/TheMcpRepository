import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import { postgresQuery } from "../utils/db";
import { returnData } from "../utils/returnData";

export default async (server: McpServer) => {
  server.tool(
    "handle-postgres",
    "Execute PostgreSQL queries on a specified database",
    {
      connectionString: z.string().describe("PostgreSQL connection string (e.g., postgresql://user:password@host:port/database)"),
      query: z.string().describe("SQL query to execute on the database"),
    },
    async ({ connectionString, query }) => {
      const data = await postgresQuery(connectionString, query);

      if (data.isError) {
        return returnData(JSON.stringify(data), true);
      }

      return returnData(JSON.stringify(data.content));
    },
  );
};
