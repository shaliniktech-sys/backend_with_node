function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

// Export functions
module.exports = {
    addResult: sum,
    subResult: diff,
};

/*
Alternative syntax:

exports.addResult = (a, b) => a + b;
exports.subResult = (a, b) => a - b;
*/
