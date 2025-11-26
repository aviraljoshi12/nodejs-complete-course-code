import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello from HTTP Module");
});

server.listen(3000, () => {
  console.log("Http listening on port 3000");
});
