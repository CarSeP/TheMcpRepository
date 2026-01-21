import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import agentsManifestResource from "./agentsManifest";
import projectResource from "./project";

export const registerResources = (server: McpServer) => {
  agentsManifestResource(server);
  projectResource(server);
};
