const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

app.get("/", async (req, res) => {

    await User.create({
        name: "Shubh",
        age: 19,
    });

    res.send("User Created");
});

app.listen(8000);
