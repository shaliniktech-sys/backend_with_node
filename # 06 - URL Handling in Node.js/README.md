# 06 - URL Handling in Node.js

This project demonstrates how to parse URLs and handle query parameters using Node.js' built-in `http` and `url` modules.

## Concepts Covered

- Creating an HTTP server
- Understanding URL structure
- Parsing URLs using `url.parse()`
- Accessing route paths with `pathname`
- Reading query parameters using `query`
- Logging requests with `fs.appendFile()`
- Ignoring the browser's automatic `/favicon.ico` request

---

## URL Structure

Example:

```
https://www.example.com/about?myname=Piyush&age=20
```

| Part | Description |
|------|-------------|
| `https://` | Protocol |
| `www.example.com` | Domain |
| `/about` | Path |
| `?` | Starts query parameters |
| `myname=Piyush` | Query parameter |
| `&` | Separates multiple query parameters |
| `age=20` | Another query parameter |

---

## Example Requests

### Homepage

```
http://localhost:7000/
```

Response:

```
Homepage
```

---

### About Page

```
http://localhost:7000/about?myname=Piyush
```

Response:

```
Hello Piyush, Welcome to the About Page
```

---

## Request Logging

Every request is stored in `log.txt`.

Example:

```
1751846400000: GET /
1751846405200: GET /about?myname=Piyush
```

---

## Files

```
06_url_handling/
│── index.js
│── README.md
│── log.txt
```

---

## Note

`url.parse()` is now deprecated in modern Node.js versions. It is used here because it is covered in many introductory Node.js courses.

For new projects, the recommended approach is to use the WHATWG `URL` API:

```js
const myURL = new URL(req.url, "http://localhost:7000");
```
