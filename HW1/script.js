/*Задание 1
Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
Вывести в консоль температуру в Цельсиях и Фаренгейтах.

Задание 2
Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.*/

let tempCels;
tempCels = 20;
tempFahr = tempCels * 9 / 5 + 32;
console.log(`Температура в градусах Цельсия ${tempCels}, в градусах Фаренгейта ${tempFahr}`);

const name = 'Mikhail';
let admin;
admin = name;
console.log(admin);