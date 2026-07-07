# 09 - NPM Versioning

## Introduction

Every package published on npm follows **Semantic Versioning (SemVer)**. Versioning helps developers understand whether an update contains bug fixes, new features, or breaking changes before upgrading a package.

A package version consists of three parts:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
5.2.1
```

| Version | Meaning |
|---------|---------|
| 5 | Major Version |
| 2 | Minor Version |
| 1 | Patch Version |

---

# Patch Version

Example:

```text
5.2.1 → 5.2.2
```

Patch releases usually contain:

- Bug fixes
- Performance improvements
- Small security patches

These updates are generally safe and do not introduce breaking changes.

---

# Minor Version

Example:

```text
5.2.1 → 5.3.0
```

Minor releases usually include:

- New features
- Feature improvements
- Additional APIs
- Bug fixes

Minor updates are designed to be **backward compatible**, meaning your existing code should continue to work.

---

# Major Version

Example:

```text
5.2.1 → 6.0.0
```

Major releases introduce **breaking changes**.

These changes may include:

- Removed features
- Changed APIs
- Different behaviors
- New architecture

Projects built on version **5.x.x** should be tested carefully before upgrading to **6.x.x**.

For production applications, major upgrades should never be done blindly.

---

# Installing a Specific Version

Install any version directly from npm.

```bash
npm install express@4.18.2
```

This installs exactly **Express 4.18.2**.

---

# Version Prefixes

## Caret (^)

Example:

```json
"express": "^5.2.1"
```

Allows updates within the same major version.

Examples allowed:

```text
5.2.2
5.3.0
5.8.4
```

Not allowed:

```text
6.0.0
```

The major version remains locked.

This is the **default version strategy** used by npm because it balances stability with receiving new features and security updates.

---

## Tilde (~)

Example:

```json
"express": "~5.2.1"
```

Allows only patch updates.

Allowed:

```text
5.2.2
5.2.5
5.2.10
```

Not allowed:

```text
5.3.0
6.0.0
```

Useful when you want bug fixes but don't want new features automatically.

---

## Exact Version

```json
"express": "5.2.1"
```

Only installs:

```text
5.2.1
```

No automatic updates are allowed.

This is commonly used when maximum stability is required.

---

# Other Version Ranges

### Greater Than

```json
">5.2.1"
```

Installs any version newer than **5.2.1**.

---

### Greater Than or Equal To

```json
">=5.2.1"
```

Installs version **5.2.1** or any newer version.

---

### Less Than

```json
"<6.0.0"
```

Installs any version below **6.0.0**.

---

### Less Than or Equal To

```json
"<=5.4.0"
```

Installs versions up to **5.4.0**.

---

### Version Range

```json
">=5.2.1 <6.0.0"
```

Allows every version starting from **5.2.1** up to (but not including) **6.0.0**.

---

### Wildcards

```json
"5.x"
```

Allows every version inside major version 5.

Examples:

```text
5.0.0
5.4.2
5.9.8
```

---

```json
"5.2.x"
```

Allows every patch release inside **5.2**.

Examples:

```text
5.2.1
5.2.8
5.2.17
```

---

## Latest Version

```bash
npm install express@latest
```

Installs the newest version published on npm.

Be cautious while using `latest` in production projects, as it may install a new major version containing breaking changes.

---

# Why Versioning Matters

Understanding package versions is essential when working on real-world applications.

Proper version management helps to:

- Keep projects stable
- Prevent unexpected breaking changes
- Receive important security updates
- Receive bug fixes
- Maintain compatibility with dependencies
- Make collaboration easier across development teams

Using controlled version ranges is one of the best practices in software development.

---

# package.json vs package-lock.json

### package.json

Contains the package names along with the version ranges.

Example:

```json
"express": "^5.2.1"
```

This tells npm which versions are acceptable.

---

### package-lock.json

Stores the **exact version** that was installed.

Example:

```text
express 5.2.1
```

This ensures every developer on the project installs the exact same dependency tree, avoiding "works on my machine" issues.

---

# Best Practices

- Use `^` for most projects.
- Use `~` if you only want bug fixes.
- Avoid upgrading major versions without testing.
- Never delete `package-lock.json` in a collaborative project unless necessary.
- Always read the release notes before upgrading to a new major version.
- Keep dependencies updated to receive bug fixes and security patches.

---

# Key Takeaways

- Learned Semantic Versioning (SemVer).
- Understood Major, Minor, and Patch releases.
- Learned the difference between `^`, `~`, and exact versions.
- Explored version ranges and wildcards.
- Learned how npm chooses package versions.
- Understood the purpose of `package.json` and `package-lock.json`.
- Learned why dependency versioning is important for project stability and maintainability.
