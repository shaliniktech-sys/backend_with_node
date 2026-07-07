# RESTful API

## What is a RESTful API?

**REST (Representational State Transfer)** is an architectural style for building APIs.

A RESTful API follows a set of standards and best practices so that different clients (browser, mobile apps, desktop apps, smart devices, etc.) can communicate with a server in a consistent way.

---

# Client-Server Communication

A REST API mainly consists of two parts:

- **Client**
  - Browser
  - Mobile App
  - Desktop App
  - Smart Devices (Alexa, Google Home, etc.)

- **Server**
  - Receives requests
  - Processes them
  - Sends responses back

```
Client  --------------------->  Server
        HTTP Request

Client  <---------------------  Server
        HTTP Response
```

The communication between them should follow REST principles.

---

# 1. Client-Server Architecture

One of the core principles of REST is that:

> **Client and Server should be separate independent systems.**

The client should not care **how** the server stores or processes data.

The server should not care **how** the client displays the data.

Both only communicate through APIs.

---

# Response Formats

A server can send responses in different formats:

- HTML
- JSON
- XML
- Plain Text
- Images
- Videos

---

# What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight format used to exchange data.

Example:

```json
{
  "id": 1,
  "name": "Shubham",
  "age": 20
}
```

It stores data as **key-value pairs**, making it easy for almost every programming language to understand.

---

# HTML Response (SSR)

Sometimes the server sends an entire HTML page.

Example:

```
Browser
    ↓
Server
    ↓
Returns HTML
```

The browser directly displays that HTML.

This approach is called:

## Server-Side Rendering (SSR)

Advantages:

- Fast initial page load
- Better SEO
- More secure
- Used by many large companies

Example:

```
Client
   ↓
Server generates HTML
   ↓
Browser renders HTML
```

### Limitation

HTML is mainly useful for browsers.

A mobile application cannot directly render a webpage the same way a browser does.

---

# JSON Response (CSR)

Instead of HTML, the server can simply return JSON.

Example:

```
Client
   ↓
Server
   ↓
Returns JSON
```

```json
{
    "name": "John",
    "email": "john@gmail.com"
}
```

Now every client can decide how to display it.

- Browser → HTML UI
- Android → Native UI
- iOS → Native UI
- Desktop App → Desktop UI

The server only provides data.

The client decides how to render it.

This keeps both independent.

This approach is commonly used with frontend frameworks like **React**, where the browser receives JSON and renders the UI. This is known as **Client-Side Rendering (CSR)**.

---

# When should you send HTML?

If you're **100% sure** your client is only a web browser, returning HTML is perfectly fine.

Why?

- Browser understands HTML directly.
- No extra processing is required.
- Faster rendering.

Example:

```
Browser
   ↓
Server
   ↓
HTML
```

---

# When should you send JSON?

If your API is going to be used by multiple platforms like:

- Web
- Android
- iOS
- Desktop
- Smart Devices

Always return JSON.

JSON is platform-independent.

Example:

```
          Browser
             ↑
Android ← JSON → iPhone
             ↓
        Desktop App
```

One API can serve every platform.

---

# 2. Respect HTTP Methods

A RESTful API should always use the correct HTTP methods.

| Method | Purpose |
|---------|----------|
| GET | Read data |
| POST | Create new data |
| PUT | Replace an existing resource completely |
| PATCH | Update part of an existing resource |
| DELETE | Delete data |

---

# GET

Used to fetch data.

Example:

```http
GET /users
```

Returns:

```json
[
  {
    "id":1,
    "name":"John"
  }
]
```

### Don't do this

```http
GET /getUsers
```

The HTTP method already tells us that we're reading data.

Adding `get` is unnecessary.

---

# POST

Used to create new data.

Good:

```http
POST /users
```

Bad:

```http
POST /createUser
```

`POST` already means **create**.

No need to repeat it.

---

# PATCH

Used to update only some fields.

Good:

```http
PATCH /users/5
```

Body:

```json
{
  "name":"Alex"
}
```

Only the name gets updated.

---

# PUT

Used to replace the entire resource.

Example:

```http
PUT /users/5
```

Body:

```json
{
  "name":"Alex",
  "email":"alex@gmail.com",
  "age":22
}
```

The complete user data is replaced.

---

# DELETE

Used to remove data.

Good:

```http
DELETE /users/5
```

Bad:

```http
DELETE /deleteUser
```

The HTTP method already explains the action.

---

# Good vs Bad REST Endpoints

## Good

```http
GET    /users
GET    /users/5
POST   /users
PATCH  /users/5
PUT    /users/5
DELETE /users/5
```

Simple, clean, and follows REST conventions.

---

## Bad

```http
GET    /getUsers
POST   /createUser
PATCH  /updateUser
DELETE /deleteUser
```

These repeat the action that's already specified by the HTTP method.

---

# Counter Example

Suppose you see this API:

```http
PATCH /createUser
```

Questions that arise:

- Is it creating a user?
- Is it updating a user?
- Why is PATCH used with "create"?

Similarly,

```http
GET /deleteUser
```

Looks very confusing.

GET should **never** delete anything.

A GET request must only read data.

That's why REST recommends using proper HTTP methods instead of putting actions in the URL.

---

# REST API Summary

✔ Client and Server should be independent.

✔ Prefer JSON for cross-platform applications.

✔ HTML is suitable when the client is only a browser.

✔ Always respect HTTP methods.

✔ Keep URLs resource-based (nouns), not action-based (verbs).

✔ Let the HTTP method describe the action.

---

# Quick Revision

```
REST API

│
├── Client ↔ Server Architecture
│      ├── Independent
│      ├── Loosely Coupled
│      └── Communicate using HTTP
│
├── Response Types
│      ├── HTML → SSR
│      └── JSON → CSR
│
├── HTML
│      ├── Browser Only
│      ├── Fast Rendering
│      └── Good for Web Apps
│
├── JSON
│      ├── Cross Platform
│      ├── Key-Value Format
│      └── Used by React, Mobile Apps, etc.
│
└── HTTP Methods
       ├── GET    → Read
       ├── POST   → Create
       ├── PUT    → Replace
       ├── PATCH  → Update
       └── DELETE → Remove
```
