# Building an HTTP Server in Node.js

## 1. HTTP Module

Node.js provides a built-in **http** module for creating web servers.

```js
const http = require("http");
```

No external package installation is required.

---

## 2. File System Module

The **fs** module is used for file operations.

```js
const fs = require("fs");
```

In this project, it is used to store every incoming request inside `log.txt`.

---

## 3. Creating a Server

```js
const myServer = http.createServer((req, res) => {});
```

`createServer()` creates an HTTP server.

It accepts a callback function called the **Request Listener**.

---

## 4. Request Listener

```js
(req, res) => {}
```

This callback executes every time a client sends a request.

- `req` → Contains request information.
- `res` → Sends response back to the client.

---

## 5. Request Object (`req`)

Useful properties:

```js
req.url
req.method
req.headers
```

Example:

```js
console.log(req.url);
```

---

## 6. Response Object (`res`)

Used to send data back to the browser.

```js
res.end("Hello World");
```

`res.end()` ends the response.

---

## 7. Logging Requests

Every request is written into `log.txt`.

```js
fs.appendFile("./log.txt", log, callback);
```

Example log:

```
1720245678900: /about New Request Received
```

---

## 8. Routing

Routing means sending different responses for different URLs.

This project uses:

```js
switch(req.url)
```

Routes:

- `/`
- `/about`
- Default (404)

---

## 9. Listening on a Port

```js
myServer.listen(8000);
```

Port **8000** is where the server waits for incoming requests.

Open:

```
http://localhost:8000
```

---

## 10. Project Flow

```
Browser

↓

Request

↓

Node.js Server

↓

Request Listener

↓

Creates Log

↓

Writes into log.txt

↓

Checks URL

↓

Sends Response

↓

Browser
```

---

# Concepts Learned

- HTTP Module
- File System Module
- Creating Servers
- Request Listener
- Request Object
- Response Object
- Routing
- Logging
- Asynchronous File Handling
- Ports
