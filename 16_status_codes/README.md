# HTTP Status Codes using Express.js

A beginner-friendly Express.js project demonstrating the most commonly used **HTTP Status Codes** in REST APIs.

This project helps understand when and why different status codes are returned from the server.

---

## Topics Covered

- 200 OK
- 201 Created
- 204 No Content
- 302 Redirect
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 501 Not Implemented

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Move inside the project.

```bash
cd HTTP-Status-Codes
```

Install dependencies.

```bash
npm install express
```

(Optional) Install Nodemon globally for automatic server restarts.

```bash
npm install -g nodemon
```

or install it in your main working folder.

```bash
npm install nodemon
```

Run using Nodemon:

```bash
npx nodemon code.js
```

Or run normally:

```bash
node code.js
```

---

## API Routes

| Method | Route | Status Code |
|---------|-------|------------|
| GET | / | 200 |
| POST | /api/users | 201 / 400 |
| DELETE | /api/users/:id | 204 |
| GET | /private | 401 |
| GET | /admin | 403 |
| GET | /api/users/:id | 200 / 404 |
| GET | /error | 500 |
| GET | /future-feature | 501 |
| GET | /google | 302 Redirect |

---

## Why HTTP Status Codes Matter

Status codes help clients understand the outcome of every request.

Instead of only returning data, an API should also communicate whether the request:

- Succeeded
- Failed because of invalid input
- Requires authentication
- Is forbidden
- Could not find the requested resource
- Failed due to a server issue

Using the correct status code makes APIs easier to debug and follow REST API best practices.

---

## Learn More

See **intro.md** for detailed explanations and real-life examples of each status code.
