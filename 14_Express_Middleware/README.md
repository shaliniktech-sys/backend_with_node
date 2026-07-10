# Middleware in Express.js

## What is Middleware?

Middleware is a function that executes **between the client request and the route handler**.

Instead of directly reaching the route, every request first passes through one or more middleware functions.

```
Client
   │
   ▼
Middleware 1
   │
   ▼
Middleware 2
   │
   ▼
Middleware 3
   │
   ▼
Route Handler
(app.get/app.post)
   │
   ▼
Response
```

---

# Syntax

```javascript
app.use((req, res, next) => {

    // Perform some task

    next();

});
```

Parameters:

- **req** → Incoming request object.
- **res** → Response object.
- **next()** → Passes the request to the next middleware or route.

---

# Why do we use Middleware?

Middleware allows us to execute code before the request reaches the route.

Common uses include:

- Logging requests
- Authentication
- Authorization
- Validating input
- Checking user credentials
- Preventing malicious requests
- Parsing request body
- Error handling

---

# Request Flow

Without middleware:

```
Client
   │
   ▼
Route Handler
   │
   ▼
Response
```

With middleware:

```
Client
   │
   ▼
Middleware
   │
   ▼
Route Handler
   │
   ▼
Response
```

---

# Multiple Middlewares

A single application can have multiple middleware functions.

Example:

```
Client
   │
   ▼
Middleware 1
(Check Hacker)
   │
   ▼
Middleware 2
(Check Login)
   │
   ▼
Middleware 3
(Check Permissions)
   │
   ▼
Route Handler
```

Each middleware decides whether to:

- Continue the request using `next()`
- Stop the request by sending a response

---

# next()

`next()` passes control to the next middleware or route.

Example:

```javascript
app.use((req, res, next) => {

    console.log("Middleware Executed");

    next();

});
```

If `next()` is **not called**, the request gets stuck.

The client keeps waiting because Express doesn't know what to do next.

---

# Sending Response from Middleware

A middleware can directly respond to the client.

Example:

```javascript
app.use((req, res) => {

    return res.json({
        message: "Blocked"
    });

});
```

Since a response has already been sent:

- Remaining middlewares are skipped.
- Route handler is never executed.

---

# Modifying req and res

Middleware can modify the request and response objects.

Example:

```javascript
app.use((req, res, next) => {

    req.username = "Shalini";

    next();

});

app.get("/", (req, res) => {

    res.send(req.username);

});
```

Output:

```
Shalini
```

The modified object is shared with every middleware and route executed after it.

---

# Built-in Middleware

Express provides built-in middleware.

Example:

```javascript
app.use(express.urlencoded({ extended: false }));
```

Purpose:

Converts form data into a JavaScript object.

Without it:

```javascript
req.body
// undefined
```

With it:

```javascript
req.body
// {
//   name: "Rahul",
//   age: "20"
// }
```

---

# Custom Middleware Example

```javascript
app.use((req, res, next) => {

    const log =
        `${new Date().toString()} : ${req.method} : ${req.path}`;

    fs.appendFile("./log.txt", log, (err) => {

        if (err) console.log(err);

        next();

    });

});
```

This middleware:

- Records request time.
- Stores request method.
- Stores request path.
- Writes everything to `log.txt`.
- Passes control using `next()`.

---

# Key Points

- Middleware executes before route handlers.
- Middleware has access to `req`, `res`, and `next`.
- One application can have multiple middleware functions.
- Middleware can modify `req` and `res`.
- Middleware can stop the request by sending a response.
- Always call `next()` if you want the request to continue.
- Express provides built-in middleware like `express.urlencoded()`.
