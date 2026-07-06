// URL Handling in Node.js

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {

    // Ignore browser's automatic favicon request
    if (req.url === "/favicon.ico") return res.end();

    // Parse the URL
    const myURL = url.parse(req.url, true);

    console.log("Path:", myURL.pathname);
    console.log("Query Parameters:", myURL.query);

    // Log every request
    const log = `${Date.now()}: ${req.method} ${req.url}\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log(err);
            return res.end("Internal Server Error");
        }

        switch (myURL.pathname) {
            case "/":
                res.end("Homepage");
                break;

            case "/about":
                const username = myURL.query.myname || "Guest";
                res.end(`Hello ${username}, Welcome to the About Page`);
                break;

            default:
                res.end("404 Not Found");
        }
    });

});

myServer.listen(7000, () => {
    console.log("Server has started on port 7000!");
});
