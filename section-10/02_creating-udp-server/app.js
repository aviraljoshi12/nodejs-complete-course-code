import dgram from "node:dgram";

const socket = dgram.createSocket("udp4");

socket.on("message", (a, b) => {
  console.log("a is the message in buffer =>>>>>>", a);
  console.log("message in string :", a.toString());
  console.log(
    "b is the device info (from we are sending message), basically remote address =>>>>>>",
    b
  );
});

//Here I have downloaded a udp application in phone from there I am sending a message

// socket.bind({ port: 4000 }, () => {
//   console.log(socket.address());
//   const address = socket.address().port;
//   console.log(`Listening on port ${address}`);
// });

//We cant see this on browser because browser does not understand UDP.

//Now I want to send the message form lappy to phone, means basically I want the phone to act as a server now, so I need to comment out the bind method
//Because bind method creates a server
//In my mobile appliction, I have created a server and am listening in port 3000

//192.168.1.3 is my phones ip
socket.send("Hi from Lappy", 3000, "192.168.1.3");

//In my mobile,I can see :
//Message Received from 192.168.1.9:34688 < "Hi from Lappy"
