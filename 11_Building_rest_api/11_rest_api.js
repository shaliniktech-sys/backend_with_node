// 11_rest_api.js

const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

// =========================
// HTML Server-Side Rendering
// =========================

app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;

    res.send(html);
});

// =========================
// REST API
// =========================

// Get all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

// Get, Update and Delete a specific user
app.route("/api/users/:id")

.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    return res.json(user);
})

.patch((req, res) => {
    // Update logic will be added later
    return res.json({ status: "pending" });
})

.delete((req, res) => {
    // Delete logic will be added later
    return res.json({ status: "pending" });
});

// Create a new user
app.post("/api/users", (req, res) => {
    const body = req.body;

    console.log("Body:", body);

    // Database logic will be added later
    return res.json({ status: "pending" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
});
