import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerTools } from "./tools";
import { registerResources } from "./resources";

export const server = new McpServer({
  name: "the-mcp-repository",
  title: "The MCP Repository",
  description: "An MCP server that provides many tools and resources ",
  version: "1.0",
});

registerTools(server);
registerResources(server);
