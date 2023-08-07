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
}

console.log(isPalindrom ('ДовОд'));

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
}

console.log(extractNumber('-1'));

//функция для проверки длины строки
const isStrLengthEqual = (str, length) => str.length <= length;

console.log(isStringLengthEqual('проверяемая строка', 20));

//функция с добавлением символов к исходной строке
const myPadStart = (string, minLength, pad) => {
    let result = string;

    while (result.length < minLength) {
        const newResultLength = result.length + pad.length;
        const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
            result = actualPad + result;
    }
    
    return result;
}

console.log(myPadStart('q', 4, 'we'));