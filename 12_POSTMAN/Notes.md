# Express Notes

---

# What is Express?

Express is a web framework built on top of Node.js.

Instead of creating routes manually using the http module, Express provides simple methods like

```js
app.get()
app.post()
app.patch()
app.delete()
```

---

# What is a REST API?

REST stands for

Representational State Transfer

Common HTTP methods

| Method | Purpose |
|---------|----------|
| GET | Read Data |
| POST | Create Data |
| PATCH | Update Data |
| DELETE | Delete Data |

---

# Middleware

Middleware is a function that executes **before** the request reaches the route.

Example

```js
app.use(express.urlencoded({ extended: false }));
```

Flow

Client

↓

Middleware

↓

Route

↓

Response

Without middleware

```
req.body
```

is

```
undefined
```

because Express doesn't understand incoming data by default.

---

# express.urlencoded()

Syntax

```js
express.urlencoded({
    extended: false
})
```

### express

The Express library.

---

### urlencoded()

A built-in middleware function.

Its job is to convert form data into a JavaScript object.

Example

Incoming data

```
first_name=Shubham
last_name=Sharma
```

becomes

```js
req.body = {
    first_name: "Shubham",
    last_name: "Sharma"
}
```

---

### Why app.use()?

```
app.use()
```

registers middleware.

Every incoming request first passes through this middleware.

---

### What does extended:false mean?

There are two parsers.

```
false
```

Uses Node's built-in querystring parser.

Supports only simple key-value pairs.

Example

```
name=Shubham
age=20
```

---

```
true
```

Uses the qs library.

Supports nested objects.

Example

```
user[name]=Shubham
user[age]=20
```

becomes

```js
{
    user:{
        name:"Shubham",
        age:20
    }
}
```

For beginners,

```
extended:false
```

is enough.

---

# Why JSON.stringify()?

Files only store text.

JavaScript objects cannot be written directly.

Example

Wrong

```js
fs.writeFile(file, users)
```

Correct

```js
fs.writeFile(file, JSON.stringify(users))
```

---

# Why push into users?

Suppose

users

```js
[
 {id:1},
 {id:2}
]
```

New request

```js
req.body
```

contains

```js
{
 first_name:"Shubham"
}
```

We first add it

```js
users.push({
    id:3,
    ...req.body
})
```

Now

users

contains

```js
[
{id:1},
{id:2},
{id:3}
]
```

Finally

```
users
```

is written back into the JSON file.

If we wrote only

```js
req.body
```

the entire file would become

```js
{
 first_name:"Shubham"
}
```

All previous users would be lost.

---

# req.params

Used for URL parameters.

Example

```
/users/4
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

# req.body

Contains data sent by the client.

Requires middleware.

---

# Route Chaining

Instead of

```js
app.get(...)
app.patch(...)
app.delete(...)
```

Express allows

```js
app.route("/users/:id")
.get(...)
.patch(...)
.delete(...)
```

This keeps code cleaner.

---

# Postman

Postman is an API testing tool.

Used to send

- GET
- POST
- PATCH
- DELETE

requests without writing frontend code.
