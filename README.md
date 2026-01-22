# The MCP Repository

An MCP server that provides many tools and resources.

## Installation

1.  Clone the repository:

```sh
git clone https://github.com/CarSeP/TheMcpRepository.git
cd TheMcpRepository
```

2.  Install the dependencies:

```sh
npm install
```

## Usage

Test the mcp using inspector.

```bash
npm run inspector
```

Add mcp to any AI agent.

```json
 "mcpServers": {
    "the-mcp-repository": {
      "command": "npx",
      "args": [
        "-y"
        "tsx",
        "index.ts"
      ],
      "cwd": "{project route}",
      "timeout": 30000,
      "trust": false
    },
 }
```

## Testing

```sh
npm run test
```

## Available Tools

<details>
  <summary>Convert Files</summary>
  <b>convert-image:</b> Converts an image to a different format using the Sharp library.
</details>
<details>
  <summary>Get Currency</summary>
  <b>get-currency-code:</b> Retrieves a comprehensive list of available currency codes and their full names from the currency API.
  <br>
  <b>get-currency-difference:</b> Fetches the current exchange rates for a specified currency code, showing its value relative to other currencies.
</details>
<details>
  <summary>Get System Info</summary>
  <b>get-system-info:</b> tool for obtaining the following system information: type, platform, hostname, machine, arch, release, CPU model, total memory, free memory, username, and homedir.
</details>
<details>
  <summary>Get Weather</summary>
  <b>get-weather-by-coordinate:</b> tool for obtaining meteorological information using longitude and latitude.
  <br>
  <b>get-weather-by-city:</b> tool for obtaining weather information by entering the name of the city.
</details>
<details>
  <summary>Handle Databases</summary>
  <b>handle-postgres:</b> Execute PostgreSQL queries on a specified database.
</details>
<details>
  <summary>Handle Dirs</summary>
  <b>create-directory:</b> tool for creating a directory.
  <br>
  <b>delete-directory:</b> tool for deleting a directory.
  <br>
  <b>rename-directory:</b> tool to rename a directory, It also works for moving a directory.
  <br>
  <b>check-directory-exists:</b> tool to check if a directory exists.
</details>
<details>
  <summary>Handle Fetch</summary>
  <b>handle-fetch:</b> tool for making HTTP requests to external APIs and fetching data in JSON or text format. Supports various HTTP methods, custom headers, and request bodies.
</details>
<details>
  <summary>Handle Files</summary>
  <b>create-or-update-file:</b> tool for creating or editing the content of a file.
  <br>
  <b>get-file-content:</b> tool for obtaining the content of a file in text format.
  <br>
  <b>delete-file:</b> tool for delete file.
  <br>
  <b>check-file-exists:</b> tool to check if a file exists.
  <br>
  <b>rename-file:</b> tool to rename a file, It also works for moving a file.
</details>

## Available Resources

<details>
  <summary>AgentsManifestResource</summary>
  <b>agents-manifest:</b> tool for obtaining the content of the AGENTS.md file, which contains information about the available agents.
</details>
<details>
  <summary>ProjectResource</summary>
  <b>project-dependencies:</b> tool for obtaining project dependencies and devDependencies from the package.json file.
  <br>
  <b>project-scripts:</b> tool for obtaining the project's scripts from the package.json file.
</details>
