// 3. Функция, которая принимает 2 параметра:
//город и температуру и выводит сообщение в консоль

function showWeatherInfo(city,temperature) {
  console.log('Сейчас в ${city} температура ${temperature} градусов по Цельсию')
}

showWeatherInfo('Уфа', -10);

// 4. Функция сравнивает скорость со скоростью звука и выводит
// если выше — "Сверхзвуковая скорость" если ниже — "Дозвуковая скорость" если равна — "Скорость звука"

const ACOUSTIC_SPEED = 343

function compareSpeed(speed) {
  if (speed > ACOUSTIC_SPEED) {
    console.log('Сверхзвуковая скорость');
  } else if (speed == ACOUSTIC_SPEED) {
      console.log('Скорость звука');
    } else {
      console.log('Дозвуковая скорость');
    }
}

compareSpeed(343);

// 5. Функция принимает текущий баланс пользователя и проверяет, хватает ли денег на покупку товара.
const product = 'телефон'
const productPrice = '60000'

function purchasePhone(balance) {
  if (balance > productPrice) {
    console.log('${product} приобретен, спасибо за покупку!');
  } else {
    console.log('Вам не хватает ${productPrice - balance}$ пополните баланс');
  }
}
purchasePhone('55000')

//6. Создать 1 функцию

function displayMessage(){
console.log('Надеюсь так подойдет')
}

displayMessage()

//7. Создать 3 переменные 

const laptop = 'Ноутбук'
var city = 'Уфа'
let name = 'Данил'
