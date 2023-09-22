const sumAll = function(n1, n2) {
    if (n2 > n1) {
        let sum = 0;
        for (let i = n1; i <= n2; i++) {
            sum += i;
        }
        return sum;
    } else if (n1 > n2) {
        let sum = 0;
        for (let i = n2; i <= n1; i++) {
            sum += i;
        }
        return sum;
    } else if (n1 == n2) {
        return 0;
    }
};

// Do not edit below this line
module.exports = sumAll;
