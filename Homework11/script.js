var inputX = document.getElementById('X'),
  inputY = document.getElementById('Y'),
  btn = document.getElementById('btn'),
  container = document.getElementsByClassName('container')[0];

var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
var tbody = document.createElement('tbody');

container.addEventListener('keyup', function (event) {
  if (inputX.value && inputY.value) {
    btn.removeAttribute('disabled');
  }
});

btn.addEventListener('click', function (event) {
  event.preventDefault();

  tbody.innerHTML = '';

  if (
    parseInt(inputX.value) > 1 &&
    parseInt(inputX.value) < 10 &&
    !isNaN(parseInt(inputX.value)) &&
    parseInt(inputY.value) > 1 &&
    parseInt(inputY.value) < 10 &&
    !isNaN(parseInt(inputY.value))
  ) {
    var numberOfRow = parseInt(inputY.value);
    var numberOfColum = parseInt(inputX.value);

    for (var i = 0; i < numberOfRow; i++) {
      var tr = document.createElement('tr');

      for (var j = 0; j < numberOfColum; j++) {
        var td = document.createElement('td');

        if (i % 2 === 0) {
          if (j % 2 === 0) {
            insertInTr(tr, td, 'black');
          } else {
            insertInTr(tr, td, 'white');
          }
        } else {
          if (j % 2 === 0) {
            insertInTr(tr, td, 'white');
          } else {
            insertInTr(tr, td, 'black');
          }
        }
      }

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    body.appendChild(table);

    inputX.value = '';
    inputY.value = '';
  } else {
    alert('Введите корректное целое число: от 1 до 10');
    inputX.value = '';
    inputY.value = '';
  }
});

table.addEventListener('click', function (event) {
  var cell = table.getElementsByTagName('td');

  for (var i = 0; i < cell.length; i++) {
    cell[i].classList.toggle('black');
    cell[i].classList.toggle('white');
  }
});

function insertInTr(tr, td, color) {
  td.classList.add(color);
  tr.appendChild(td);
}
