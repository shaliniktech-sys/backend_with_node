// Modular Programming

const math = require('./math.js');

console.log(math.addResult(4, 5));
console.log(math.subResult(6, 5));
console.log(math);

/*
Output:
9
1
{ addResult: [Function: sum], subResult: [Function: diff] }

Without module.exports:
Output: sum is not defined

Using only require() without exports:
Output: {}

Modular programming helps split a large codebase into
small, reusable, and maintainable modules.
*/
