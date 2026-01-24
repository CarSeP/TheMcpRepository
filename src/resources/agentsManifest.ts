import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs";
import { returnResource } from "../utils/returnData";

export default async (server: McpServer) => {
  server.resource(
    "agents-manifest",
    "agents://docs/main",
    {},
    async (uri: URL) => {
      try {
        const data = fs.readFileSync("./AGENTS.md", "utf8");
        return returnResource(JSON.stringify(data), uri);
      } catch (error) {
        return returnResource(`${error}`, uri, true);
      }
    },
  );
};
