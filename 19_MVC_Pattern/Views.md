# Views

View means what the user sees.

Examples

HTML

EJS

Pug

Handlebars

---

If building REST APIs

No View is required.

Server simply sends JSON.

Example

```js
res.json(users);
```

Browser receives

[
{
"name":"Rahul"
}
]

---

If building websites

View becomes important.

Example

Home Page

Login Page

Profile Page

Dashboard

---

Flow

Controller

↓

View

↓

Browser

---

Express usually uses

EJS

because it is easy to learn.

Example

```js
res.render("home");
```

This renders

views/home.ejs
