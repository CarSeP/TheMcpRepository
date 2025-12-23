import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from "zod";
import fs from "node:fs";

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
        return {
          content: [
            {
              type: "text",
              text: "file created",
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
    "get-file-content",
    "tool for obtaining the content of a file in text format",
    {
      filePath: z.string().describe("file path"),
    },
    async ({ filePath }) => {
      try {
        const data = fs.readFileSync(filePath, "utf8");
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                file: filePath,
                content: data,
              }),
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
    "delete-file",
    "tool for delete file",
    { path: z.string().describe("") },
    async ({ path }) => {
      try {
        fs.unlinkSync(path);
        return {
          content: [
            {
              type: "text",
              text: "delete file",
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
    "check-file-exists",
    "tool to check if a file exists",
    {
      filePath: z.string().describe("The path to the file to check"),
    },
    async ({ filePath }) => {
      try {
        const exists = fs.existsSync(filePath);
        return {
          content: [
            {
              type: "text",
              text: `file exists: ${exists}`,
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
    "rename-file",
    "tool to rename a file, It also works for moving a file.",
    {
      oldPath: z.string().describe("The current path of the file"),
      newPath: z.string().describe("The new path for the file"),
    },
    async ({ oldPath, newPath }) => {
      try {
        fs.renameSync(oldPath, newPath);
        return {
          content: [
            {
              type: "text",
              text: "file renamed",
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
