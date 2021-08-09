// Задание 1

var number = +prompt('Введите число');

var addNumber = +prompt('Сколько прибавить от предыдущего результата');

var substructNumber = +prompt('Сколько отнять от предыдущего результата');

var multiply = +prompt('Сколько умножить от предыдущего результата');

var divide = +prompt('Сколько разделить от предыдущего результата');

var result = (number + addNumber - substructNumber) * multiply / divide;

alert('Формула: ' + '(' + number + ' + ' + addNumber + ' - ' + substructNumber + ')' + ' * ' + multiply + ' / ' + divide + ' \n ' + 'Результат: ' + result);



// Задание 2

var login = prompt('Введин логин:');

if (login === "Админ") {
    var password = prompt('Введите пароль');
    if (password === "Чёрный Властелин") {
        alert('Добро пожаловать!');
    } else if (password === null) {
        alert('Вход отменен')
    } else {
        alert('Пароль неверен')
    }
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}


// Задача 3

var message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' : '';



// Задание 4

var firstName = prompt('Ваша фамилия');

while (firstName === '') {
    alert('Ошибка, введите корректные данные');
    firstName = prompt('Ваша фамилия');
}
if (firstName === null) {
    firstName = '-';
}

var name1 = prompt('Ваше имя');

while (name1 === '') {
    alert('Ошибка, введите корректные данные');
    name1 = prompt('Ваша фамилия');
}
if (name1 === null) {
    name1 = '-';
}

var patronymic = prompt('Ваше отчество');
while (patronymic === '') {
    alert('Ошибка, введите корректные данные');
    patronymic = prompt('Ваша фамилия');
}
if (patronymic === null) {
    patronymic = '-';
}



var ageInYear = +prompt('Возраст в годах');
while (isNaN(ageInYear) || ageInYear === '' || ageInYear > 100 || ageInYear <= 5) {
    alert('Ошибка, введите корректные данные');
    ageInYear = +prompt('Возраст в годах');
}

// Вместо isNaN(ageInYear) можно использовать ageInYear !== NaN, т.к. NaN не равно NaN.

var ageInDay = ageInYear * 365;
var ageFromFiveYear = ageInYear + 5;


var gender = (confirm('Ваш пол - мужской?')) ? 'мужской' : 'женский';

var retired = (ageInYear > 62.5 && gender === 'мужской') ? 'да' :
    (ageInYear > 57.5 && gender === 'женский') ? 'да' : 'нет';


alert('"Ваше ФИО: ' + firstName + ' ' + name1 + ' ' + patronymic + ' \n ' +
    'Ваш возраст в годах: ' + ageInYear + ' \n ' +
    'Ваш возраст в днях: ' + ageInDay + ' \n ' +
    'Через 5 лет вам будет: ' + ageFromFiveYear + ' \n ' +
    'Ваш пол: ' + gender + ' \n ' +
    'Вы на пенсии: ' + retired + '"');