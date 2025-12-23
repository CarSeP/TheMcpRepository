import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import getSystemInfoTool from "./getSystemInfo";
import getWeatherTool from "./getWeather";
import handleFilesTool from "./handleFiles";
import handleDirsTool from "./handleDirs";

export const registerTools = (server: McpServer) => {
  getSystemInfoTool(server);
  getWeatherTool(server);
  handleFilesTool(server);
  handleDirsTool(server);
};
