# Creating the First Document in MongoDB using Mongoose

This folder explains how our first document is created inside MongoDB using Mongoose.

---

# Complete Code

```javascript
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

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

app.listen(8000, () => {
    console.log("Server Started");
});
```

---

# Understanding `async`

```javascript
app.get("/", async (req, res) => {
```

Normally, JavaScript executes code one line after another.

But talking to a database takes some time.

If JavaScript does not wait for the database, it may continue executing the next lines before the document is actually inserted.

Adding the `async` keyword allows us to use the `await` keyword inside the function.

Think of it like this:

Without `async`

```
Insert Data
↓

Don't wait

↓

Execute next line
```

With `async`

```
Insert Data

↓

Wait until completed

↓

Execute next line
```

---

# Understanding `await`

```javascript
await User.create(...)
```

`await` means

> Wait here until this operation finishes.

If we remove `await`

```javascript
User.create({
    name:"Shubh",
    age:19
});

res.send("User Created");
```

The browser may receive the response before MongoDB finishes inserting the document.

Using `await` guarantees that

1. Data is inserted.
2. Then the response is sent.

---

# Understanding `User.create()`

```javascript
await User.create({
    name:"Shubh",
    age:19
});
```

`User` is the Mongoose Model.

The `create()` method inserts a new document into the MongoDB collection.

The object

```javascript
{
    name:"Shubh",
    age:19
}
```

becomes a MongoDB document.

MongoDB stores it like this

```json
{
    "_id":"6873a4c8f5f0f7f7...",
    "name":"Shubh",
    "age":19,
    "__v":0
}
```

---

# Why does MongoDB create the database automatically?

Connection code

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/test");
```

Here,

```
test
```

is the database name.

Connecting does **not** create the database.

The database is created only when the first document is inserted.

Flow

```
Connect

↓

Database Not Created Yet

↓

Insert First Document

↓

Database Created Automatically
```

This is why, when we only connected using `mongoose.connect()`, the `test` database did not appear in MongoDB Compass.

It appeared only after `User.create()` inserted the first document.

---

# Why does MongoDB add `_id` automatically?

Every document needs a unique identity.

MongoDB automatically creates an `_id` field for every document.

Example

```json
{
    "_id":"6873a4c8f5f0f7f7...",
    "name":"Shubh",
    "age":19
}
```

Purpose of `_id`

- Makes every document unique.
- Helps search documents quickly.
- Used while updating or deleting documents.
- Acts like a Primary Key in SQL databases.

SQL

```
Student_ID
```

MongoDB

```
_id
```

---

# What is `__v`?

Sometimes you'll also see

```json
"__v":0
```

This is added by Mongoose.

It is called the **Version Key**.

It helps Mongoose keep track of document versions when needed.

For beginners, you don't need to worry about it.

---

# Why is the collection name `users` instead of `User`?

We created the model like this

```javascript
const User = mongoose.model("User", userSchema);
```

The model name is

```
User
```

Mongoose automatically converts it into

```
users
```

Rules followed by Mongoose

```
User

↓

Lowercase

↓

user

↓

Plural

↓

users
```

Therefore, in MongoDB Compass you'll see

```
Database

↓

test

↓

users
```

instead of

```
User
```

---

# Complete Flow

```
Browser

↓

GET /

↓

Express Route

↓

User.create()

↓

Mongoose

↓

MongoDB

↓

Database (test)

↓

Collection (users)

↓

Document

{
    name:"Shubh",
    age:19
}

↓

Response

User Created
```

---

# Key Points

- `async` allows asynchronous code.
- `await` waits for database operations to complete.
- `User.create()` inserts a new document.
- MongoDB creates a database automatically after the first document is inserted.
- `_id` is automatically generated for every document.
- Mongoose converts the model name `User` into the collection name `users`.
