import fs from "fs/promises";

const fileHandle = await fs.open("text.txt", "r+");

const readStream = fileHandle.createReadStream();

readStream.setEncoding("utf-8");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

const writeStream = fileHandle.createWriteStream();

writeStream.write("hiiiiiiiiiiiiiiiii");
