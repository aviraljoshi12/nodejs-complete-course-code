import fs from "fs/promises";

const fileBuff = await fs.readFile("chars.txt");
console.log(fileBuff.toString());
