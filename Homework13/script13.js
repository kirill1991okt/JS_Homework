// Задача 1

var reg = /^([A-Za-z]{3,10}\_[A-Za-z]{3,10})(\-[0-9]{0,4})?@[\-?\.?0-9A-Za-z]{2,20}\.com$/;

reg.test('name_surname-1234@gmail.com');