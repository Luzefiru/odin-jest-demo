const dictionary = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  6: 'f',
  7: 'g',
  8: 'h',
  9: 'i',
  10: 'j',
  11: 'k',
  12: 'l',
  13: 'm',
  14: 'n',
  15: 'o',
  16: 'p',
  17: 'q',
  18: 'r',
  19: 's',
  20: 't',
  21: 'u',
  22: 'v',
  23: 'w',
  24: 'x',
  25: 'y',
  26: 'z',
};

const isAlpha = function (ch) {
  return /^[A-Z]$/i.test(ch);
};

const isLower = function (ch) {
  return ch.toLowerCase() === ch;
};

function caesarCipher(string, shift) {
  const stringArr = string.split('');
  const newStringArr = stringArr.map((e) => {
    let key = undefined;
    let shiftedKey = undefined;
    if (!isAlpha(e)) {
      return e;
    } else if (isLower(e)) {
      key = (e.charCodeAt(0) - 'a'.charCodeAt(0)) % 26;
    } else {
      key = (e.charCodeAt(0) - 'A'.charCodeAt(0)) % 26;
    }
    shiftedKey = key + shift;
    if (shiftedKey < 0) {
      shiftedKey = shiftedKey + 26;
    }
    if (isLower(e)) {
      return dictionary[shiftedKey + 1 !== 26 ? (shiftedKey + 1) % 26 : 26];
    } else {
      return dictionary[
        shiftedKey + 1 !== 26 ? (shiftedKey + 1) % 26 : 26
      ].toUpperCase();
    }
  });

  return newStringArr.join('');
}

export { caesarCipher };
