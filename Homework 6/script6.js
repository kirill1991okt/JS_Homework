function Animal(name) {
  // this._name = name;

  this._foodAmount = 0;

  var self = this;

  this.dailyNorm = function (food) {
    if (!arguments.length) {
      return this._foodAmount;
    }

    if (typeof food === "string" || !food || food < 0) {
      return alert("Введите корректное число!");
    }

    if (food < 50) {
      throw new Error("Нужно больше еды!");
    }
    if (food > 500) {
      throw new Error("Нужно меньше еды!");
    }

    return (this._foodAmount = food);
  };

  this._formatFoodAmount = function () {
    return this._foodAmount + " гр.";
  };

  this.feed = function () {
    console.log("Насыпаем в миску " + self._formatFoodAmount() + " корма.");
  };
}

function Cat(name) {
  this.name = name;
  Animal.apply(this, arguments);

  var animalFeed = this.feed;
  this.feed = function () {
    animalFeed();
    console.log("Кот доволен ^_^");
    return this;
  };

  this.stroke = function () {
    console.log("Гладим кота");
    return this;
  };
}

var barsik = new Cat("Барсик");

console.log(barsik.name);
console.log(barsik.dailyNorm());
console.log(barsik.dailyNorm(80));
console.log(barsik.dailyNorm());
console.log(barsik.feed().stroke());
console.log(barsik.stroke().feed());
console.log(barsik.stroke().feed().stroke().stroke().feed());
