/*Задание 1
Необходимо с помощью цикла
for вывести следующие 11 строк в консоль:
    0– это ноль
1– нечетное число
2– четное число
3– нечетное число…
10– четное число*/

function printNums(max) {
    console.log('0– это ноль');
    for (let index = 1; index <= max; index++) {
        if (index % 2 !== 0) {
            console.log(`${index}- нечетное число`);
        } else if (index % 2 === 0) {
            console.log(`${index}- четное число`);
        }
    }
}

let userMax = +prompt('Введите целое положительное число, до которого нужно вводить строки');
if (Number.isInteger(userMax) === true) {
    if (userMax <= 0) {
        console.log('Введено число меньшее или равное нулю');
    } else {
        printNums(userMax);
    }
} else {
    console.log('Введено не число');
}

/*Задание 2
Дан массив[1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий[1, 2, 3, 6, 7]*/

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

function spliceArray(array, pos, amount) {
    const newArray = array.splice(pos, amount);
    console.log(array);
}

const newArr = spliceArray(arr, 3, 2);

/*Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3*/


function getRandomArr(num, max, min) {
    const array = []
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    console.log(array);
    return array;
}

function minElInArray(array) {
    min = array[0];
    array.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    console.log(`Минимальный элемент в массиве ${array} равен ${min}`);
}

function checkElInArray(array, checkEl) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === checkEl) {
            return true;
        }
    }
    // array.forEach(element => {
    //     if (element === checkEl) {
    //         return true;
    //     }
    // }); //почему-то forEach не сработал
};


// const arr = getRandomArr(5, 0, 9);
//можно использовать параметры пользователя
/*arrayLength = +prompt('Введите длину массива (кол-во элементов в нем');
minEl = +prompt('Введите минимальное значение эдемента массива');
maxEl = +prompt('Введите минимальное значение эдемента массива');
const array = getRandomArr(arrayLength, minEl, maxEl);*/
console.log(arr);
minElInArray(arr);
let checkNum = +prompt('Введите целое положительное число, наличие которого нужно проверить в массиве');
console.log(checkElInArray(arr, checkNum) ? `В массиве ${arr} есть число ${checkNum}` : `В массиве ${arr} нет числа ${checkNum}`);

/*
*Необязательное задание.*
    Необходимо вывести горку в консоль(используя цикл
        for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

    x
xx
xxx
xxxx
xxxxx
*/

function symbolMountain(symbol, max) {
    let str = symbol;
    for (let i = 0; i < max; i++) {
        console.log(str);
        str += symbol;
    }
}

userSymbol = prompt('Введите символ для построения горки');
userMax = +prompt('Введите число строк');
symbolMountain(userSymbol, userMax);