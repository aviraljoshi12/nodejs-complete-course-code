import fs from "fs";

console.time();

const buff = Buffer.allocUnsafe(4);

const fd = fs.openSync("numbers.txt", "w");

let totalBytesWrittenInBuffer = 0;

for (let i = 1; i <= 10; i++) {
  const str = `${i}, `;
  const bytesWritten = buff.write(str, totalBytesWrittenInBuffer);
  totalBytesWrittenInBuffer += bytesWritten;
  if (totalBytesWrittenInBuffer === buff.byteLength) {
    fs.writeSync(fd, buff);
    totalBytesWrittenInBuffer = 0;
  }
}

fs.closeSync(fd);
console.timeEnd();
