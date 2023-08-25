const repeatString = function(str, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }
    outputStr = "";
    for (let i = 0; i < repeatCount; i++) {
        outputStr += str;
    }
    return outputStr;
};

// Do not edit below this line
module.exports = repeatString;
