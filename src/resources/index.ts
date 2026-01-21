import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import agentsManifestResource from "./agentsManifest";

export const registerResources = (server: McpServer) => {
  agentsManifestResource(server);
};
