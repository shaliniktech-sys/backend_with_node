# HTTP Headers in Express.js

This project demonstrates the basics of **HTTP Headers** in Express.js.

It explains how request headers and response headers work, how middleware uses them, and how custom headers can be created.

---

# Topics Covered

- HTTP Headers
- Request Headers
- Response Headers
- Custom Headers
- APIs
- Express Middleware
- express.urlencoded()
- express.json()
- Postman
- Browser Network Tab
- req.headers
- res.setHeader()

---

# Project Structure

```
.
├── code.js
├── intro.md
└── README.md
```

---

# Running the Project

Install dependencies

```bash
npm install express
```

Start the server

```bash
node code.js
```

Server

```
http://localhost:8000
```

---

# Custom Request Header

Inside Postman

Headers

| Key | Value |
|------|-------|
| Purpose | Learning Backend |

Server

```javascript
console.log(req.headers);
```

Output

```javascript
{
  purpose: 'Learning Backend',
  'user-agent': 'PostmanRuntime/7.x.x',
  accept: '*/*'
}
```

---

# Custom Response Header

```javascript
res.setHeader("X-MyName", "Shalini Kumari");
```

View it in

- Postman → Response Headers
- Chrome DevTools → Network → Headers

---

# Middleware and Headers

Middleware decides how to process incoming data based on the **Content-Type** header.

### URL Encoded Middleware

```javascript
app.use(express.urlencoded({ extended: false }));
```

This middleware only parses requests whose header is

```
Content-Type: application/x-www-form-urlencoded
```

---

### JSON Middleware

```javascript
app.use(express.json());
```

This middleware parses requests whose header is

```
Content-Type: application/json
```

---

# Postman Smart Detection

When you select

```
Body
↓
x-www-form-urlencoded
```

Postman automatically adds

```
Content-Type: application/x-www-form-urlencoded
```

to the request headers.

Similarly,

Selecting

```
Body
↓
raw
↓
JSON
```

automatically sends

```
Content-Type: application/json
```

---

# Best Practices

- Use standard HTTP headers whenever possible.
- Prefix custom response headers with **X-**.

Example

```javascript
res.setHeader("X-Version", "1.0");
```

- Avoid sending sensitive information in headers.
- Keep header names meaningful.
- Use middleware according to the Content-Type.

---

# Learn More

- MDN Web Docs — HTTP Headers
- Express.js Documentation
- Chrome DevTools Network Panel
- Postman Documentation

---
