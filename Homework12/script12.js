var btn = document.getElementById('btn');

var wrapper = document.getElementsByClassName('wrapper')[0];
var content = document.createElement('div');

wrapper.appendChild(content);

btn.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

  xhr.send();

  xhr.onload = function () {
    if (this.status === 200) {
      var response = JSON.parse(this.response).data;

      for (var i = 0; i <= response.length; i++) {
        console.log(response[i]);

        var users = document.createElement('div');

        content.appendChild(users);
        users.classList.add('users');
        if (i == 0) {
          users.classList.add('active');
        }
        users.innerHTML = 'Пользователь ' + (i + 1);

        // var description = document.createElement('div');
        // description.innerHTML =
        //   '<img src="' +
        //   response[i] +
        //   '"><p>First name: </p><p>Last name: </p></img>';
        // wrapper.appendChild(description);
      }

      btn.disabled = true; // может можно по другому сделать
    }

    wrapper.addEventListener('click', function (event) {
      var usersElements = document.getElementsByClassName('users');

      if (event.target.className === 'users') {
        for (var i = 0; i < usersElements.length; i++) {
          usersElements[i].classList.remove('active');
        }
        event.target.classList.add('active');
      }
    });
  };
});
