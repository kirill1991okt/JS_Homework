// Задание 1
var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(array) {
  return array.filter(function (item) {
    return item > 0;
  });
}

filterNumbersArr(arr);

// Задание 2

var arr = [-1, 0, 2, 34, -2];

function positiveNumber(array) {
  return array.find(function (item) {
    return item > 0;
  });
}

positiveNumber(arr);

// Задание 3

function isPalindrome(word) {
  return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}

isPalindrome('шалаШ');
isPalindrome('елКа');
isPalindrome('раДар');
isPalindrome('казак');

// Задание 4

function areAnagrams(word1, word2) {
  return word1.split('').sort().join() === word2.split('').sort().join();
}

areAnagrams('кот', 'отк');
areAnagrams('кот', 'атк');
areAnagrams('кот', 'отко');

// Задание 5

//Вариант 1

function divideArr(arr, number) {
  var newArr = [];

  arr.forEach(function (item, index) {
    newArr[newArr.length] = arr.splice(0, number);
  });

  if (arr.length === 0) {
    return newArr;
  }
  newArr.push(arr);
  return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));

// Вариант 2

function divideArr(arr, number) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += number) {
    newArr.push(arr.slice(i, i + number));
  }
  return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));
