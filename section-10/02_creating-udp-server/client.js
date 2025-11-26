import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

// socket.on("message", (a, b) => {
//   console.log("a is the message in buffer =>>>>>>", a);
//   console.log("message in string :", a.toString());
//   console.log(
//     "b is the device info (from we are sending message), basically remote address =>>>>>>",
//     b
//   );
// });

socket.send("Hi from Lappy", 4000, "192.168.1.9");
