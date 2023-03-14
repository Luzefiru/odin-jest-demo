# jest-demo

A repository to test out and document the different functionalities of the Jest Test Suite.

## Installing

```bash
npm install --save-dev jest
```

Then we setup our `npm test` script in `package.json`:

```JavaScript
"scripts": {
"test": "jest"
},
```

## Testing: Basics

- We use the `expect(value)` function then chain it with a "matcher" method in order to assert something about a value.

- We wrap our assertions in a `test('test_name', () => { expect().toBe() })` function which gets called when we run `npx jest`.

For example, doing `expect(value).toBe(anotherValue)` means "we expect `value` to `===` `anotherValue". If it does, the test passes - otherwise, it fails.

```JavaScript
// when this test's callback assertion fails, the string parameter is used as a reference for Jest
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```
