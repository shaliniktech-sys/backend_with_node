// Synchronous File Handling in Node.js

const fs = require("fs");

// Write data to a file
fs.writeFileSync("./text_sync.txt", "Hello World");

// Read data from a file
const result = fs.readFileSync("./contacts.txt", "utf-8");

console.log(result);
