/*Задание 1
Дан объект numbers.Необходимо в консоль вывести все значения больше или равные 3.*/

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

function checkEls(obj, value) {
    for (const key in obj) {
        if (obj[key] >= value) { console.log(obj[key]); }
    }
}
let userValue = +prompt('Введите значение, не менее которого должны быть элементы');
checkEls(numbers, userValue);

/*Задание 2
Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.*/

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text); //функцию не вижу смысла делать

/*Задание 3
Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.*/

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(product => product.price = product.price * 0.85); //интересно, можно ли сделать функцию, чтобы проверяло любой ключ, а не именно price
console.log(products);

/*Задание 4
1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.
2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.*/

const products4 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

console.log(products4.filter(productsWithPhoto => 'photos' in productsWithPhoto &&
    productsWithPhoto.photos.length !== 0));

console.log(products4.sort((product1, product2) =>
    product1.price - product2.price));


/*function filter(obj, par) {
    console.log(obj.filter(object => par in object &&
        object.par.length !== 0));
}

let userValue4 = prompt('Введите параметр, по наличию которого нужно отфильтровать объект');
filter(products4, userValue4); //хотел сделать аналогичную функцию, но она не сработала - почему? :(*/

/*Задание 5
Дано 2 массива
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива— значениями.*/
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

function unionObjects(obj1, obj2) {
    const newObj = {};
    for (let index = 0; index <= obj1.length; index++) {
        let key = obj1[index];
        let value = obj2[index];
        newObj[key] = value;
        newObj[obj1[index]] = obj2[index];
    }
    console.log(newObj);
}

unionObjects(en, ru);