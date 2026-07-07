# 07 - Express Basics

## What I Learned

In this section, I learned why **Express.js** exists and how it makes backend development much simpler compared to using Node.js's built-in `http` module.

---

## HTTP Methods

HTTP methods define the type of action a client wants the server to perform.

### GET

Used to **retrieve data** from the server.

Example:
- Opening a website
- Fetching user details
- Rendering the homepage

```http
GET /
```

---

### POST

Used to **send data** to the server.

Common examples:
- Login forms
- Signup forms
- Creating a new database record

```http
POST /signup
```

---

### PUT

Used to **replace or upload** a resource.

Example:
- Uploading a profile picture
- Replacing an existing file

```http
PUT /profile-photo
```

---

### PATCH

Used to **update part of an existing resource**.

Example:
- Changing your Facebook name
- Updating your email address

```http
PATCH /user
```

---

### DELETE

Used to **remove a resource**.

Example:

```http
DELETE /user
```

---

## Handling HTTP Methods without Express

Using Node's `http` module, different HTTP methods have to be handled manually.

Example:

```js
if (req.url === "/signup") {

    if (req.method === "GET") {
        res.end("Signup Form");
    }

    else if (req.method === "POST") {
        res.end("Form Submitted Successfully");
    }

}
```

As the application grows:

- Every route needs multiple conditions.
- Every HTTP method has to be checked manually.
- URL parsing requires additional modules.
- Code becomes difficult to read and maintain.

---

## Why Express?

Express handles most of the low-level work for us.

Instead of manually checking URLs and HTTP methods, Express lets us define routes cleanly.

```js
app.get("/", (req, res) => {
    res.send("Homepage");
});
```

Benefits:

- Cleaner code
- Better project structure
- Easy route handling
- Easier maintenance
- Faster development

---

## Basic Express Syntax

```js
app.METHOD(PATH, HANDLER);
```

Where:

- **app** → Express application instance
- **METHOD** → HTTP method (`get`, `post`, `put`, `patch`, `delete`)
- **PATH** → URL path
- **HANDLER** → Function executed when the route matches

Example:

```js
app.get("/about", (req, res) => {
    res.send("About Page");
});
```

---

## Query Parameters

Query parameters are values passed in the URL after `?`.

Example:

```text
/about?name=Shubh&age=20
```

Access them using:

```js
req.query.name
req.query.age
```

---

## `req.url` vs `req.query`

### `req.url`

Returns the complete URL path.

```text
/about?name=Shubh&age=20
```

---

### `req.query`

Returns an object containing the query parameters.

```js
{
    name: "Shubh",
    age: "20"
}
```

---

## One Request = One Response

A request can receive **only one response**.

✅ Correct

```js
res.send("Hello");
```

❌ Incorrect

```js
res.send("Hello");
res.send("Again");
```

This throws:

```text
Error [ERR_HTTP_HEADERS_SENT]
```

because the response has already been sent.

---

## Running the Project

Install Express:

```bash
npm install express
```

Start the server:

```bash
node express_basics.js
```

Open:

```
http://localhost:3000/
```

Example with query parameters:

```
http://localhost:3000/about?name=Shubh
```

---

## Key Takeaways

- Learned the five main HTTP methods.
- Understood why Express is preferred over the native `http` module.
- Created routes using `app.get()`.
- Learned how query parameters work using `req.query`.
- Understood the difference between `req.url` and `req.query`.
- Learned that **one HTTP request can have only one response**.
- Express significantly improves code readability and maintainability.
