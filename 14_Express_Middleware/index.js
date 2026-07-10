const express = require("express");
const fs = require("fs");

const app = express();

/*
|--------------------------------------------------------------------------
| Built-in Middleware
|--------------------------------------------------------------------------
| express.urlencoded() is a built-in middleware.
|
| It reads form data sent by the client
| (Content-Type: application/x-www-form-urlencoded)
| and converts it into a JavaScript object.
|
| Without this middleware:
| req.body === undefined
|
| With this middleware:
| req.body contains all form fields.
|
| extended: false
| -> Uses Node.js's built-in querystring library.
| -> Suitable for simple key-value pairs.
*/
app.use(express.urlencoded({ extended: false }));

/*
|--------------------------------------------------------------------------
| Custom Middleware
|--------------------------------------------------------------------------
|
| Every request passes through this middleware.
|
| Tasks performed:
| 1. Creates a log entry.
| 2. Stores it inside log.txt.
| 3. Calls next() so the request can continue.
|
| Middleware receives:
| req  -> Incoming request
| res  -> Outgoing response
| next -> Function that passes control to the next middleware/route.
|
*/
app.use((req, res, next) => {

    const log =
        `\n${new Date().toString()} : ${req.method} : ${req.path} : ${req.ip}\n`;

    fs.appendFile("./log.txt", log, (err) => {

        if (err) {
            console.log(err);
        }

        next(); // Continue to the next middleware/route
    });

});

/*
|--------------------------------------------------------------------------
| Route Handler
|--------------------------------------------------------------------------
*/
app.get("/users", (req, res) => {
    res.send("Users Route");
});

app.listen(8000);
