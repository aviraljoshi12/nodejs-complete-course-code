import { createReadStream } from "node:fs";
import net from "node:net";

// Ye code actually ek low-level HTTP-like file server hai jo net module (raw TCP) use karke client ko ek image file (river.webp) bhej raha hai — bina http module ke.

const server = net.createServer((socket) => {
  // Ye line client ko thoda sa data send karti hai — basically ek HTTP-like response header.
  socket.write("HTTP/1.1\n\n");

  const readStream = createReadStream("river.webp");

  // pipe() ka matlab:
  // “Is stream ka output, directly dusre stream ke input me bhej do.”
  readStream.pipe(socket);
  readStream.on("end", () => {
    console.log("File ended");
  });

  socket.on("data", (chunk) => {
    console.log(chunk.toString());
  });

  socket.on("close", () => {
    console.log(socket.remoteAddress, ": Client disconnected");
  });

  socket.on("error", () => {
    console.log("Client Lost");
  });
  console.log("Client Connected", socket.remoteAddress);
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});
