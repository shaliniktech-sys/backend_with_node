const fs = require("fs");

// Create or overwrite a file
fs.writeFileSync("./text_sync.txt", "Hello World");

// Read file contents
const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

// Append data to the file
fs.appendFileSync(
    "./text_sync.txt",
    `\n${new Date().toLocaleString()}\nHey there!\n`
);

// Copy the file
fs.cpSync("./contact.txt", "./contact_copy.txt");

// Delete the copied file
fs.unlinkSync("./contact_copy.txt");

// Get file information
const stats = fs.statSync("./text_sync.txt");
console.log(stats.isFile()); // Returns true if it's a file

// Create nested directories
fs.mkdirSync("./my-docss/a/b", {
    recursive: true,
});
