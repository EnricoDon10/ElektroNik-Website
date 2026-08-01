import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import {
  extname,
  isAbsolute,
  join,
  normalize,
  relative,
  resolve,
} from "node:path";

const outputDirectory = resolve(process.cwd(), "out");
const argumentsList = process.argv.slice(2);

function readOption(name, fallback) {
  const inlineOption = argumentsList.find((argument) => argument.startsWith(`${name}=`));
  if (inlineOption) {
    return inlineOption.slice(name.length + 1);
  }

  const optionIndex = argumentsList.indexOf(name);
  return optionIndex >= 0 && argumentsList[optionIndex + 1]
    ? argumentsList[optionIndex + 1]
    : fallback;
}

const hostname = readOption("--hostname", process.env.HOSTNAME ?? "localhost");
const portValue = readOption("--port", process.env.PORT ?? "3001");
const port = Number.parseInt(portValue, 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error(`Ungültiger Port: ${portValue}`);
  process.exit(1);
}

try {
  await access(join(outputDirectory, "index.html"));
} catch {
  console.error(
    "Der statische Export fehlt. Bitte zuerst `npm run build` ausführen und danach erneut starten.",
  );
  process.exit(1);
}

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function isInsideOutputDirectory(filePath) {
  const relativePath = relative(outputDirectory, filePath);
  return relativePath === "" || (!relativePath.startsWith("..") && !isAbsolute(relativePath));
}

async function findExportedFile(pathname) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return { status: 400 };
  }

  const normalizedPath = normalize(decodedPath).replace(/^[/\\]+/, "");
  const requestedPath = resolve(outputDirectory, normalizedPath);

  if (!isInsideOutputDirectory(requestedPath)) {
    return { status: 403 };
  }

  const candidates = decodedPath.endsWith("/")
    ? [join(requestedPath, "index.html")]
    : [
        requestedPath,
        ...(extname(requestedPath)
          ? []
          : [`${requestedPath}.html`, join(requestedPath, "index.html")]),
      ];

  for (const candidate of candidates) {
    try {
      const fileStats = await stat(candidate);
      if (fileStats.isFile()) {
        return { filePath: candidate, size: fileStats.size, status: 200 };
      }
    } catch {
      // Den nächsten statischen Exportpfad prüfen.
    }
  }

  const notFoundPath = join(outputDirectory, "404.html");
  const notFoundStats = await stat(notFoundPath);
  return { filePath: notFoundPath, size: notFoundStats.size, status: 404 };
}

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? hostname}`);
    const result = await findExportedFile(requestUrl.pathname);

    if (!result.filePath) {
      response.writeHead(result.status, {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      });
      response.end(result.status === 403 ? "Forbidden" : "Bad Request");
      return;
    }

    const extension = extname(result.filePath).toLowerCase();
    response.writeHead(result.status, {
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
      "Content-Length": result.size,
      "Content-Type": contentTypes.get(extension) ?? "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(result.filePath).pipe(response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Interner Fehler des lokalen Preview-Servers");
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${port} ist bereits belegt. Beispiel für einen anderen Port: npm run preview -- --port 3002`,
    );
  } else {
    console.error(error);
  }

  process.exitCode = 1;
});

server.listen(port, hostname, () => {
  console.log(`ElektroNik-Preview: http://${hostname}:${port}`);
  console.log(`Ausgelieferter Ordner: ${outputDirectory}`);
  console.log("Beenden mit Strg + C");
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
