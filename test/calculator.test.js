import { calculator } from '../src/calculator.js';

describe('calculator Object', () => {
  it('should be an object', () => {
    expect(calculator instanceof Object).toBeTruthy();
  });
  it('should have an add() method', () => {
    expect(calculator.add).toBeDefined();
  });
  it('should have an subtract() method', () => {
    expect(calculator.subtract).toBeDefined();
  });
  it('should have an divide() method', () => {
    expect(calculator.divide).toBeDefined();
  });
  it('should have an multiply() method', () => {
    expect(calculator.multiply).toBeDefined();
  });
  // main functionalities
  test('add() method should return the sum of 2 passed-in arguments', () => {
    expect(calculator.add(-4, 10)).toBe(6);
  });
  test('subtract() method should return the difference of 2 passed-in arguments', () => {
    expect(calculator.subtract(100, 101)).toBe(-1);
  });
  test('divide() method should return the quotient of 2 passed-in arguments', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
  test('divide() method should handle float quotients', () => {
    expect(calculator.divide(0.9, 3)).toBeCloseTo(0.3);
  });
  test('multiply() method should return the product of 2 passed-in arguments', () => {
    expect(calculator.multiply(33, 3)).toBe(99);
  });
  test('multiply() method should handle floats', () => {
    expect(calculator.multiply(0.3, 3)).toBeCloseTo(0.9);
  });
});
