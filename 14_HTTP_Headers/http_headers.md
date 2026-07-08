---

# HTTP Headers

HTTP Headers are **key-value pairs** sent between the client and the server along with every HTTP request and response. They provide additional information about the request or response, such as the content type, authentication details, browser information, and more.

Headers help the client and server communicate effectively by describing **how the data should be handled**.

---

## Structure

```
Header-Name: Header-Value
```

Example:

```http
Content-Type: application/json
```

---

## Request and Response Headers

### Request Headers

Sent by the **client** to the server.

Example:

```http
GET /api/users HTTP/1.1
Host: localhost:8000
User-Agent: PostmanRuntime/7.44.1
Accept: */*
```

---

### Response Headers

Sent by the **server** back to the client.

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 256
```

---

## Common HTTP Headers

| Header | Description |
|---------|-------------|
| `Content-Type` | Specifies the type of data being sent |
| `Accept` | Specifies the type of response the client can accept |
| `Authorization` | Sends authentication credentials |
| `User-Agent` | Identifies the client (browser, Postman, etc.) |
| `Host` | Specifies the server's hostname |
| `Cookie` | Sends stored cookies to the server |
| `Set-Cookie` | Server instructs the browser to store cookies |
| `Content-Length` | Size of the request or response body |
| `Cache-Control` | Controls caching behavior |

---

## Accessing Headers in Express

### Read Request Headers

```javascript
const header = req.headers;
console.log(header);
```

or

```javascript
const userAgent = req.headers["user-agent"];
console.log(userAgent);
```

or using Express helper:

```javascript
const userAgent = req.get("User-Agent");
```

---

### Set Response Headers

```javascript
res.setHeader("Content-Type", "application/json");
```

or

```javascript
res.set({
    "Content-Type": "application/json",
    "X-App": "My API"
});
```

---

## Common Content Types

| Content-Type | Purpose |
|--------------|---------|
| `application/json` | JSON data |
| `application/x-www-form-urlencoded` | HTML form data |
| `multipart/form-data` | File uploads |
| `text/plain` | Plain text |
| `text/html` | HTML documents |
| `application/xml` | XML data |

---

## Example

### Client Request

```http
POST /api/users HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
    "name": "John"
}
```

### Server Response

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
    "status": "User Created"
}
```

---

## Why Are HTTP Headers Important?

Headers are used to:

- Identify the client (browser, Postman, mobile app, etc.)
- Specify the format of request and response data
- Send authentication tokens
- Manage cookies and sessions
- Control caching
- Enable security features
- Exchange additional metadata between client and server

---

## HTTP Request Lifecycle

```
Client
   │
   ▼
HTTP Request
   │
   ├── URL
   ├── Method (GET, POST, etc.)
   ├── Headers
   └── Body (optional)
   │
   ▼
Server
   │
   ▼
HTTP Response
   │
   ├── Status Code
   ├── Headers
   └── Body
   │
   ▼
Client
```

---

## Important Points

- Headers are sent with **every HTTP request and response**.
- They contain **metadata**, not the actual data.
- Request headers provide information about the client and request.
- Response headers provide information about the server's response.
- In Express, request headers can be accessed using `req.headers` or `req.get()`.
- Response headers can be set using `res.setHeader()` or `res.set()`.
