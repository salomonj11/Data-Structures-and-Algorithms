--- Directions  -
Given a string, return a new string with the reversed
order of characters
--- Examples ---
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'

---- Solution ----

function reverse(str) {
  return str.split('').reverse().join('');
}


---- Other Ways To Solve ----

1) For Loop

// Create an empty string called reversed
// For each character in the provided string, take the character and add it to the start of reversed
// Return the variable reversed

function reverse(str) {
  let reversed = '';
  
  for (let c of str) {
    reversed = c + reversed;
}
  return reversed;
}

2) Reduce

// Take string, turn into array using split function, use reduce helper

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}



