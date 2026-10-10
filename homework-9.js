/* Создать массив чисел от 1 до 10. Отфильтровать его таким образом, 
что бы мы получил массив чисел, начиная с 5.*/

import { commentsUsers } from "./comments.js";

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.filter (number => number>=5);

console.log (newNumbers);

/* Создать массив строк, относящихся к любой сущности
(название фильмов/книг, кухонные приборы, мебель и т.д.), 
проверить, есть ли в массиве какая-то определенная сущность.*/

const kitchenAppliances = ["Тостер", "Блендер", "Чайник", "Микроволновка", "Кофемашина"];

const hasItem = kitchenAppliances.includes("Тостер");
console.log (hasItem);

/* Написать функцию, которая аргументом 
будет принимать массив и изменять его порядок на противоположный ("переворачивать") .
Два вышеуказанных массива с помощью этой функции перевернуть.*/

function reversArray (array) {array.reverse ()
console.log (array);
}

reversArray (numbers);
reversArray (kitchenAppliances);

/* Добавить файл comments.js, в нём создать константу и в него 
поместить первые 10 объектов этого (ссылкка) массива. Данный массив представляет
собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу.
Не забудьте удалить квадратные кавычки у ключей объектов 
(можно использовать Chat GPT, что бы не делать это вручную)*/

const commentsByEmail = commentsUsers.filter (function (comment) {if (comment.email.endsWith (".com")) 
console.log (comment.body)}
);
console.log (commentsByEmail);

/*Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
а те, у кого id больше 5, имели postId: 1 */

const updateUsers = commentsUsers.map (user => {if (user.id <= 5) {
  return {...user, postId: 2}} 
  else {return {...user, postId: 1}}});

console.log (updateUsers);

/* Перебрать массив, что бы объекты состояли только из айди и имени */

const shortUsers = commentsUsers.map (user => {return { id: user.id, name: user.name}});

console.log (shortUsers);

/* Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true,
 меньше - false.*/

 const checkedComments = commentsUsers.map (user => {if (user.body.length > 180) 
  {return {...user, isInvalid: true}}
  else {return {...user, isInvalid: false}}
});
 console.log (checkedComments);

 /* Почитать про метод массива reduce. Используя его, 
вывести массив почт и провернуть тоже самое с помощью метода map*/



const userEmails = commentsUsers.reduce ((accumulator, user) => {accumulator.push (user.email)
  return accumulator;
},[]);
console.log (userEmails);


const userEmailsShorts = commentsUsers.map (user => {return user.email});
console.log (userEmailsShorts);

/*Почитать про методы toString(), join() и 
перебрав массив с задания №11, привести его к строке.*/

console.log (userEmails.toString());
console.log (userEmails.join(' - '));