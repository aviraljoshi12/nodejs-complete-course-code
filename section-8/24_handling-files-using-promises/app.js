import fs from "fs/promises";

const fileHandle = await fs.open("text.txt", "r+");

const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});
console.log(buffer);
console.log(bytesRead);

const { buffer: writtenBuffer, bytesWritten } = await fileHandle.write("hii");

console.log(writtenBuffer);
console.log(bytesWritten);

fileHandle.close();
