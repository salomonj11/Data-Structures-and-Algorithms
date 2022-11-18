--- Directions
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9

---- Solution ----

function reverseInt(n) {
  // parseFloat used to turn string into floating number
  // return parseFloat, first arg is turning int to string and reversing string, second arg is to multiple by Math.sign to deal with negative numbers.
  return (
    parseFloat(n.toString().split('').reverse().join('')) *
    Math.sign(n)
  );
}
