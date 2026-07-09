const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// ------------------------------------
// HTML Rendering (Server-Side Rendering)
// GET /users
// ------------------------------------
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    return res.send(html);
});

// ------------------------------------
// REST API Routes
// GET    -> Read User
// PATCH  -> Update User
// DELETE -> Delete User
// ------------------------------------
app.route("/api/users/:id")

.get((req, res) => {
    // Route parameters are strings.
    const id = Number(req.params.id);

    // Find the user with the given ID.
    const user = users.find(user => user.id === id);

    return res.json(user);
})

.patch((req, res) => {
    // Update user by ID.
    return res.json({
        status: "pending"
    });
})

.delete((req, res) => {
    // Delete user by ID.
    return res.json({
        status: "pending"
    });
});

// ------------------------------------
// Create User
// POST /api/users
// ------------------------------------
app.post("/api/users", (req, res) => {
    return res.json({
        status: "pending"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
