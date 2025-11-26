const fs = require("fs");

const fileData = fs.readFileSync("./.env").toString();
console.log("fileData", fileData);
console.log(fileData.split("\n"));
fileData.split(/\r?\n/).forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value;
  console.log(key, value);
});

setInterval(() => {
  const a = process.env;
  console.log("hii");
}, 1000);
