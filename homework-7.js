//Функция которая выводит сообщение

function messege (city, temperature) {
  console.log (`Сейчас в городе ${city} температура - ${temperature} градуса Цельсия` )
}

messege ('Москва',34)

//Создать переменную, которая хранит внутри скорость света
const speedLight = 299792458;

function checkSpeed (speed) {
  if (speed > speedLight) {
    console.log ("Сверхсветовая скорость")
  } else if (speed < speedLight) { 
    console.log ("Субсветовая скорость")
  } else if (speed === speedLight) {
    console.log ("Скорость света")
  }
};
checkSpeed (298888888);

//Создать переменную продукт и цену

const product = 'Хлеб'
let price = 60

function cash (sum) {
  if (sum > price) {
    console.log (`${product} приобретен. Спасибо за покупку!`)
  } else {
    console.log (`Вам не хватает ${price-sum}. Пополните баланс! `)
  }}

cash (40)

//Функция определения оценки на экзамене

function reportCard (points) {
  if (points >= 40) {
    console.log (`Ты не сдал экзамен`)
  } else if (points >= 60) {
    console.log ('Твоя оценка - удовлетворительно')
  } else if (points >= 80) {
    console.log ('Твоя оценка - хорошо!')
  } else if (points >= 100) {
    console.log ('Твоя оценка - Отлично! Поздравляем!')
  }
}

reportCard(43)

// Создать 3 переменных вывести в консоль

const name = 'Тимур'
let age = 40
let height = 178

console.log (`Меня зовут ${name}, мне ${age} лет, мой рост ${height} см`)