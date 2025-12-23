import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import fs from "node:fs";

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
        return {
          content: [
            {
              type: "text",
              text: "directory created",
            },
          ],
        };
      } catch (err) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `${err}`,
            },
          ],
        };
      }
    }
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
        return {
          content: [
            {
              type: "text",
              text: "directory deleted",
            },
          ],
        };
      } catch (err) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `${err}`,
            },
          ],
        };
      }
    }
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
        return {
          content: [
            {
              type: "text",
              text: "directory renamed",
            },
          ],
        };
      } catch (err) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `${err}`,
            },
          ],
        };
      }
    }
  );

  server.tool(
    "check-directory-exists",
    "tool to check if a directory exists",
    {
      dirPath: z.string().describe("The path to the directory to check"),
    },
    async ({ dirPath }) => {
      try {
        const exists = fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
        return {
          content: [
            {
              type: "text",
              text: `directory exists: ${exists}`,
            },
          ],
        };
      } catch (err) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `${err}`,
            },
          ],
        };
      }
    }
  );
};
