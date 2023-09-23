const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  total = 0;
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
	for (n of nums) {
    total += n;
  }
  return total;
};

const multiply = function(nums) {
  return nums[0] * nums[1];
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x, y) {
  // JavaScript recursive factorial
  // https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript
  if (x < 0) {
    return -1;
  } else if (x == 0) {
    return 1;
  } else {
    return (x * factorial(x - 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
