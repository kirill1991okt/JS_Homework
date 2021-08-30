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
