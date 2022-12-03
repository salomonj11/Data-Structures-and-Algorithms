--- Directions ---
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false


---- Solution ----

function palindrome(str) {
  // save into a variable called test, take str, turn into array via split, use reverse function, join via join

  let test = str.split('').reverse().join('');

  // Take 'test' compare it to str, return boolean

  return test === str;
}

---- Other Solutions ----

1) Use Every helper

// Turn str into array, call every on it

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
