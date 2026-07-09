// Import required modules
const users = require("./MOCK_DATA.json"); // Loads users from the JSON file
const express = require("express");        // Express framework
const fs = require("fs");                  // File System module for reading/writing files

// Create an Express application
const app = express();

// Middleware
// Parses x-www-form-urlencoded data (sent from Postman forms)
// and stores it inside req.body
app.use(express.urlencoded({ extended: false }));

// ------------------------------------------------------------
// CREATE USER (POST)
// ------------------------------------------------------------
app.post("/api/users", (req, res) => {

    // Data sent by the client
    const body = req.body;

    // Add a new user to the existing users array
    users.push({
        ...body,
        id: users.length + 1
    });

    // Save the updated array back to MOCK_DATA.json
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {

        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Failed to save user."
            });
        }

        return res.json({
            status: "success",
            id: users.length
        });
    });
});

// ------------------------------------------------------------
// ROUTES FOR A SINGLE USER
// ------------------------------------------------------------
app.route("/api/users/:id")

// READ USER
.get((req, res) => {

    // Route parameters are strings, so convert to Number
    const id = Number(req.params.id);

    // Find the user with the matching ID
    const user = users.find((user) => user.id === id);

    return res.json(user);
})

// UPDATE USER (Pending)
.patch((req, res) => {
    return res.json({
        status: "Pending"
    });
})

// DELETE USER (Pending)
.delete((req, res) => {
    return res.json({
        status: "Pending"
    });
});

// ------------------------------------------------------------
// START SERVER
// ------------------------------------------------------------
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
