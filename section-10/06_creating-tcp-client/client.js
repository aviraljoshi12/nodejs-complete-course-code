import net from "node:net";

//We directly get a socket here in createConnection, clients method, with help of this we can communicate between client and server
const socket = net.createConnection({ host: "192.168.1.9", port: 4000 });

setTimeout(() => {
  socket.write("Hii");
  socket.end();
}, 2000);
socket.on("error", () => {
  console.log("Server Lost");
});

socket.on("data", (chunk) => {
  console.log(chunk.toString());
});
