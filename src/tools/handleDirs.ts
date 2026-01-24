import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import fs from "node:fs";
import { returnData } from "../utils/returnData";

export default async (server: McpServer) => {
  server.tool(
    "create-directory",
    "tool for creating a directory",
    {
      dirPath: z.string().describe("directory path"),
    },
    async ({ dirPath }) => {
      try {
        fs.mkdirSync(dirPath, { recursive: true });
        return returnData("directory created");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "delete-directory",
    "tool for deleting a directory",
    {
      dirPath: z.string().describe("directory path"),
    },
    async ({ dirPath }) => {
      try {
        fs.rmSync(dirPath, { recursive: true, force: true });
        return returnData("directory deleted");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "rename-directory",
    "tool to rename a directory, It also works for moving a directory.",
    {
      oldPath: z.string().describe("The current path of the directory"),
      newPath: z.string().describe("The new path for the directory"),
    },
    async ({ oldPath, newPath }) => {
      try {
        fs.renameSync(oldPath, newPath);
        return returnData("directory renamed");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "check-directory-exists",
    "tool to check if a directory exists",
    {
      dirPath: z.string().describe("The path to the directory to check"),
    },
    async ({ dirPath }) => {
      try {
        const exists =
          fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
        return returnData(`directory exists: ${exists}`);
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );
};
