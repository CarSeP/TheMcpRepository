import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import os from "os";

export default async (server: McpServer) => {
  server.tool(
    "get-system-info",
    "tool for obtaining the following system information: type, platform, hostname, machine, arch, release, CPU model, total memory, free memory, username, and homedir",
    {},
    async () => {
      const { username, homedir } = os.userInfo();

      const info = {
        type: os.type(),
        platform: os.platform(),
        hostname: os.hostname(),
        machine: os.machine(),
        arch: os.arch(),
        release: os.release(),
        cpuModel: os.cpus()[0].model,
        totalmem: `${os.totalmem()} Bytes`,
        freemem: `${os.freemem()} Bytes`,
        username,
        homedir,
      };

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(info),
          },
        ],
      };
    }
  );
};
