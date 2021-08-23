// Задание 1

function Animal(name) {
  this.name = name;

  this._foodAmount = 0;
}

Animal.prototype._formatFoodAmount = function () {
  return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (food) {
  if (!arguments.length) {
    return this._formatFoodAmount();
  }

  if (typeof food === 'string' || !food || food < 0) {
    return alert('Введите корректное число!');
  }

  if (food < 50) {
    throw new Error('Нужно больше еды!');
  }
  if (food > 500) {
    throw new Error('Нужно меньше еды!');
  }

  return (this._foodAmount = food);
};

Animal.prototype.feed = function () {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
  Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.stroke = function () {
  console.log('Гладим кота');
  return this;
};

Cat.prototype.sayHi = function () {
  alert('hello' + this.name);
};

Cat.prototype.feed = function () {
  Animal.prototype.feed.apply(this, arguments);
  console.log('Кот доволен ^_^');
  this.sayHi();
  return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(80));
console.log(barsik.dailyNorm());
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());
console.log(barsik.stroke().feed().stroke().stroke().feed());

// Задание 2

var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};

function deepClone(initialObj) {
  var newObj = {};

  if (Array.isArray(initialObj)) {
    newObj = [];
  }

  for (var key in initialObj) {
    if (
      (initialObj[key] !== null && typeof initialObj[key] === 'object') ||
      Array.isArray(initialObj[key])
    ) {
      newObj[key] = deepClone(initialObj[key]);
    } else {
      newObj[key] = initialObj[key];
    }
  }

  return newObj;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Задание 3

/* 
Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции), а также любого уровня вложенности. Для определения длины объектов разрешается использовать
    метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).
*/

function deepCompare(initialObj, clonedObj) {
  if (Object.keys(initialObj).length !== Object.keys(clonedObj).length) {
    return false;
  }

  for (key in initialObj) {
  }
  return true;
}
