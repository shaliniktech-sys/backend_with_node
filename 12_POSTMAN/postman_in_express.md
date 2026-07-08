---

# Postman

Postman is an API testing tool that allows developers to send HTTP requests to a server without creating a frontend application. It helps in developing, testing, and debugging REST APIs quickly.

## Why Postman?

- Test APIs without building a frontend
- Send different types of HTTP requests
- View JSON responses
- Send request body, headers, and query parameters
- Test CRUD operations easily
- Save and organize API collections

---

## HTTP Methods Used

| Method | Purpose |
|---------|---------|
| GET | Retrieve data from the server |
| POST | Create a new resource |
| PATCH | Update specific fields of a resource |
| PUT | Replace an entire resource |
| DELETE | Remove a resource |

---

## Testing the APIs

### Get All Users

```http
GET http://localhost:8000/api/users
```

Returns all users stored in `MOCK_DATA.json`.

---

### Get User by ID

```http
GET http://localhost:8000/api/users/5
```

Returns the user whose ID is `5`.

---

### Create a New User

```http
POST http://localhost:8000/api/users
```

Body (x-www-form-urlencoded)

| Key | Value |
|-----|-------|
| first_name | John |
| last_name | Doe |
| email | john@gmail.com |

Since the POST logic is not implemented yet, the API currently returns:

```json
{
    "status": "pending"
}
```

---

### Update a User

```http
PATCH http://localhost:8000/api/users/5
```

(Currently returns a placeholder response.)

---

### Delete a User

```http
DELETE http://localhost:8000/api/users/5
```

(Currently returns a placeholder response.)

---

## Response Formats

This project demonstrates two response types:

### HTML Response

```http
GET /users
```

Returns an HTML page containing the list of user names.

### JSON Response

```http
GET /api/users
```

Returns JSON data, which is the standard format used in REST APIs.

---

## Note

If you're testing APIs running on `localhost`, use the **Postman Desktop App** or **Postman Desktop Agent**. The Postman Web version uses the Cloud Agent, which cannot access local servers running on your computer.
