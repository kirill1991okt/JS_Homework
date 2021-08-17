function Cat(name) {
  var foodAmount = 0;

  this.dailyNorm = function (food) {
    if (!arguments.length) {
      return foodAmount;
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

    return (foodAmount = food);
  };

  function formatFoodAmount() {
    return foodAmount + " гр.";
  }

  this.name = name;

  this.feed = function () {
    console.log("Насыпаем в миску " + formatFoodAmount() + " корма.");
  };
}

var barsik = new Cat("Барсик");

console.log(barsik.name);
console.log(barsik.feed());
