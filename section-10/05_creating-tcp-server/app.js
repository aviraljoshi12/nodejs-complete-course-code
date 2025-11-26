import net from "node:net";

// net.createServer creates a server
// net.createConnection creates a client
// nothing like createSocket, which was in UDP

const server = net.createServer();

// server.listen(4000);
// server.on("listening", () => {
//   console.log("Server started on port 4000");
// });

//The above commented code is equivalent to

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started on port 4000");
});

//To check if any client is connected or not
//In my mobile I basically wrote the ip of my lappy where this server is started, and the port number which is 4000
//As I did Connect from Server from my phone in my log I was able to saw Client Connected

//But how can we see what data is being send from our client to server
//Or form our server to client
//We know, we need a socket for communication, client already has a socket, because its a full fledged app in my phone
//To use a socket with our server we should know, the connection method, already provide us a socket by a callback as you can see below
//UDP's socket was not much powerful, but this socket is a duplex stream

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    //Now basically here I can see the message in log, which I have sent from the phone
    console.log(chunk.toString());

    //This message will be sent to our client from server
    socket.write("HTTP\n\nGot your message");
  });
  console.log(socket.address()); //Address of our lappy where server has been started
  //The below three logs give the info of the client, and its just a string, not an object
  console.log(socket.remoteAddress);
  console.log(socket.remotePort);
  console.log(socket.remoteFamily);

  console.log("Client Connected");

  //When the client gets disconnected
  socket.on("close", () => {
    console.log("Client Disconnected");
  });
});
