const express = require("express");

const app = express();
const PORT = 8000;

/* -------------------------------------------------------
   Middleware
   -------------------------------------------------------

   Parses application/x-www-form-urlencoded data.

   It first checks the request headers.

   Content-Type: application/x-www-form-urlencoded

   If the Content-Type matches, Express converts the
   incoming form data into req.body.
*/

app.use(express.urlencoded({ extended: false }));

// Uncomment to accept JSON data
// app.use(express.json());

const users = [
    {
        id: 1,
        first_name: "Shalini",
        last_name: "Kumari"
    },
    {
        id: 2,
        first_name: "John",
        last_name: "Doe"
    }
];

/* -------------------------------------------------------
   Response Headers
   -------------------------------------------------------

   Response headers are sent FROM the server TO the client.

   They provide additional information about the response.

   Custom headers are generally prefixed with "X-"
   to distinguish them from standard HTTP headers.
*/

app.get("/api/users", (req, res) => {

    // Custom Response Header
    res.setHeader("X-MyName", "Shalini Kumari");

    // Another example
    res.setHeader("X-Purpose", "Learning Backend");

    return res.json(users);
});


/* -------------------------------------------------------
   Request Headers
   -------------------------------------------------------

   Request headers are sent FROM the client TO the server.

   They contain information like:

   - Content-Type
   - Authorization
   - User-Agent
   - Accept
   - Cookies
   - Custom Headers
*/

app.get("/headers", (req, res) => {

    console.log(req.headers);

    res.send("Check Terminal");
});


app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
});
