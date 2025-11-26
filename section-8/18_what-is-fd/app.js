import fs from "fs";

fs.open("text.txt", (err, fd) => {
  console.log(fd);
});
fs.open("package.json", (err, fd) => {
  console.log(fd);
});
