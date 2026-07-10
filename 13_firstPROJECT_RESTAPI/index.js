const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create User
app.post("/api/users", (req, res) => {
    const body = req.body;

    users.push({
        ...body,
        id: users.length + 1,
    });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                message: "Error creating user",
            });
        }

        return res.status(201).json({
            status: "Success",
            id: users.length,
        });
    });
});

// Read, Update & Delete User
app.route("/api/users/:id")

// Get User
.get((req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    return res.json(user);
})

// Update User
.patch((req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    users[index] = {
        ...users[index],
        ...req.body,
    };

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                message: "Error updating user",
            });
        }

        return res.json({
            status: "Success",
            updatedUser: users[index],
        });
    });
})

// Delete User
.delete((req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex((user) => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    users.splice(index, 1);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                message: "Error deleting user",
            });
        }

        return res.json({
            status: "Success",
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
