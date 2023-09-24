const palindromes = function (str) {
    let normalizedStr = str.replace(/[,.!? ]/g, '').toLowerCase();
    let reversedStr = normalizedStr.split('').reverse().join('');
    if (normalizedStr === reversedStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
