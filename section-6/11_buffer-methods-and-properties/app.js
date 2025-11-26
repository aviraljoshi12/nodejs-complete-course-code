import { Buffer, constants } from "buffer";

/////////////////////////*****************************Methods***************************** *//////////////////////////////////

/****** Buffer.from ******/
// const nodeBuffer = Buffer.from("Hello World!");
// console.log(nodeBuffer.toString());

/****** Buffer.write ******/
//Cant simply pass a string here
const nodeBuffer = Buffer.alloc(8);
//Now with write method we can read it
nodeBuffer.write("abc");
// console.log(nodeBuffer.toString());

/****** Buffer.toJSON ******/
//Will get an object, data will be in form of arra
// console.log(nodeBuffer.toJSON());
// Output:
// {
//   type: 'Buffer',
//   data: [
//     97, 98, 99, 0,
//      0,  0,  0, 0
//   ]
// }

/****** Buffer.subarray ******/
//Just like slice method
// console.log(nodeBuffer.subarray(2).toString());

/****** Buffer.copy ******/
// const nodeBuffer2 = Buffer.alloc(8);

// nodeBuffer.copy(nodeBuffer2, 0, 0, 1);
// console.log(nodeBuffer2.toString());

/****** Buffer.includes ******/
/****** Buffer.fill ******/
/****** Buffer.readInt8 ******/
/****** Buffer.writeInt8 ******/
/****** Buffer.at ******/

/////////////////////////*****************************Properties***************************** *//////////////////////////////////
console.log(nodeBuffer.buffer);
console.log(nodeBuffer.byteLength);
console.log(nodeBuffer.byteOffset);
console.log(nodeBuffer.length);
