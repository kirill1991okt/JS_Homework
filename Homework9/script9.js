// Задание 1

var arrNames = ['Кирилл', 'Артем', 'Дима'];

function makeObj(arr) {
  var newObj = [];

  arr.forEach(function (item, index) {
    newObj[index] = { name: item };
  });

  return newObj;
}

console.log(makeObj(arrNames));

// Задание 2

function makeTime(arr) {
  var newTime = '';

  arr.map(function (item) {
    newTime += ' : ' + item;
  });
  console.log('Текущее время' + newTime);
}

// Задание 3

function countVowel(str) {
  var arr = str.split('');

  var vowel = [];

  arr.forEach(function (item) {
    if (['a', 'e', 'i', 'o', 'u'].indexOf(item.toLowerCase()) !== -1) {
      vowel.push(item);
    }
  });

  return vowel.length;
}

// вариант 2

function countVowel(str) {
  var arr = str.split('');

  var count = 0;

  arr.forEach(function (item) {
    if (['a', 'e', 'i', 'o', 'u'].indexOf(item.toLowerCase()) !== -1) {
      count++;
    }
  });

  return count;
}
