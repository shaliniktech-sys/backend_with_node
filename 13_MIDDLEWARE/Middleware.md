---

# Middleware

Middleware is a function that executes **between the client's request and the server's response**. It has access to the request object (`req`), response object (`res`), and the `next()` function.

Middleware can:

- Read or modify the request
- Read or modify the response
- Execute code before reaching the route
- End the request-response cycle
- Pass control to the next middleware using `next()`

---

## Syntax

```javascript
app.use((req, res, next) => {
    // Middleware logic
    next();
});
```

---

## Middleware Used in This Project

```javascript
app.use(express.urlencoded({ extended: false }));
```

This is Express's built-in middleware that parses incoming data sent using **HTML forms** (`application/x-www-form-urlencoded`) and stores it inside `req.body`.

Without this middleware:

```javascript
console.log(req.body);
```

Output:

```javascript
undefined
```

With this middleware:

```javascript
console.log(req.body);
```

Output:

```javascript
{
    first_name: "John",
    last_name: "Doe"
}
```

---

## How Middleware Works

```
Client
   │
   ▼
Incoming Request
   │
   ▼
Middleware
   │
   ▼
Route Handler
   │
   ▼
Response
   │
   ▼
Client
```

---

## Types of Middleware

### 1. Application-Level Middleware

Runs for every request or specific routes.

```javascript
app.use((req, res, next) => {
    console.log("Request Received");
    next();
});
```

---

### 2. Route-Level Middleware

Runs only for a particular route.

```javascript
app.get("/users", middlewareFunction, (req, res) => {
    res.send("Users");
});
```

---

### 3. Built-in Middleware

Provided by Express.

Examples:

```javascript
express.json()
```

Parses JSON request bodies.

```javascript
express.urlencoded()
```

Parses form data.

```javascript
express.static()
```

Serves static files like CSS, images, and JavaScript files.

---

## Why is `next()` Important?

`next()` tells Express to continue to the next middleware or route handler.

```javascript
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
```

Output in terminal:

```
Middleware 1
```

Browser:

```
Hello World
```

If `next()` is omitted and no response is sent, the request will keep waiting, causing the browser or Postman to hang.

---

## Difference Between `express.json()` and `express.urlencoded()`

| Middleware | Parses | Used For |
|------------|--------|----------|
| `express.json()` | JSON data | APIs sending JSON (`application/json`) |
| `express.urlencoded()` | Form data | HTML forms (`application/x-www-form-urlencoded`) |

---

## Summary

- Middleware executes before the route handler.
- It can inspect or modify requests and responses.
- It can terminate the request or pass control using `next()`.
- `express.urlencoded()` is used to parse form data into `req.body`.
- Middleware is a fundamental concept in Express and is used for logging, authentication, validation, error handling, and request parsing.
