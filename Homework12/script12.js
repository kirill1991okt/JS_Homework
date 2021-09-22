var btn = document.getElementById('btn');

var wrapper = document.getElementsByClassName('wrapper')[0];

var content = document.createElement('div');
content.classList.add('content-tabs')
wrapper.appendChild(content);

var description = document.createElement('div');
description.classList.add('description');
wrapper.appendChild(description);



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

                var descriptionUser = document.createElement('div');

                descriptionUser.classList.add('description-user');
                if (i == 0) {
                    descriptionUser.classList.add('active');
                }
                descriptionUser.innerHTML =
                    '<img src="' +
                    response[i]['avatar'] +
                    '"><div><p>First name: ' + response[i]['first_name'] + '</p><p>Last name: ' + response[i]['last_name'] + '</p></div></img>';
                description.appendChild(descriptionUser);


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