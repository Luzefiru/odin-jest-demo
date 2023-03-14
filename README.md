# odin-jest-demo

A repository to test out and document the different functionalities of the Jest Test Suite and practice Test Driven Development (TDD) according to [The Odin Project Testing Practice Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice).

## Installing

```bash
npm install --save-dev jest
```

Then we setup our `npm test` and `npm watch` script in `package.json`:

```JavaScript
"scripts": {
  "test": "jest",
  "watch": "jest --watchAll"
},
```

## Testing: Basics

- We use the `expect(value)` function then chain it with a "matcher" method in order to assert something about a value.

- We wrap our assertions in a `test('test_name', () => { expect().toBe() })` function which gets called when we run `npx jest`.

For example, doing `expect(value).toBe(anotherValue)` means "we expect `value` to `===` `anotherValue`". If it does, the test passes - otherwise, it fails.

```JavaScript
// when this test's callback assertion fails, the string parameter is used as a reference for Jest
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## Other Matcher Methods to Chain With `expect()`

1. `.not().toBe()` is equivalent to `!==` where `.not()` negates the truthiness of the following matcher method.

2. `.toEqual(obj)` recursively checks the fields of an Array or Object to be equal to the passed `obj`. Otherwise, it is equivalent to `.toBe()` when used with numbers.

```JavaScript
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

3. `.toBeNull()`, `.toBeUndefined()`, `.toBeDefined()` are self-explanatory and checks if the passed argument equals `null`, `undefined`, or `!== undefined`.

4. `.toBeTruthy()` and `.toBeFalsy()` will match based on whether the argument is [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

5. `.toBeCloseTo()` is used to match floating-point numbers due to [implementation-induced rounding errors](https://ellenaua.medium.com/floating-point-errors-in-javascript-node-js-21aadd897bf8).

6. `.toMatch(/regExp/)` matches a String to a `regExp`.

7. `expect(arr).toContain(value)` checks if the `arr` contains `value`.
