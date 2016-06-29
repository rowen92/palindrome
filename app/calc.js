'use strict';

/**
 * Calc module
 * @module app/calc
*/

var _this = this;

/**
  * Remove all spaces from the phrase
  * @param {string} str - Word or phrase
  * @return {string} String without the spaces
  */
exports.deleteSpaceFromPhrase = function (str) {
  str = str.replace(/\s+/g, '');
  return str;
};

/**
  * Check if the given string is a palindrome, first way
  * @param {string} str - Word or phrase
  * @return {string} Result of the checking
  */
exports.isFirstPalindrome = function (str) {
  var reverseStr;
  str = _this.deleteSpaceFromPhrase(str);
  reverseStr = str.split('').reverse().join('');
  return (str == reverseStr) ? 'yes' : 'no';
};

/**
  * Check if the given string is a palindrome, second way
  * @param {string} str - Word or phrase
  * @return {string} Result of the checking
  */
exports.isSecondPalindrome = function (str) {
  str = _this.deleteSpaceFromPhrase(str);
  var strLength = str.length;
  var k = 0;
  for (var i = 0; i < strLength; i++) {
    if (str[i] == str[strLength - 1 - i]) {
      k++;
      if (k == strLength - 1) {
        return 'yes';
      };
    } else {
      return 'no';
    };
  };
};
