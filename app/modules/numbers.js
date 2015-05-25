module.exports = {
    add: (...values) => values.reduce( (a, b) => a + b, 0),
    mult: (...values) => values.reduce( (a, b) => a * b, 1)
};
