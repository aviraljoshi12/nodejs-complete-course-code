import fs from "fs";

const fd = fs.openSync("text.txt");
console.log(fd);

fs.read(fd, (err, bytesRead, buffData) => {
  console.log(err);
  console.log(bytesRead);
  console.log(buffData);
  console.log(buffData.toString());
});
