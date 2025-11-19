//Покраска всех карточек
const productCards = document.querySelectorAll('.card-container');
const colorChangeAllCardButton = document.querySelector('#color-change-all-card');
const crimsonColor = '#DC143C';

colorChangeAllCardButton.addEventListener('click',() => {
  productCards.forEach((card) => card.style.background = crimsonColor)
})

//Покраска первой карточки
const limeColorHash = '#00FF00';
const firstProductCard = document.querySelector('.card-container');
const colorChangeFirstCardButton = document.querySelector('#color-change-first-card');

colorChangeFirstCardButton.addEventListener('click',() => {
  firstProductCard.style.background = limeColorHash
})

//Открытие Google страницы
const openGoogleButton = document.querySelector('#open-google');
const googleURL = "https://google.com";

openGoogleButton.addEventListener ('click',openGoogle);

function openGoogle () {
  const answer = confirm('Вы точно хотите открыть Google?')
  if (answer === true)
    window.open(googleURL)

}

//Вывод в консоль лог
const outputNotificationButton = document.querySelector('#output-notification');
outputNotificationButton.addEventListener('click',() => outputNotification('делаю дз №4'));

function outputNotification(massage) {
  alert(massage)
  console.log(massage)
}

//Вывод контента заголовка в консоль лог
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover',() => {
  console.log(mainTitle.textContent)
})

//Смена цвета кнопки с первого на второй и обратно
const colorToggleButton = document.querySelector('#bg-lm');

colorToggleButton.addEventListener('click',() => {
  colorToggleButton.classList.toggle('bg-crimson');
})