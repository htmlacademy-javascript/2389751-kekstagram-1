/* eslint-disable no-unused-vars */
//функция для проверки на палиндром
const isPalindrom = (str) => {
  const tempStr = str
    .toLowerCase()
    .replaceAll(' ', '');
  const halfStr = Math.floor(tempStr.length / 2);

  for (let i = 0, j = -1; i <= halfStr; i++, j--) {
    if (tempStr.at(i) !== tempStr.at(j)) {
      return false;
    }
  }

  return true;
};

//функция по извлечению чисел и строки
const extractNumber = (str) => {
  const pureStr = typeof str === 'number' ? String(str) : str;
  let result = '';

  for (const char of pureStr) {
    if (!Number.isNaN(parseInt(char, 10))) {
      result += char;
    }
  }

  return parseInt(result, 10);
};

//функция для проверки длины строки
const isStrLengthEqual = (str, length) => str.length <= length;

//функция с добавлением символов к исходной строке
const padStart = (str, minLength, pad) => {
  let result = str;

  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }

  return result;
};
