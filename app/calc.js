'use strict';
/**
 * Calc module
 * @module app/calc
*/
/**
  * Remove all spaces from the phrase
  * @constructor
  * @param {string} str - Word or phrase
  * @return {string} String without the spaces
*/
function deleteSpaceFromPhrase(str) {
  str = str.replace(/\s+/g, '');
  return str;
};

/**
  * Check if the given string is a palindrome, first way
  * @constructor
  * @param {string} str - Word or phrase
  * @return {string} Result of the checking
*/
function isFirstPalindrome(str) {
  str = deleteSpaceFromPhrase(str);
  var reverseStr = str.split('').reverse().join('');
  return (str == reverseStr) ? 'yes' : 'no';
};

/**
  * Check if the given string is a palindrome, second way
  * @constructor
  * @param {string} str - Word or phrase
  * @return {string} Result of the checking
*/
function isSecondPalindrome(str) {
  str = deleteSpaceFromPhrase(str);
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

module.exports.isFirstPalindrome = isFirstPalindrome;
module.exports.isSecondPalindrome = isSecondPalindrome;
module.exports.deleteSpaceFromPhrase = deleteSpaceFromPhrase;
