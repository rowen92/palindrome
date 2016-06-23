const calc = require('./calc');

const str = 'ab bz zzzb ba';

const result1 = calc.isFirstPalindrome(str);
const result2 = calc.isSecondPalindrome(str);

console.log(`Is palindrome first string? ${result1}`);
console.log(`Is palindrome second string? ${result2}`);
