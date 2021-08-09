//  Задание 1

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

// Задание 2

function pow(x, n) {
  if (n < 1 || n % 1 !== 0) {
    return alert("Число должно быть больше 1 и натуральное");
  }
  var multi = 1;
  for (var i = 0; i < n; i++) {
    multi *= x;
  }
  return multi;
}

function makePow() {
  var x = +prompt('Введите число, которое хотите возвести в степень');

  var n = +prompt('Введите степень, в которую хотите возвести');

  return alert(pow(x, n));

}

makePow();


// Задание 3

// Вариант 1

function sumTo(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sumTo(n - 1);
  }
}

// Вариант 2

// решение через увеличение переменной i
function sumTo(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i;
  }
  return n + sum;
}

// решение через уменьшение переменной i
function sumTo(n) {
  var sum = 0;
  for (var i = n - 1; i > 0; i--) {
    sum += i;
  }
  return sum + n;
}

// Вариант 3

function sumTo(n) {
  return ((1 + n) / 2) * n;
}

// я считаю, самый быстрый способ это через формулу арифмитической прогресии, т.к. в данном способе используется самое простое вычислениеи не задействуются другие механизмы JS. Что касается самого медленного варианта, то это будет вариант с рекурсией, т.к. рекурсия приводит к хранению всех данных для неоконченных внешних вызовов в стеке, что приводит к "заполнению памяти".
//Gосчитать sumTo(100000) нельзя, т.к. максимальная глубина рекурсии ограничена движком JavaScript

// Задание 4
var array = [5, 7, [4, [2], 8, [1, 3], 2],
  [9, []], 1, 8
];

function treeSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
    } else if (
      typeof arr[i] === "object" &&
      arr[i] !== null &&
      arr[i].length > 0
    ) {
      sum += treeSum(arr[i]);
    }
  }

  return sum;
}