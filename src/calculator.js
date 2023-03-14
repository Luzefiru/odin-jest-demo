const calculator = (function () {
  const add = function (a, b) {
    return a + b;
  };
  const subtract = function (a, b) {
    return a - b;
  };
  const divide = function (a, b) {
    return a / b;
  };
  const multiply = function (a, b) {
    return a * b;
  };

  return { add, subtract, divide, multiply };
})();

export { calculator };
