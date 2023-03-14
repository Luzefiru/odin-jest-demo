import { capitalize } from '../src/capitalize';

const testData = 'javascript';

it('should exist', () => {
  expect(capitalize).toBeDefined();
});

it('should return a string', () => {
  expect(typeof capitalize(testData)).toBe('string');
});

it('should return a string with the first letter capitalized', () => {
  expect(capitalize(testData)[0]).toBe(testData[0].toUpperCase());
});
