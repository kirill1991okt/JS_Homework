var btn = document.getElementById('btn');
var wrapper = document.getElementsByClassName('wrapper')[0];

var content = document.createElement('div');
content.classList.add('content-tabs');
wrapper.appendChild(content);

var description = document.createElement('div');
description.classList.add('description');
wrapper.appendChild(description);

btn.addEventListener('click', clickHandler);

function clickHandler() {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

  xhr.send();

  xhr.onload = function () {
    if (this.status === 200) {
      var response = JSON.parse(this.response).data;

      localStorage.data = JSON.stringify(response);

      for (var i = 0; i < response.length; i++) {
        var users = document.createElement('div');
        // debugger;
        users.classList.add('users');
        users.innerHTML = 'Пользователь ' + (i + 1);
        content.appendChild(users);
      }

      for (var j in response) {
        var descriptionUser = document.createElement('div');

        descriptionUser.classList.add('description-user');

        descriptionUser.innerHTML =
          '<img src="' +
          response[j].avatar +
          '"><div><p>First name: ' +
          response[j].first_name +
          '</p><p>Last name: ' +
          response[j].last_name +
          '</p></div></img>';
        description.appendChild(descriptionUser);
      }

      description.children[0].classList.add('active');
      content.children[0].classList.add('active');

      btn.removeEventListener('click', clickHandler);
      //   btn.disabled = true; // может можно по другому сделать

      var usersTabs = document.getElementsByClassName('users');
      var userDescription = document.getElementsByClassName('description-user');

      for (var i = 0; i < userDescription.length; i++) {
        userDescription[i].setAttribute('id', 'tab_' + [i]);
        usersTabs[i].dataset.tab = 'tab_' + [i];
      }

      for (var i = 0; i < usersTabs.length; i++) {
        usersTabs[i].addEventListener('click', function () {
          if (!this.classList.contains('active')) {
            var tabId = this.getAttribute('data-tab');
            console.log(tabId);
            var currentTab = document.getElementById(tabId);
            console.log(currentTab);
            for (var j = 0; j < usersTabs.length; j++) {
              usersTabs[j].classList.remove('active');
            }

            for (var j = 0; j < userDescription.length; j++) {
              userDescription[j].classList.remove('active');
            }

            this.classList.add('active');
            currentTab.classList.add('active');
          }
        });
      }
    }
  };
}
