/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  final = []
  arr.forEach(element => {
    final.push(element)
    if(element % 2){
      final.push(100)
    }
  });
  return final
};
