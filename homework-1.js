//Покраска всех карточек
const colorChangeAllCardButton = document.querySelector('#btn-color-all');
const crimsonColor = '#DC143C';
colorChangeAllCardButton.addEventListener('click', () => {
  const productCards = document.querySelectorAll('.card-list');
  productCards.forEach((card) => {
    card.style.background = crimsonColor;
  });
});

//Покраска первой карточки
const colorChangeFirstCardButton = document.querySelector('#btn-color-first');
const limeColorHash = '#00FF00';

colorChangeFirstCardButton.addEventListener('click', () => {
  const firstProductCard = document.querySelector('.card-list');
  if (firstProductCard) {
    firstProductCard.style.background = limeColorHash;
  }
});

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
outputNotificationButton.addEventListener('click', () => outputNotification('делаю дз №4'));

function outputNotification(mеssage) {
  alert(mеssage)
  console.log(mеssage)
}

//Вывод контента заголовка в консоль лог
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent)
})

//Смена цвета кнопки с первого на второй и обратно
const colorToggleButton = document.querySelector('#switch-color-btn');

colorToggleButton.addEventListener('click', () => {
  colorToggleButton.classList.toggle('bg-crimson');
})