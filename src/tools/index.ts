import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import getSystemInfoTool from "./getSystemInfo";
import getWeatherTool from "./getWeather";
import handleFilesTool from "./handleFiles";
import handleDirsTool from "./handleDirs";
import handleFetchTool from "./handleFetch";
import getCurrencyTool from "./getCurrency";
import handleDatabasesTool from "./handleDatabases";
import convertFilesTool from "./convertFiles";

export const registerTools = (server: McpServer) => {
  getSystemInfoTool(server);
  getWeatherTool(server);
  handleFilesTool(server);
  handleDirsTool(server);
  handleFetchTool(server);
  getCurrencyTool(server);
  handleDatabasesTool(server);
  convertFilesTool(server);
};
