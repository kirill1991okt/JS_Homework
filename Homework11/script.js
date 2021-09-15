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


  if (parseInt(inputX.value) > 1 && parseInt(inputX.value) < 10 && !isNaN(parseInt(inputX.value)) && parseInt(inputY.value) > 1 && parseInt(inputY.value) < 10 && !isNaN(parseInt(inputY.value))) {

    // alert('Это успех!!!');
    var numberOfRow = parseInt(inputY.value);
    var numberOfColum = parseInt(inputX.value);

    for (var i = 0; i < numberOfRow; i++) {
      var tr = document.createElement('tr');

      for (var j = 0; j < numberOfColum; j++) {
        var td = document.createElement('td');
        tr.appendChild(td);
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