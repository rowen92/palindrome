"use strict";

function deleteSpaceFromPhrase(str){
  str = str.replace(/\s+/g, '');
  return str;
};

function isFirstPalindrome(str){
  str = deleteSpaceFromPhrase(str);
  var reverseStr = str.split('').reverse().join('');
  return (str == reverseStr) ? 'yes' : 'no';
};

function isSecondPalindrome(str){
  str = deleteSpaceFromPhrase(str);
  var strLength = str.length;
  var k = 0;
  for(var i = 0; i<strLength; i++){
    if (str[i] == str[strLength-1-i]){
      k++;
      if (k == strLength-1){
        return 'yes';
      };
    } else{
      return 'no';
    };
  };
};

module.exports.isFirstPalindrome = isFirstPalindrome;
module.exports.isSecondPalindrome = isSecondPalindrome;
module.exports.deleteSpaceFromPhrase = deleteSpaceFromPhrase;
