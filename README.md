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

By default, we need to use CommonJS Export Syntax:

```JavaScript
// inside sum.js
module.exports = { sum };

// inside sum.test.js
const { sum } = require(./sum)
```

However, we can use ES6 `import/export` syntax via a transpiler like Babel.

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

## Using Babel Transpiler to Use ES6 `import`/`export` Statements

- We first install the npm package.

```bash
npm i --save-dev @babel/preset-env
```

- We then create a `.babelrc` file with the following code:

```Javascript
{ "presets": ["@babel/preset-env"] }
```


## Repeating Setup for Mocking]

> We can use certain functions to execute **before ALL tests** or **before EACH test**.
> These all accept a Callback Function, the function to execute.
> - `beforeEach(cb)`
> - `afterEach(cb)`
> - `beforeAll(cb)`
> - `afterAll(cb)`

```JavaScript
// runs a callback function BEFORE EACH test
beforeEach(() => {
  initializeCityDatabase();
});

// runs a callback function AFTER EACH test
afterEach(() => {
  clearCityDatabase();
});

// runs a callback function BEFORE ALL tests
beforeAll(() => {
  return initializeCityDatabase();
});

// runs a callback function AFTER ALL tests
afterAll(() => {
  return clearCityDatabase();
});
```

Using `describe('suite description', () => {})` to wrap our test cases can let us **create a Scope for our Repeating Setup** Functions.

```JavaScript
// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
```

## Running Only 1 Test

We can add `.only` after `test`/`it` to let Jest only run that specific test.

```JavaScript
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false);
});

test('this test will not run', () => {
  expect('A').toBe('A');
});
```

