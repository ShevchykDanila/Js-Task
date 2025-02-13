/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  return arr.map(num => {
    if (num >= -9 && num <= 9) return 1; 
    if (num >= -99 && num <= 99) return 2;
    if (num >= -999 && num <= 999) return 3; 
    return 4; 
  });
};
