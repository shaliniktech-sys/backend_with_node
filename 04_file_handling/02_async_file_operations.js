// Asynchronous File Handling in Node.js

const fs = require("fs");

// Write data asynchronously
fs.writeFile("./text_async.txt", "Hello World Async", (err) => {
    if (err) {
        console.log(err);
    }
});

// Read data asynchronously
fs.readFile("./contacts.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }

    console.log(data);
});
