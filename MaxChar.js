--- Directions
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"

---- Solution ----

// Create empty object called chars
// Create variable "max" set equal to 0
// Create variable "maxChar" set it equal to empty string
// Iterate through given string (Via for of loop), add character as prop to chars, assign value of 1 if new, or add 1 to it
// Use For In loop to find max 
// Return maxChar

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}
