// =======================================
// 1. Running JavaScript with Node.js
// =======================================

console.log("Hey there! I'm JS");

// Execute:
// node filename.js
// or simply
// node filename

// =======================================
// 2. Browser vs Node.js
// =======================================

// Browser:

// console.log(window);
// Output:
// Window { ... }

// Node.js:

// console.log(window);
// Output:
// ReferenceError: window is not defined

// ---------------------------------------

// Browser:

// alert("Hey");

// Node.js:

// alert("Hey");
// Output:
// ReferenceError: alert is not defined

// Conclusion:
// Browser-specific APIs like window, document, and alert()
// are not available in Node.js.
//
// Instead, Node.js provides server-side features like:
// - File System
// - Networking
// - Processes
// - OS utilities

// =======================================
// 3. Initializing a Node.js Project
// =======================================

// Step 1:
// Run:

// npm init

// This initializes a Node.js project.

// Step 2:
// A package.json file is created.

// Example:

// {
//   "name": "git",
//   "version": "1.0.0",
//   "main": "install.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "type": "commonjs"
// }

// Step 3:
// Add a start script:

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "start": "node install.js"
// }

// Step 4:
// Run:

// npm start
