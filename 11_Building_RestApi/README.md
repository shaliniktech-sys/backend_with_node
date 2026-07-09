# Express.js CRUD API & Server-Side Rendering

A beginner-friendly Express.js project demonstrating the fundamentals of:

- Server-Side Rendering (SSR)
- REST APIs
- Dynamic Route Parameters
- Route Chaining using `app.route()`
- CRUD Operations (Create, Read, Update, Delete)

---

# Project Structure

```
express-crud-api/
│
├── MOCK_DATA.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project directory

```bash
cd express-crud-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node index.js
```

Or, if using Nodemon

```bash
npm run dev
```

---

# Server

The server starts on:

```
http://localhost:8000
```

---

# Features

- Server-Side Rendering (SSR)
- REST API
- Dynamic Route Parameters
- Route Chaining
- HTML Responses
- JSON Responses
- CRUD API Structure

---

# HTML Rendering

## Endpoint

```http
GET /users
```

### Description

Generates an HTML page containing the list of users stored in `MOCK_DATA.json`.

### Example Output

```html
<ul>
    <li>John</li>
    <li>Jane</li>
    <li>Alex</li>
</ul>
```

The HTML is generated dynamically using:

- Template Literals
- `Array.map()`
- `Array.join()`
- `res.send()`

---

# REST API

## Get User

```http
GET /api/users/:id
```

Returns the user matching the given ID.

### Example

```http
GET /api/users/5
```

### Response

```json
{
    "id": 5,
    "first_name": "John",
    "last_name": "Doe"
}
```

---

## Create User

```http
POST /api/users
```

Creates a new user.

(Currently returns a pending response.)

---

## Update User

```http
PATCH /api/users/:id
```

Updates an existing user.

(Currently returns a pending response.)

---

## Delete User

```http
DELETE /api/users/:id
```

Deletes the specified user.

(Currently returns a pending response.)

---

# Route Chaining

Instead of writing separate route handlers for the same endpoint,

```js
app.get(...)
app.patch(...)
app.delete(...)
```

Express provides the `app.route()` method.

Example:

```js
app.route("/api/users/:id")
    .get(...)
    .patch(...)
    .delete(...);
```

## Advantages

- Groups all handlers for the same route together
- Reduces repetitive code
- Improves readability
- Easier to maintain
- Makes future modifications simpler

---

# Route Parameters

Express supports dynamic route parameters.

Example

```js
app.get("/api/users/:id");
```

Here,

```text
:id
```

is a route parameter.

For a request like

```http
GET /api/users/10
```

the value can be accessed using

```js
req.params.id
```

Output:

```js
"10"
```

Notice that the value is a **string**.

To compare it with numeric IDs, convert it into a number.

```js
const id = Number(req.params.id);
```

You may also use

```js
const id = parseInt(req.params.id);
```

### Number() vs parseInt()

| Number() | parseInt() |
|-----------|------------|
| Converts the complete string | Reads until a non-numeric character is found |
| Returns `NaN` if conversion fails | May still return a valid number |

Example

```js
Number("25")      // 25
parseInt("25")    // 25

Number("25abc")   // NaN
parseInt("25abc") // 25
```

For route parameters, `Number()` is generally preferred because IDs should contain only numeric values.

---

# HTTP Methods

| Method | Description |
|----------|-------------|
| GET | Retrieves data |
| POST | Creates new data |
| PATCH | Updates existing data |
| DELETE | Removes existing data |

---

# Browser Limitation

A browser's address bar only sends **GET** requests.

Therefore, the following HTTP methods cannot be tested directly from the browser:

- POST
- PATCH
- DELETE

Use API testing tools such as:

- Postman
- Thunder Client
- Insomnia
- cURL

---

# Express Response Methods

## res.send()

Used to send:

- HTML
- Plain Text
- Buffers
- Objects

Example

```js
res.send("<h1>Hello World</h1>");
```

---

## res.json()

Converts a JavaScript object into JSON and sends it as the response.

Example

```js
res.json({
    status: "success"
});
```

---

# Current Progress

| Feature | Status |
|----------|--------|
| HTML Rendering | Completed |
| GET API | Completed |
| POST API | Pending |
| PATCH API | Pending |
| DELETE API | Pending |

---

# Concepts Covered

- Express.js
- Routing
- Route Parameters
- Route Chaining
- REST APIs
- CRUD Operations
- Server-Side Rendering
- JSON Responses
- Template Literals
- `Array.map()`
- `Array.find()`
- `Array.join()`
- `res.send()`
- `res.json()`

---

# Future Improvements

- Add middleware (`express.json()`)
- Implement POST functionality
- Implement PATCH functionality
- Implement DELETE functionality
- Persist data using `fs.writeFile()`
- Add proper status codes
- Add input validation
- Improve error handling

---

# License

This project is intended for learning purposes and can be freely used and modified.
