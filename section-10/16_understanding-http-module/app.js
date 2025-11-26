import http from "node:http";

//Phle http ka basic tarike se server kaise banta hai vo dekhte hai

// const server = http.createServer();

//yaha pe bhi HTTP\n\n likhna pdega agr UI mai message dekhna hai to
//ye basically agr hum connection event se connecvt krte hai to TCP wale ke through he connect hota hai
//or socket bhi same tcp wala he hota hai

// server.on("connection", (socket) => {
//   socket.end("HTTP/1.1 200 OK\n\nHii from http server");
// });

// Comparing TCP with HTTP
// TCP mai hum esa krte the:

// const server = net.createServer();

// server.on("connection", (socket) => {
//   socket.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
// });

//hume request event use krte hai http ke lie
//yaha socket nhi milta
//yaha do object milte hai request or response
//request readable stream hota hai
//response writable stream hota hai
//dono request or response socket ke uper he based hote hai (socket khud ek duplex stream thi)
//to request pe hum on property lga skte hai, since ye ek readable stream hai
//similarly response pe write event use kr skte hai, since ye writable stream hai
//just ye yaad rkhna hai, we need to end the response, kuki writable stream ko .end() krna he hota hai
//or instead of .end() we can set "Content-Length" header

// server.on("request", (request, response) => {
//   console.log("Got the request");
//   //   request.on("data", (chunk) => {
//   //     console.log(chunk.toString());
//   //   });
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from http server.");
//   response.end();
// });

//The above code is equivalent to:
const server = http.createServer((request, response) => {
  console.log("Got the request");
  request.on("data", (chunk) => {
    //ye console.log ki value terminal mai nahi dikhegi
    //kuki hum just apne localhost mai jare hai ya apne ip_address:4000 mai jare hai
    //ye ek get request hoti hai or get request ke wqt
    //or GET requests mein koi body (data payload) nahi hoti hai.
    //isliye, jab tak client aapke server ko koi data nahi bhejta, tab tak yeh line execute nhi hogi
    console.log(chunk.toString());
  });
  response.setHeader("Content-Length", "23");
  response.write("Hello from http server.");
  response.end();
});

server.listen(4000, "0.0.0.0", () => {
  console.log("Server Started");
});
