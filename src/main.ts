import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools";

export const server = new McpServer({
  name: "Mcp server",
  version: "0.1",
});

registerTools(server);
