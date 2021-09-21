var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.send();

    xhr.onload = function () {
        console.log(this.status);
    };



});