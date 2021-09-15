var inputX = document.getElementById('X'),
  inputY = document.getElementById('Y'),
  btn = document.getElementById('btn'),
  container = document.getElementsByClassName('container')[0];

var table = document.createElement('table');

container.addEventListener('keyup', function (event) {
  console.log(inputX.value);
  console.log(inputY.value);
});
