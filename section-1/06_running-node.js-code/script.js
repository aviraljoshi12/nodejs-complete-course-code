const fs = require("fs");

const text = fs.readFileSync("/home/aviral/Desktop/text.txt");
console.log(text.toString());
console.log(global);
console.log("End");
