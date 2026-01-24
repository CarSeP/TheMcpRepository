import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import fs from "node:fs";
import { returnData } from "../utils/returnData";

export default async (server: McpServer) => {
  server.tool(
    "create-or-update-file",
    "tool for creating or editing the content of a file",
    {
      filePath: z.string().describe("file path"),
      fileContent: z.string().describe("file contents"),
    },
    async ({ filePath, fileContent }) => {
      try {
        fs.writeFileSync(filePath, fileContent);
        return returnData("file created");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "get-file-content",
    "tool for obtaining the content of a file in text format",
    {
      filePath: z.string().describe("file path"),
    },
    async ({ filePath }) => {
      try {
        const data = fs.readFileSync(filePath, "utf8");
        return returnData(
          JSON.stringify({
            file: filePath,
            content: data,
          }),
        );
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "delete-file",
    "tool for delete file",
    { path: z.string().describe("file path") },
    async ({ path }) => {
      try {
        fs.unlinkSync(path);
        return returnData("delete file");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "check-file-exists",
    "tool to check if a file exists",
    {
      filePath: z.string().describe("The path to the file to check"),
    },
    async ({ filePath }) => {
      try {
        const exists = fs.existsSync(filePath);
        return returnData(`file exists: ${exists}`);
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );

  server.tool(
    "rename-file",
    "tool to rename a file, It also works for moving a file.",
    {
      oldPath: z.string().describe("The current path of the file"),
      newPath: z.string().describe("The new path for the file"),
    },
    async ({ oldPath, newPath }) => {
      try {
        fs.renameSync(oldPath, newPath);
        return returnData("file renamed");
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );
};
