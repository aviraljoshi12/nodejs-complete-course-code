import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

readStream.setEncoding("utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.destroy();
