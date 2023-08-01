//функция для проверки на палиндром
const isPalindrom = (string) => {   
    const tempString = string
        .toLowerCase()
        .replaceAll(' ', '');
    let reverseString = '';
    for (let i = tempString.length - 1; i >= 0; i--) {
        reverseString += tempString.at(i);
    }
    return tempString === reverseString;
}

//функция по извлечению чисел и строки
const extractNumber = (string) => { 
    if (typeof string === 'number') {
        return string;
    }

    let result = ' ';
    for (let i = 0; i < string.length; i++) {
        if (!Number.isNaN(parseInt(string.at(i), 10))) {
            result += string.at(i);
        }
    }

    return parseInt(result, 10);
}

//функция для проверки длины строки
const isStringLengthEqual = (string, length) => { 
    const result = string.length <= length;
    return result;
}


