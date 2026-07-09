# Express CRUD API

A simple REST API built using Express.js that performs CRUD (Create, Read, Update, Delete) operations on a local JSON file.

This project demonstrates:

- Express Routing
- Route Chaining
- Middleware
- Request Body Parsing
- Dynamic Route Parameters
- Reading & Writing JSON Files
- REST API Basics

---

## Technologies Used

- Node.js
- Express.js
- File System (fs)
- Postman

---

## Installation

Clone the repository

```bash
git clone <repo-url>
```

Install dependencies

```bash
npm install
```

Run the server

```bash
node index.js
```

Server starts at

```
http://localhost:8000
```

---

## API Endpoints

### Get User

```
GET /api/users/:id
```

Returns a single user.

---

### Create User

```
POST /api/users
```

Creates a new user.

Body (x-www-form-urlencoded)

```
first_name
last_name
email
gender
job_title
```

---

### Update User

```
PATCH /api/users/:id
```

(Currently Pending)

---

### Delete User

```
DELETE /api/users/:id
```

(Currently Pending)

---

## Testing

Use **Postman**

Choose

```
Body
↓
x-www-form-urlencoded
```

Enter key-value pairs and send the request.

---

## Folder Structure

```
index.js
MOCK_DATA.json
README.md
NOTES.md
CODE.md
```

---

## Concepts Covered

- Express Routing
- Middleware
- REST APIs
- JSON
- Route Parameters
- Request Body
- File Handling
