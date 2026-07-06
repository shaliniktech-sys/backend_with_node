// Main entry file of the project.
// In package.json, "main": "index.js" tells Node.js that this is the starting file.

const http = require("http"); // Import HTTP module to create a web server.
const fs = require("fs"); // Import File System module to perform file operations.

// Create an HTTP server.
// The callback function executes whenever a client sends a request.
const myServer = http.createServer((req, res) => {

    // Create a log message containing the current timestamp and requested URL.
    const log = `${Date.now()}: ${req.url} New Request Received \n`;

    // Append the log message to log.txt asynchronously.
    fs.appendFile("./log.txt", log, (err, data) => {

        // Route the request based on the requested URL.
        switch (req.url) {

            // Home Route
            case '/':
                res.end("HOMEPAGE");
                break;

            // About Route
            case '/about':
                res.end("Hi! I am SHALINI");
                break;

            // Default Route (404)
            default:
                res.end("404 error page not found");
        }

    });

});

// Start the server on Port 8000.
myServer.listen(8000, () => {
    console.log("Server started on Port 8000");
});

/*
===========================================
PROJECT FLOW
===========================================

Browser
    │
    ▼
Client sends Request
    │
    ▼
HTTP Server receives Request
    │
    ▼
Creates Log Entry
    │
    ▼
Appends Log to log.txt
    │
    ▼
Checks req.url
    │
    ▼
Returns Appropriate Response
    │
    ▼
Browser Displays Output

===========================================
Concepts Learned
===========================================

✔ HTTP Module
✔ File System Module
✔ Creating an HTTP Server
✔ Request Listener
✔ Request Object (req)
✔ Response Object (res)
✔ Routing using switch(req.url)
✔ Asynchronous File Handling
✔ Logging Requests
✔ Listening on a Port
*/
