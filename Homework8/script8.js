// Задание 1
var arr = [-1, 0, 2, 34, -2];

var newArr = arr.filter(function (item) {
  return item > 0;
});

alert(newArr);

// Задание 2

var arr = [-1, 0, 2, 34, -2];

function positiveNumber(arr) {
  return arr.find(function (item) {
    return item > 0;
  });
}

positiveNumber(arr);

// Задание 3

function isPalindrome(word) {
  var wordReverse = word.split('').reverse().join('');
  return word.toLowerCase() === wordReverse.toLowerCase() ? true : false;
}

isPalindrome('шалаШ');
isPalindrome('елКа');
isPalindrome('раДар');
isPalindrome('казак');

// Задание 4

function areAnagrams(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  } else if (word1.split('').sort().join() !== word2.split('').sort().join()) {
    return false;
  }
  return true;
}

    areAnagrams('кот', 'отк'); 
    areAnagrams('кот', 'атк'); 
    areAnagrams('кот', 'отко'); 

// Задание 5

function divideArr()