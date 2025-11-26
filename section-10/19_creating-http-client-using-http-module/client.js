import http from "http";

//generally we do not create client at node.js
//client request is a writable stream
//whereas server request was a readable stream

//initially it requests at port 80
const clientRequest = http.request({
  method: "POST",
  hostname: "192.168.1.9",
  port: 4000,
});

clientRequest.end("Hii I am client");

//client response is a readable stream
//whereas server response was a writable stream
clientRequest.on("response", (response) => {
  response.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});
