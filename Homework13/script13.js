// Задание 1

var reg =
  /^([a-z]{3,10}\_[a-z]{3,10})(\-[\d]{4})?@[\da-z]{1,10}(-?|\.?)[\da-z]{1,10}.com$/i;

reg.test('name_surname-1234@gmail.com');

// Задание 2

// Вариант 1
function validationPhone(number) {
  var regExp =
    /^((\+?(375-?))|(8-?0))(17|44|29|25|33)-?[1-9]{1}[\d]{2}(-?[\d]{2}){2}$/;
  var phone = number.match(regExp);
  if (phone) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Вариант 2

function validationPhone(number) {
  return /^((\+?(375-?))|(8-?0))(17|44|29|25|33)-?[1-9]{1}[\d]{2}(-?[\d]{2}){2}$/.test(
    number
  );
}

// Задание 3

//Вариант 1
function countVowel(str) {
  var vowel = str.match(/[a,e,i,o,u,y]/gi);
  return vowel === null ? 0 : vowel.length;
}

// Вариант 2
function countVowel(str) {
  var newStr = str.replace(/[^a,e,i,o,u,y]/gi, '');
  return newStr.length;
}