const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());

const users = [
    {
        id: 1,
        first_name: "Shubh",
        last_name: "Sharma",
        email_id: "shubh@gmail.com"
    }
];

/*-------------------------------------------------------
200 OK
-------------------------------------------------------*/
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Request completed successfully."
    });
});

/*-------------------------------------------------------
201 Created
-------------------------------------------------------*/
app.post("/api/users", (req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email_id
    ) {
        return res.status(400).json({
            message: "All fields are required."
        });
    }

    const newUser = {
        id: users.length + 1,
        ...body,
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully.",
        id: newUser.id,
    });
});

/*-------------------------------------------------------
204 No Content
-------------------------------------------------------*/
app.delete("/api/users/:id", (req, res) => {
    res.status(204).send();
});

/*-------------------------------------------------------
401 Unauthorized
-------------------------------------------------------*/
app.get("/private", (req, res) => {
    res.status(401).json({
        message: "Please login first."
    });
});

/*-------------------------------------------------------
403 Forbidden
-------------------------------------------------------*/
app.get("/admin", (req, res) => {
    res.status(403).json({
        message: "Access denied."
    });
});

/*-------------------------------------------------------
404 Not Found
-------------------------------------------------------*/
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    if (id > users.length) {
        return res.status(404).json({
            message: "User not found."
        });
    }

    res.status(200).json(users[id - 1]);
});

/*-------------------------------------------------------
500 Internal Server Error
-------------------------------------------------------*/
app.get("/error", (req, res) => {
    try {
        console.log(user.length); // Typo: should be users
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error."
        });
    }
});

/*-------------------------------------------------------
501 Not Implemented
-------------------------------------------------------*/
app.get("/future-feature", (req, res) => {
    res.status(501).json({
        message: "Feature is not implemented yet."
    });
});

/*-------------------------------------------------------
302 Redirect
-------------------------------------------------------*/
app.get("/google", (req, res) => {
    res.redirect("https://www.google.com");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
