# Code Explanation

---

## Importing Modules

```js
const express = require("express");
```

Imports the Express library.

`require()` loads another module into the current file.

---

```js
const fs = require("fs");
```

Imports Node's File System module.

Used for reading and writing files.

---

```js
const users = require("./MOCK_DATA.json");
```

Imports JSON as a JavaScript array.

Node automatically parses JSON into objects.

---

## Creating Express App

```js
const app = express();
```

`express` is a function.

Calling it creates an application object.

Notice the brackets `()`.

We use `()` because we are **calling a function**.

---

## Middleware

```js
app.use(express.urlencoded({ extended: false }));
```

### Why parentheses `()`?

`urlencoded()` is a function.

We call it to create middleware.

---

### Why curly braces `{}`?

```js
{
    extended:false
}
```

This is an **object**.

It contains configuration (options) for the middleware.

---

### Why `app.use()`?

Registers middleware.

Runs before every request.

---

## POST Route

```js
app.post("/api/users", (req,res)=>{
```

Registers a POST route.

`"/api/users"` is the URL.

`(req,res)=>{}` is the callback function that runs when the route is hit.

---

## Request Body

```js
const body = req.body;
```

Stores incoming data in a variable.

Example

```js
{
 first_name:"Shubham"
}
```

---

## Spread Operator

```js
{
    ...body,
    id: users.length + 1
}
```

Copies every property inside `body`.

Instead of writing

```js
{
 first_name: body.first_name,
 last_name: body.last_name,
 email: body.email
}
```

the spread operator copies them automatically.

---

## Why users.push()?

Adds the new object into the existing array.

Without push,

nothing would be added.

---

## fs.writeFile()

```js
fs.writeFile(path,data,callback)
```

Arguments

1. File path
2. Data to write
3. Callback

---

## JSON.stringify()

Converts JavaScript objects into JSON text.

Files only store text.

---

## GET Route

```js
app.route("/api/users/:id")
```

`:id` is called a Route Parameter.

Example

```
/api/users/4
```

Then

```js
req.params.id
```

returns

```
4
```

---

## users.find()

```js
users.find(user=>user.id===id)
```

Searches the array.

Returns the first matching user.

---

## Why Number()?

URL parameters are strings.

```
"4"
```

User ids are numbers.

```
4
```

So

```js
Number(req.params.id)
```

converts

```
"4"
```

to

```
4
```

---

## app.listen()

```js
app.listen(PORT,()=>{
```

Starts the server.

The callback executes only once, after the server starts successfully.

---

# Brackets Cheat Sheet

`()`

Calling a function.

```js
express()
```

---

`{}`

Creating an object.

```js
{
 name:"Shubham"
}
```

OR

Defining a function body.

```js
()=>{
   console.log()
}
```

---

`[]`

Creating an array.

```js
const arr=[]
```

OR

Accessing array elements.

```js
arr[0]
```

---

# Complete Flow

Client

↓

POST Request

↓

Middleware converts form data

↓

req.body

↓

users.push()

↓

JSON.stringify()

↓

fs.writeFile()

↓

MOCK_DATA.json Updated

↓

Success Response
