import { timeEnd } from "console";
import fs from "fs";

// let data = "";
// for (let i = 1; i <= 5000; i++) {
//   data += i + "\n"; // each number on a new line
// }
console.time();
// fs.appendFile("numbers.txt", data, () => {});

const writeStream = fs.createWriteStream("streamedNumber.txt");

for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}, `);
}

writeStream.end();

writeStream.on("finish", () => {
  console.timeEnd();
});
