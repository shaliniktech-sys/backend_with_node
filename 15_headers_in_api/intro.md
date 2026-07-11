# Introduction

## HTTP Headers

HTTP Headers are additional pieces of information sent between the client and server. They describe details about the request or response, such as content type, browser information, authorization, cookies, and more.

There are two types of headers:

- Request Headers
- Response Headers

Example:

```http
Content-Type: application/json
User-Agent: Mozilla/5.0
Authorization: Bearer Token
```

---

## API

API stands for Application Programming Interface.

An API allows two software applications to communicate with each other. In web development, APIs allow clients like browsers or mobile apps to request data from servers.

Example:

```
GET /users
POST /users
DELETE /users/1
```

---

## HTTP Status Codes

Status codes tell the client whether a request was successful or not.

Common status codes:

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

These codes help the client understand the server's response.
