import { Buffer } from "buffer";

// Two ways of creating buffer:
// One by .alloc() method
// One by using already created ArrayBuffer from Buffer.from() method

// const nodeBuffer = Buffer.alloc(4);

const a = new ArrayBuffer(4);

const nodeBuffer = Buffer.from(a);

// console.log(nodeBuffer);

//It will direct give the string text (if there is any), we dont have any right now
//But if it would be a normal buffer that this toString property would have directly separate numbers by comma
//So for this buffer this method might be overwrited
//No need of using text decoder here
console.log(nodeBuffer.toString());
