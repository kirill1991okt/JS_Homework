function Cat(name) {
  var foodAmount = 0;

  this.dailyNorm = function (food) {
    if (!arguments.length) {
      return foodAmount;
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

  this.name = name;

  this.feed = function () {
    console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
  };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.feed());

//////////////////////////////////////////////////////////////////////////

function Animal(name) {
  this._name = name;

  this._foodAmount = 0;

  var self = this;

  this.dailyNorm = function (food) {
    if (!arguments.length) {
      return this._foodAmount;
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

  this._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
  };

  this.feed = function () {
    console.log('Насыпаем в миску ' + self._formatFoodAmount() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  // this.name = name;

  var animalFeed = this.feed;
  this.feed = function () {
    animalFeed();
    console.log('Кот доволен ^_^');
  };
}

////////////////////////////////////////////////////////////////////////////

function Animal(name) {
  this.name = name;

  this._foodAmount = 0;

  var self = this;

  this.dailyNorm = function (food) {
    if (!arguments.length) {
      return this._foodAmount;
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

  this._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
  };

  this.feed = function () {
    console.log('Насыпаем в миску ' + self._formatFoodAmount() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  // this.name = name;

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

// привет!
