// import fs from "node:fs";

// console.log(fs);

//fs is basically an object

//Reading through fs

//readFileSync

//readFileSync is generally prohibited because it works synchronously basically pause the main thread of js

// const contentBuffer = fs.readFileSync("./index.html");
// console.dir(contentBuffer);

//WhEN WE USE readFileSync it will return a buffer

// such as:

// Buffer(249) [Uint8Array] [
//    60,  33,  68,  79,  67,  84,  89,  80,  69,  32, 104, 116,
//   109, 108,  62,  10,  60, 104, 116, 109, 108,  32, 108,  97,
//   110, 103,  61,  34, 101, 110,  34,  62,  10,  32,  32,  60,
//   104, 101,  97, 100,  62,  10,  32,  32,  32,  32,  60, 109,
//   101, 116,  97,  32,  99, 104,  97, 114, 115, 101, 116,  61,
//    34,  85,  84,  70,  45,  56,  34,  32,  47,  62,  10,  32,
//    32,  32,  32,  60, 109, 101, 116,  97,  32, 110,  97, 109,
//   101,  61,  34, 118, 105, 101, 119, 112, 111, 114, 116,  34,
//    32,  99, 111, 110,
//   ... 149 more items
// ]

// const content = contentBuffer.toString();
// console.log(content);

//If we do this then we can see desired output such as:

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Hello from Vite Server</h1>
//   </body>
// </html>

//Using second parameter, now we will directly get a strict, in second param we can provide character encoding

// const content = fs.readFileSync("./index.html", "utf-8");
// console.log(content);

//reading using readFile

// fs.readFile("./index.html", (err, data) => {
//   const content = data.toString();
//   console.log(content);
// });

// console.log("END");

// OUTPUT : END is Printing first, so not blocking the code

// END
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Hello from Vite Server</h1>
//   </body>
// </html>

//But we will also not use this readFile much

// We will use:

import fs from "node:fs/promises";

// It has only one method readFile and nothing like readFileSync

// fs.readFile("./index.html");

//This returns a promise, so

const contentBuffer = await fs.readFile("./index.html");
const content = contentBuffer.toString();

console.log(content);

console.log("End");
//By this above way our main thread will not wait, It does feel like its blocking, but it does not, we can confirm this by using a setInterval
// Method above it if we readFileSync from normal fs, it will first read the file, completes reading it and then interval starts executing
//But by this way that interval will be executing internally
