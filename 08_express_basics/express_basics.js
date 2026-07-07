// Express Basics

const express = require("express");

const app = express();

// Home Route
app.get("/", (req, res) => {
    return res.send("This is the Homepage");
});

// About Route
// Query Example:
// http://localhost:3000/about?name=Shubh
app.get("/about", (req, res) => {

    // A single request can have only ONE response.
    // Writing multiple res.send() statements will throw:
    // Error: Cannot set headers after they are sent.

    return res.send(`Hey ${req.query.name}`);
});

// Start the server
app.listen(3000, () => {
    console.log("SERVER HAS STARTED!");
});
