# Node.js Modular Programming

This project demonstrates the basics of modular programming in Node.js using `require()` and `module.exports`.

## Files

- **math.js** – Contains mathematical functions.
- **modular_Programming.js** – Imports and uses the exported functions.

## Concepts Covered

- `require()`
- `module.exports`
- Exporting multiple functions
- Keeping code modular and reusable

## Run

```bash
node module.js
```

## Expected Output

```text
9
1
{ addResult: [Function: sum], subResult: [Function: diff] }
```

## Alternative Export Syntax

```javascript
exports.addResult = (a, b) => a + b;
exports.subResult = (a, b) => a - b;
```
