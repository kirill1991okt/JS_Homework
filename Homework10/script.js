var cellBtn = document.getElementById('cellBtn');
var table = document.getElementsByTagName('table')[0];

var tbody = table.firstElementChild;

cellBtn.addEventListener('click', function () {
  var row = document.createElement('tr');

  row.innerHTML = '<td></td><td></td><td></td>';
  tbody.insertBefore(row, tbody.children[0]);
});

console.log(tbody.children[0]);
