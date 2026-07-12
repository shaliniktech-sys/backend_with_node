# HTTP Status Codes

HTTP Status Codes are **three-digit numbers** returned by the server after processing a client's request.

They tell the client whether the request was successful, failed, or requires further action.

Status codes are divided into **5 categories**:

| Code Range | Meaning |
|------------|---------|
| 100–199 | Informational Responses |
| 200–299 | Successful Responses |
| 300–399 | Redirection Messages |
| 400–499 | Client Error Responses |
| 500–599 | Server Error Responses |

---

# Common HTTP Status Codes

## 200 OK

The request was completed successfully.

Example:
- Fetching user data.
- Loading a webpage.

```javascript
res.status(200).json({
    message: "Success"
});
```

---

## 201 Created

A new resource has been created.

Usually returned after:

- POST
- PUT

Example:

```javascript
res.status(201).json({
    message: "User Created"
});
```

---

## 204 No Content

The request was successful but the server doesn't send any data back.

Real-life example:

You send a WhatsApp message.

The message gets delivered successfully, but your friend doesn't immediately send anything back.

```javascript
res.status(204).send();
```

---

## 300 Series (Redirection)

These status codes tell the browser to go somewhere else.

Common use cases:

- URL Shorteners
- Payment Gateways
- Website Redirects

Example:

```javascript
res.redirect("https://google.com");
```

---

# Client Error Responses (400 Series)

These errors happen because of something wrong in the client's request.

---

## 400 Bad Request

The request contains invalid or missing data.

Example:

```javascript
if (
    !body.first_name ||
    !body.last_name ||
    !body.email_id
) {
    return res.status(400).json({
        message: "All fields are required."
    });
}
```

---

## 401 Unauthorized

Authentication is required.

Real-life example:

You try sending a friend request on Facebook without logging in.

```javascript
res.status(401).json({
    message: "Please login first."
});
```

---

## 403 Forbidden

You are logged in but don't have permission.

Real-life example:

A normal user tries to access the Admin Panel.

```javascript
res.status(403).json({
    message: "Access Denied"
});
```

---

## 404 Not Found

The requested resource doesn't exist.

Example:

```
http://localhost:8000/api/userss
```

```javascript
res.status(404).json({
    message: "User not found."
});
```

---

# Server Error Responses (500 Series)

These errors occur because of problems on the server.

---

## 500 Internal Server Error

Something unexpected happened on the server.

Example:

```javascript
console.log(user.length);
```

Instead of

```javascript
console.log(users.length);
```

This typo causes the server to crash, resulting in a **500 Internal Server Error**.

---

## 501 Not Implemented

The server understands the request but the feature hasn't been developed yet.

Example:

A "Dark Mode" API route exists, but the functionality is still under development.

```javascript
res.status(501).json({
    message: "Feature not implemented yet."
});
```
