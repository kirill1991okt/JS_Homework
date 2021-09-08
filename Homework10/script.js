var cellBtn = document.getElementById('cellBtn');
var table = document.getElementsByTagName('table')[0];

var tbody = table.firstElementChild;

cellBtn.addEventListener('click', function () {
  var row = document.createElement('tr');

  row.innerHTML = '<td></td><td></td><td></td>';
  tbody.insertBefore(row, tbody.children[0]);
});

table.addEventListener('click', function (event) {
  //   console.log(event);
  console.dir(event.target);
  if (event.target.tagName === 'TD' && event.target.textContent === '') {
    event.target.innerHTML = '<input type="text">';
    event.target.innerHTML.autofocus = true;
    console.log(event.target.innerHTML);
  }
});

// tbody.lastElementChild.firstElementChild.getAttribute('id');
