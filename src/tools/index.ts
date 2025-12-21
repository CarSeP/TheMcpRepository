import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import getSystemInfoTool from "./getSystemInfo";
import getWeatherTool from "./getWeather";

export const registerTools = (server: McpServer) => {
  getSystemInfoTool(server);
  getWeatherTool(server);
};
