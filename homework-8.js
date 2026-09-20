//Создаем объект 1

const profile = {
  firstName: "Тимур",
  lastName: "Султангабидов",
  age: 41,
  country: "Россия",
  city: "Махачкала",
  mail: "sulttimur@gmail.com",
  work: "Seller"
}

console.log (profile)

//Создаем обЪект 2 и добавляем в него переменной обЪект 1

const car = {
  brand: "Мерседес",
  model: 221,
  year: 2013,
  color: "черный",
  transmission: "АКПП"
}

car.owner = profile;

console.log (car)

// Создаем функцию которая будет принимать объект 2
function checkMaxSpeed (carObject) {
  if (carObject.maxSpeed === undefined) {carObject.maxSpeed = 220}
  else return
}
checkMaxSpeed (car)

//Создаем функцию которая принимает аргументом объект и свойство которое нужно вывести
function showValue (obj, key) {
  console.log (obj [key])
  
}
showValue (profile,"firstName")

//Создать массив строк

const productsList = ["бананы","яблоки","груши","помидоры","картошка","огурцы"]

//Создать 1 массив состоящий из объектов (книги)

const booksList = [ {
  title: "Три мушкетера",
  author: "Александр Дюма",
  year: 1844,
  coverColor: "синий",
  genre: "роман"
},
{
  title: "Шерлок Холмс",
  author: "Артур Конан Дойл",
  year: 1892,
  coverColor: "коричневый",
  genre: "детектив"
},
{
  title: "Гарри Поттер",
  author: "Джоан Роулинг",
  year: 1997,
  coverColor: "красный",
  genre: "фэнтези"
}
]
// Добавить в конец массива еще одну книгу

booksList.push ({
  title: "Властелин колец",
  author: "Дж. Р. Р. Толкин",
  year: 1954,
  coverColor: "зеленый",
  genre: "фэнтези"
})

console.log (booksList)

//Создать массив еще один и объединить с прошлым

const newBooks = [
  {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "черный",
  genre: "роман"
},
{
  title: "Маленький принц",
  author: "Антуан де Сент-Экзюпери",
  year: 1943,
  coverColor: "голубой",
  genre: "сказка"
}
]

const allBooks = [...booksList,...newBooks]

console.log (allBooks)

// Метод map

function markRareBooks(arr) {
  const result = arr.map (function (book)
{ if (book.year > 1950) {
  book.isRare = true}
  else {book.isRare = false}
  return book
});
return result;
}

markRareBooks (allBooks)