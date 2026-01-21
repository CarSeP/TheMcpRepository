import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { returnData } from "../utils/returnData";
import sharp from "sharp";
import z from "zod";

export default async (server: McpServer) => {
  server.tool(
    "convert-image",
    "Converts an image to a different format using the Sharp library.",
    {
      filePath: z.string().describe("The path to the input image file."),
      fileOutput: z
        .string()
        .describe("The path where the converted image will be saved."),
      fileExtension: z
        .enum(["png", "webp", "jpeg", "jpg", "tiff", "gif", "avif", "heif"])
        .describe(
          "The output image format. Available options: png, webp, jpeg/jpg, tiff, gif, avif, heif.",
        ),
    },
    async ({ filePath, fileOutput, fileExtension }) => {
      try {
        const info = await sharp(filePath)
          .toFormat(fileExtension)
          .toFile(fileOutput);

        return returnData(JSON.stringify(info));
      } catch (err) {
        return returnData(`${err}`, true);
      }
    },
  );
};
