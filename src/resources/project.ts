import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs";
import { returnResource } from "../utils/returnData";

export default async (server: McpServer) => {
  server.resource(
    "project-dependencies",
    "config://project/package.json/dependencies",
    {},
    async (uri) => {
      try {
        const data = fs.readFileSync("./package.json", "utf8");
        const { dependencies, devDependencies } = JSON.parse(data);

        return returnResource(
          JSON.stringify({ dependencies, devDependencies }),
          uri,
        );
      } catch (err) {
        return returnResource(`${err}`, uri, true);
      }
    },
  );

  server.resource(
    "project-scripts",
    "config://project/package.json/scripts",
    {},
    async (uri) => {
      try {
        const data = fs.readFileSync("./package.json", "utf8");
        const { scripts } = JSON.parse(data);

        return returnResource(JSON.stringify({ scripts }), uri);
      } catch (err) {
        return returnResource(`${err}`, uri, true);
      }
    },
  );
};
