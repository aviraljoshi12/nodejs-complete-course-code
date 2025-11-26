import fs from "fs";

const writeStream = fs.createWriteStream("file.txt");

// console.log(writeStream.writableHighWaterMark);
// By default value = 16kb

writeStream.write("123");
writeStream.write("ABC");

writeStream.on("finish", () => {
  console.log("Finished");
});
writeStream.on("close", () => {
  console.log("closed");
});

//finished happen earlier then closed

// Also suppose we sometimes need to send small Data we can directly do it using
// writeStream.end("small data")
