import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import fs from "node:fs";

export default async (server: McpServer) => {
  server.resource(
    "project-dependencies",
    "config://project/package.json/dependencies",
    {},
    async (uri) => {
      try {
        const data = fs.readFileSync("./package.json", "utf8");
        const { dependencies, devDependencies } = JSON.parse(data);

        return {
          contents: [
            {
              uri: uri.href,
              text: JSON.stringify({ dependencies, devDependencies }),
            },
          ],
        };
      } catch (err) {
        return {
          contents: [
            {
              uri: uri.href,
              text: `${err}`,
            },
          ],
        };
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

        return {
          contents: [
            {
              uri: uri.href,
              text: JSON.stringify({ scripts }),
            },
          ],
        };
      } catch (err) {
        return {
          contents: [
            {
              uri: uri.href,
              text: `${err}`,
            },
          ],
        };
      }
    },
  );
};
