var expect = require('chai').expect;
var calc = require('../app/calc.js');

describe('check a word is a palindrome', function () {
  it('should be true for the first way', function () {
    var result = calc.isFirstPalindrome('race car');
    expect(result).to.equal('yes');
  });

  it('should be true for the second way', function () {
    var result = calc.isSecondPalindrome('race car');
    expect(result).to.equal('yes');
  });

});

describe('phrase', function () {
  it('should delete spaces', function () {
    var result = calc.deleteSpaceFromPhrase('race car ');
    expect(result).to.equal('racecar');
  });
});
