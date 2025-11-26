import http from "http";
import fs from "fs/promises";

// Basically here we will create a server
// Creating a server we will seein some another lecture
// Right now we want to see that how browsers works
// Basically browsers uses streams

const server = http.createServer(async (req, res) => {
  // req internally uses readable stream, so we can use all properties of readable streams here
  // res internally uses writable stream, so we can use all properties of writable streams here
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "image/webp");

  // const fileHandle = await fs.open("abc.txt");
  const fileHandle = await fs.open("river.webp");
  const readStream = fileHandle.createReadStream({ highWaterMark: 1000 });

  readStream.on("data", (chunk) => {
    res.write(chunk);

    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 10);
  });

  readStream.on("end", () => {
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});

// My abc file has this content "abcdefghijklmnopqrstuvwxyz"
// each character will be printed after 500ms
