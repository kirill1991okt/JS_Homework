// Задание 1

({
  a: a,
  b: b,
  ...obj
} = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
});

// Задание 2

let name = prompt("Как вас зовут?");

const obj = {
  name,
  sayHi() {
    alert(`Hi, ${name}!`);
  },
};

// Задание 3

(function ({
  a: x,
  b: y
}, z = 1) {
  return x ** y * z;
})({
  a: 2,
  b: 3
}, 2);

// Задание 4

const arr = ["Kirill", 11];

function NameAge(name, age) {
  return `Hello, I'm ${name} and I'm ${age} years old.`;
}

NameAge(...arr);

// Задание 5

function sort(...arr) {
  return arr.sort((a, b) => a - b);
}

sort(13, 5, 7, 2, 5, 1, 11, 22);

//Можно использовать, как я понял цикл for of

// Задание 6

function CountVowelLetters(text) {
  text = text.toLowerCase().split("");

  const vowelLetters = ["а", "я", "ы", "и", "о", "ё", "у", "ю", "э", "е"];

  let count = 0;

  text.forEach((elem) => {
    vowelLetters.includes(elem) && count++;
  });

  return count;
}

countVowelLetters("Шла Саша по шоссе И сосала сУшку");

// Задание 7

function separateAge(arr) {
  const separateObj = {
    "Пользователи младше 40": [],
    "Пользователь с именем Федор": [],
  };

  arr.forEach((elem) => {
    if (elem.age < 40) {
      separateObj["Пользователи младше 40"].push(elem);
    }
    if (elem.name.startsWith("Fedor")) {
      separateObj["Пользователь с именем Федор"].push(elem);
    }
  });
  return separateObj;
}

separateAge([{
    name: "Vasya Pupkin",
    age: 25,
  },
  {
    name: "Ivan Petrov",
    age: 30,
  },
  {
    name: "Fedor Ivanov",
    age: 42,
  },
]);

// Задание 8

function arrNames(arr) {
  const newArr = [];

  arr.forEach((elem, index) => {
    newArr.push({
      [`Пользователь ${index + 1}`]: elem,
    });
  });

  return newArr;
}

arrNames(["Kirll", "Artem", "Oleg"]);

// Задание 9

function toCombine(arr) {
  var obj = {};

  arr.forEach((item) => {
    Object.assign(obj, item);
  });

  return obj;
}

// Задание 11

function rangeNumber(a, b) {
  return new Promise((resolve, reject) => {
    if (a > b) {
      [b, a] = [a, b];
    }

    let timerId = setInterval(() => {
      if (a < b && Number.isInteger(a) && Number.isInteger(b)) {
        console.log(a++);
        if (a === b) {
          resolve(b);
          clearInterval(timerId);
        }
      } else {
        reject("Числа должны быть целые числа!");
      }
    }, 1000);
  });
}

rangeNumber(2, 6)
  .then((b) => {
    console.log(b);
  })
  .catch((reject) => console.log(reject));

// Задание 10

class Animal {
  constructor(name) {
    this.name = name;
    this._foodAmount = 50;
  }

  _formatFoodAmount() {
    return this._foodAmount + " гр.";
  }

  dailyNorm(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
      return "Недопустимое количество корма.";
    }

    this._foodAmount = amount;
  }

  feed() {
    console.log("Насыпаем в миску " + this.dailyNorm() + " корма.");
  }
}

class Cat extends Animal {
  feed() {
    super.feed();
    console.log("Кот доволен ^_^");
    return this;
  }

  stroke() {
    console.log("Гладим кота.");
    return this;
  }
}

var barsik = new Cat("Барсик");

console.log(barsik.name);
console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(80));
console.log(barsik.dailyNorm());
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());
console.log(barsik.stroke().feed().stroke().stroke().feed());

/*
ПРАКТИЧЕСКИЕ ЗАДАНИЯ ПО ES6

Задание 11:
    Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
    каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
    Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
    В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.
*/