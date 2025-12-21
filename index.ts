import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { server } from "./src/main";

async function init() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("MCP Server is running");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

init();
