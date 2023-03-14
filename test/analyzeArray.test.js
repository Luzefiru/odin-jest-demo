import { analyzeArray } from '../src/analyzeArray.js';

const testData = [1, 8, 3, 4, 2, 6];

const expectedData = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

describe('analyzeArray()', () => {
  it('should be defined', () => {
    expect(analyzeArray).toBeDefined();
  });
  it('should have a property called average that is the average of the numbers in the array', () => {
    expect(analyzeArray(testData).average).toBe(4);
  });
  it('should have a property called min with the appropriate smallest number of the array', () => {
    expect(analyzeArray(testData).min).toBe(1);
  });
  it('should have a property called max with the appropriate largest number of the array', () => {
    expect(analyzeArray(testData).max).toBe(8);
  });
  it('should have a length property with the size of the array', () => {
    expect(analyzeArray(testData).length).toBe(6);
  });
  it('should return an object with all the properties of the expectedData', () => {
    expect(analyzeArray(testData)).toEqual(expectedData);
  });
});
