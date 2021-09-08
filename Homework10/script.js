var cellBtn = document.getElementById('cellBtn');
var table = document.getElementsByTagName('table')[0];

var tbody = table.firstElementChild;

cellBtn.addEventListener('click', function () {
  var row = document.createElement('tr');

  row.innerHTML = '<td></td><td></td><td></td>';
  tbody.insertBefore(row, tbody.children[0]);
});

table.addEventListener('click', function (event) {

  if (event.target.tagName === 'TD' && event.target.textContent !== 'ADD ROW') {
    var input = document.createElement('input');

    input.type = 'text';

    input.value = event.target.innerText;

    event.target.textContent = '';

    event.target.appendChild(input).focus();


    input.addEventListener('blur', function () {
      input.parentElement.innerHTML = input.value;
    });

    input.addEventListener('keydown', function (event) {
      if (event.key == 'Enter') {
        input.blur();
      }
    });

  }
});