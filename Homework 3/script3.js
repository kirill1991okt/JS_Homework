// Задание 1

var styles = ["Джаз", "Блюз"];

styles.push("Рок-н-Ролл");

styles[styles.length - 2] = "Классика";

alert(styles.shift());

styles.unshift("Рэп", "Регги");

// Задание 2

// Вариант 1

for (var i = 2; i <= 10; i++) {
  if (i % 2 != 0) continue;
  alert(i);
}

for (var i = 2; i <= 10; i++) {
  if (!(i % 2)) {
    alert(i);
  }
}

// Вариант 2

for (var i = 2; i <= 10; i += 2) {
  alert(i);
} // не уверен, что так можно, технически задание  выполняется

// Задание 3

var arr = [];

var sum = 0;

while (true) {
  var num = prompt("Введите число");
  if (!num || isNaN(+num)) break;
  arr[arr.length] = +num;
}

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

Alert(sum);

// Задание 4

var array = [3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,2];

abc:for (var i = 0; i < array.length; i++) {

  for (var j = 2; j < array[i]; j++) {
    if (array[i] % j == 0) continue abc;
  }

  console.log(array[i]);
}

// continue срабатывает когда во втором цикле for одно из чисел будет равно 0, в условии сработает true и первый цикл for перейдет на новую этерацию. 
// Если во втором цикле for число ни разу не будет ровняться 0, то вычисление перейдет в console.log и выведит необходимое нам число(простое число).  
