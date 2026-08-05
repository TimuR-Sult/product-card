//Покраска первой карточки

const cardProduct = document.querySelector ('.card');
const changeColorbtn = document.querySelector ('.change-color_btn');
const blueColor = '#848beb';
const redColor = '#831014';

changeColorbtn.addEventListener (`click`, () => {
  cardProduct.style.backgroundColor = blueColor;
})

//Покраска всех карточек

const cardProductList = document.querySelectorAll ('.card');
const changeAllColorbtn = document.querySelector ('.change-all-color_btn');


changeAllColorbtn.addEventListener (`click`, () => {
  cardProductList.forEach ((card) => card.style.backgroundColor = redColor)
})

//Открыть google

const GoogleURL = 'http://google.com'
const openGoogleButton = document.querySelector ('.open-google_btn');
openGoogleButton.addEventListener ('click', GoogleOpen);

function GoogleOpen () {
const answer = confirm ('Вы действительно хотите перейти на Google.com?');
if (answer === true) {window.open (GoogleURL)}};

//Вывод сообщение в консоль

const OutputConsoleLogBtn = document.querySelector ('.output-console-log')
OutputConsoleLogBtn.addEventListener ('click', () => OutputConsoleLog ('Вывод консоли'))
function OutputConsoleLog (messege) {
  alert (messege)
  console.log (messege)
};

//При наведении на заголовок выводиться название заголовка

const TitleMain = document.querySelector ('.main__title');
TitleMain.addEventListener ('mouseenter', () => {
  console.log (TitleMain.textContent)
});

//Изменение цвета кнопки

const ToggleColorBtn = document.querySelector ('.toggle-btn');

ToggleColorBtn.addEventListener ('click', () =>
ToggleColorBtn.classList.toggle('red'));


