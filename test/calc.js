var expect = require("chai").expect;
var calc = require("../app/calc.js");

describe("Check a word is a palindrome", function(){
  it("First way", function(){
    var result = calc.isFirstPalindrome("race car");
    expect(result).to.equal("yes");
  });
  it("Second way", function(){
    var result = calc.isSecondPalindrome("race car");
    expect(result).to.equal("yes");
  });
});

describe("Phrase", function(){
  it("delete spaces", function(){
    var result = calc.deleteSpaceFromPhrase("race car ");
    expect(result).to.equal("racecar");
  });
});
