import http from "http";

const server = http.createServer((req, res) => {
  res.end("Or varun, kya haal");
});

server.listen(4000, () => {
  console.log("Server is listening on localhost, port 4000");
});
