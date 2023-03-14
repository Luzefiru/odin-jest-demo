import { caesarCipher } from '../src/caesarCipher.js';

describe('caesarCipher()', () => {
  it('should be defined', () => {
    expect(caesarCipher).toBeDefined();
  });
  it('should be able to shift letters forward', () => {
    expect(caesarCipher('attack at', 5)).toMatch(/fyyfhp fy/);
  });
  it('should be able to shift letters and wrap forward', () => {
    expect(caesarCipher('xyz', 5)).toMatch(/cde/);
  });
  it('should be able to shift letters backward', () => {
    expect(caesarCipher('jjjjj', -5)).toMatch(/eeeee/);
  });
  it('should be able to shift letters backward and wrap', () => {
    expect(caesarCipher('abcdefg', -3)).toMatch(/xyzabcd/);
  });
  it('should handle uppercase shift forwards', () => {
    expect(caesarCipher('We strike now', 5)).toMatch(/Bj xywnpj stb/);
  });
  it('should handle uppercase shift backwards', () => {
    expect(caesarCipher('We strike now', -5)).toMatch(/Rz nomdfz ijr/);
  });
});
