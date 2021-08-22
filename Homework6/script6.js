function Animal(name) {
  this.name = name;

  var foodAmount = 0;

  var self = this;

  self.dailyNorm = function (food) {
    if (!arguments.length) {
      return formatFoodAmount();
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

    return (foodAmount = food);
  };

  function formatFoodAmount() {
    return foodAmount + ' гр.';
  }

  this.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);

  var animalFeed = this.feed;
  this.feed = function () {
    animalFeed();
    console.log('Кот доволен ^_^');
    return this;
  };

  this.stroke = function () {
    console.log('Гладим кота');
    return this;
  };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(80));
console.log(barsik.dailyNorm());
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());
console.log(barsik.stroke().feed().stroke().stroke().feed());
