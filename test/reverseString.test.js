import { reverseString } from '../src/reverseString.js';

let testData = 'Reverse me!';

describe('reverseString()', () => {
  it('should exist', () => {
    expect(reverseString).toBeDefined();
  });

  it('should return a string', () => {
    expect(typeof reverseString(testData)).toBe('string');
  });

  it('should make the first letter the last letter', () => {
    expect(reverseString(testData).slice(-1)).toBe(testData.slice(0, 1));
  });
});
