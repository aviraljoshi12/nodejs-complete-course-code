import fs from "node:fs/promises";

//If there is no file such as this it will create a new file of this name, or if file is present it will update that file

// fs.writeFile("file-1.txt", "Hello");
// fs.writeFile("file-1.txt", "World");

//appends the file, will not remove original content as writeFile does it will add the content
//It also creates a new file

// fs.appendFile("file-1.txt", "HIthere");

//Reading buffer from a file from Desktop
const contentBuffer = await fs.readFile("/home/aviral/Desktop/file-1.txt");

//Creating that file and adding the content in it, the content is a string and not a buffer
fs.writeFile("file-1.txt", contentBuffer);
