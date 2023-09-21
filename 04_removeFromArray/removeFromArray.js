const removeFromArray = function (arr, ...toRemove) {
  for (const item of toRemove) {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

module.exports = removeFromArray;
