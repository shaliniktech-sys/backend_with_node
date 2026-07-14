# Connecting Node.js to MongoDB using Mongoose

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
```

---

# Understanding Every Line

## 1. Import Mongoose

```javascript
const mongoose = require("mongoose");
```

### What does it do?

- Imports the **Mongoose** package into our project.
- `require()` is used to import modules in Node.js.
- After importing Mongoose, we can use its features like:
  - Connecting to MongoDB
  - Creating Schemas
  - Creating Models
  - Performing CRUD Operations

---

## 2. Connecting to MongoDB

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/test");
```

The `connect()` method is used to establish a connection between our **Node.js application** and the **MongoDB server**.

It accepts a **MongoDB Connection URI (Uniform Resource Identifier)**.

## Connection URI Structure

```
mongodb://127.0.0.1:27017/test
```

Let's understand every part.

---

## `mongodb://`

```
mongodb://127.0.0.1:27017/test
^^^^^^^^^^
```

This is the **protocol**.

It tells Mongoose:

> "Connect using the MongoDB protocol."

Just like websites use:

```
https://
http://
```

MongoDB uses:

```
mongodb://
```

---

## `127.0.0.1`

```
mongodb://127.0.0.1:27017/test
          ^^^^^^^^^
```

This is the **IP Address** of the machine where MongoDB is running.

`127.0.0.1` means:

> This Computer (Local Machine)

It is also known as:

```
localhost
```

So these are equivalent:

```javascript
mongodb://127.0.0.1:27017/test
```

```javascript
mongodb://localhost:27017/test
```

Both connect to the MongoDB server running on your own computer.

---

## `27017`

```
mongodb://127.0.0.1:27017/test
                   ^^^^^
```

This is the **Port Number**.

A computer can run many applications simultaneously.

Each application communicates through a different **port**.

MongoDB's default port is:

```
27017
```

So Mongoose knows exactly where the MongoDB server is listening.

---

## `/test`

```
mongodb://127.0.0.1:27017/test
                         ^^^^
```

This is the **Database Name**.

Here we are connecting to the database named:

```
test
```

If the database doesn't exist, MongoDB automatically creates it when the first document is inserted.

Example:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/studentDB");
```

Now the connected database will be:

```
studentDB
```

---

## Why is there only one `/` before the database name?

Correct:

```
mongodb://127.0.0.1:27017/test
```

Notice:

```
mongodb://
         ^^
```

The two slashes after `mongodb:` are part of the URI format.

After the host and port, only **one slash** is used to separate the server address from the database name.

```
127.0.0.1:27017/test
                  ^
```

If you accidentally write:

```javascript
mongodb://127.0.0.1:27017//test
```

there are **two slashes after the port**, making the URI invalid. Depending on the MongoDB driver version, you'll usually get a URI parsing error or the connection may fail.

The correct format is always:

```
protocol://host:port/databaseName
```

---

## Visual Representation

```
Node.js Application
        │
        ▼
mongodb://127.0.0.1:27017/test
        │
        ├── Protocol → mongodb://
        ├── Host     → 127.0.0.1 (localhost)
        ├── Port     → 27017
        └── Database → test
```

---

## 3. `.then()`

```javascript
.then(() => console.log("MongoDB Connected"))
```

`mongoose.connect()` returns a **Promise**.

When the connection is established successfully, the `.then()` block executes.

Output:

```
MongoDB Connected
```

---

## 4. `.catch()`

```javascript
.catch((err) => console.log(err));
```

If an error occurs while connecting, the `.catch()` block executes.

For example, if the MongoDB server is not running:

```
MongooseServerSelectionError
connect ECONNREFUSED 127.0.0.1:27017
```

Printing `err` helps us identify the exact problem.

---

## Can we write `.catch((err) => console.log(err))`?

Yes.

Both are completely correct.

```javascript
.catch(err => console.log(err))
```

```javascript
.catch((err) => console.log(err))
```

They produce exactly the same result.

The parentheses are optional when there is **only one parameter**.

Examples:

```javascript
x => x * 2
```

```javascript
(x) => x * 2
```

Both are identical.

However:

For **zero parameters**:

```javascript
() => console.log("Connected")
```

For **two or more parameters**:

```javascript
(a, b) => a + b
```

Parentheses are mandatory.

---

# Summary

| Part | Meaning |
|------|---------|
| `mongoose.connect()` | Connects the Node.js application to MongoDB |
| `mongodb://` | MongoDB protocol |
| `127.0.0.1` | Local machine (localhost) |
| `27017` | Default MongoDB port |
| `/test` | Database name |
| `.then()` | Runs after a successful connection |
| `.catch()` | Runs if the connection fails |
| `err` | Contains the error information |

---

# Interview Tip

**Question:** Explain the MongoDB connection string.

**Answer:**

The MongoDB connection string (URI) tells Mongoose which protocol to use (`mongodb://`), where the MongoDB server is located (`127.0.0.1`), which port it is listening on (`27017`), and which database to connect to (`test`). The `connect()` method returns a Promise, so `.then()` executes when the connection is successful, while `.catch()` handles any connection errors.
