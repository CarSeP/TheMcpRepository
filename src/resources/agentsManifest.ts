import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs";

export default async (server: McpServer) => {
  server.resource("agents-manifest", "agents://docs/main", {}, async (uri) => {
    try {
      const data = fs.readFileSync("./AGENTS.md", "utf8");
      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(data),
          },
        ],
      };
    } catch (error) {
      return {
        contents: [
          {
            uri: uri.href,
            text: `${error}`,
          },
        ],
      };
    }
  });
};
