import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import getSystemInfoTool from "./getSystemInfo";

export const registerTools = (server: McpServer) => {
  getSystemInfoTool(server);
};
