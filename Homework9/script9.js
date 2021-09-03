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
//Вариант 1

function makeTime(arr) {
  var newTime = '';

  arr.map(function (item) {
    newTime += ' : ' + item;
  });
  console.log('Текущее время' + newTime);
}

//Вариант 2

function makeTime(arr) {
  var newTime = arr.reduce(function (acum, item) {
    return acum + ' : ' + item;
  });
  console.log('Текущее время ' + newTime);
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

// Задание 4

var string = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(str) {
  var re = /[.!?]/;

  var newStr = str.split(re);

  var filtered = newStr.filter(function (item) {
    return item !== '';
  });

  return filtered.forEach(function (item) {
    console.log(
      item.trim() +
        ': Letters quantity is: ' +
        item.replace(/[\s.,]/g, '').length
    );
  });
}

countSentencesLetters(string);

// Задание 5

function countRepeatWord(string) {
  var newStr = string.split(/[,.!\s.,]/g);

  var obj = {};

  for (var i = 0; i < newStr.length; i++) {
    if (obj[newStr[i]] === undefined) {
      obj[newStr[i]] = 1;
    } else {
      obj[newStr[i]]++;
    }
  }

  var arr = [];

  for (key in obj) {
    arr.push(obj[key]);
  }

  var maxRepeat = arr.reduce(function (previous, current) {
    return Math.max(previous, current);
  });

  for (key in obj) {
    if (obj[key] === maxRepeat) {
      var wordRepeat = key;
    }
  }

  console.log(
    'Максимальное число повторений у слова ' + wordRepeat + ' - ' + maxRepeat
  );
}
