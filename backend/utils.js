// a random number generator between 10000 and 99999
const generateRandomNumber = () =>
  Math.floor(Math.random() * (99999 - 10000)) + 10000;

// stackoverflow to the rescue
// returns all possible combinations of array of array
const generateCombinations = (...args) => {
  var r = [],
    max = args.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = args[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(args[i][j]);
      if (i == max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
};

module.exports = {
  generateRandomNumber,
  generateCombinations,
};
