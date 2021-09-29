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
  if (localStorage.data) {
    var dataParse = JSON.parse(localStorage.data);

    createUsersAndDescriptionUser(dataParse);

    description.children[0].classList.add('active');
    content.children[0].classList.add('active');

    btn.removeEventListener('click', clickHandler);

    var usersTabs = document.getElementsByClassName('users');
    var userDescription = document.getElementsByClassName('description-user');

    createTabsAndDescription(usersTabs, userDescription);
  } else {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.send();

    xhr.onload = function () {
      var currentStatus = +String(this.status)[0];

      if (currentStatus === 2 || currentStatus === 3) {
        var response = JSON.parse(this.response).data;

        localStorage.data = JSON.stringify(response);

        createUsersAndDescriptionUser(response);

        description.children[0].classList.add('active');
        content.children[0].classList.add('active');

        btn.removeEventListener('click', clickHandler);

        var usersTabs = document.getElementsByClassName('users');
        var userDescription =
          document.getElementsByClassName('description-user');

        createTabsAndDescription(usersTabs, userDescription);
      } else {
        console.log(this.status + ': ' + xhr.statusText);
        var blockError = document.createElement('div');
        blockError.classList.add('error');
        blockError.innerHTML = 'Ошибка ' + this.status + ': ' + this.statusText;
        description.appendChild(blockError);
        btn.style.display = 'none';
      }
    };

    xhr.onloadend = function () {
      console.log('Загрузка завершена');
    };
  }
}

function createUsersAndDescriptionUser(response) {
  for (var i = 0; i < response.length; i++) {
    var users = document.createElement('div');

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
}

function createTabsAndDescription(tabs, description) {
  for (var i = 0; i < tabs.length; i++) {
    description[i].setAttribute('id', 'tab_' + [i]);
    tabs[i].dataset.tab = 'tab_' + [i];
    tabs[i].addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        var tabId = this.getAttribute('data-tab');

        var currentTab = document.getElementById(tabId);

        for (var j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('active');
        }

        for (var j = 0; j < description.length; j++) {
          description[j].classList.remove('active');
        }

        this.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }
}
