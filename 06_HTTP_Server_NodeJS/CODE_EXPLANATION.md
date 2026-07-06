# Code Explanation

## Importing Modules

```js
const http = require("http");
const fs = require("fs");
```

- `http` creates the web server.
- `fs` handles file operations.

---

## Creating the Server

```js
const myServer = http.createServer((req, res) => {
```

Creates a server that listens for incoming client requests.

---

## Creating a Log Entry

```js
const log = `${Date.now()}: ${req.url} New Request Received\n`;
```

Each request stores:

- Current Timestamp
- Requested URL
- Message

Example:

```
1720245678901: /about New Request Received
```

---

## Writing to log.txt

```js
fs.appendFile("./log.txt", log, (err, data) => {})
```

Adds every request into `log.txt` asynchronously.

---

## Routing

```js
switch(req.url)
```

Checks which URL the client requested.

### Home Route

```js
case '/':
```

Response:

```
HOMEPAGE
```

---

### About Route

```js
case '/about':
```

Response:

```
Hi! I am SHALINI
```

---

### Default Route

```js
default:
```

Response:

```
404 error page not found
```

---

## Starting the Server

```js
myServer.listen(8000, () => {
    console.log("server started");
});
```

Starts the server on **Port 8000**.

Visit:

```
http://localhost:8000
```

---

# Overall Working

```
Browser

↓

Sends Request

↓

Node.js HTTP Server

↓

Creates Log Entry

↓

Stores Log in log.txt

↓

Checks URL

↓

Returns Correct Response

↓

Browser Displays Output
```

---

# Key Takeaways

- Learned how to create an HTTP server using Node.js.
- Understood the Request (`req`) and Response (`res`) objects.
- Implemented basic routing with `switch(req.url)`.
- Logged every incoming request into a file.
- Used asynchronous file handling with `fs.appendFile()`.
- Started a server on a custom port and served responses to the browser.
