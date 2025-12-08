// Объект на основе своих данных

const personProfile = {
  name: 'Данил',
  surname: 'Ильясов',
  mail: 'danilvanko@icloud.com',
  job: 'Врач, будущий фрондент-девелопер',
  age: '28',
  country: 'Russia',
  city: 'Ufa',
  relationship_status: 'married',
}

//Объект который хранит данные об автомобиле

const car = {
  brand: "Ford",
  model: 'F-150',
  yearOfManufacture: '2019',
  color: 'red',
  transmission: 'automatic',
}

// Добавление свойства вледелец авто в объект car одним значением
car.owner = { ...personProfile}
console.log(car);

//Функция которая аргументом будет принимать объект, 
// описанный в пункте №4 есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, 
// если есть - прекращает выполнение (ничего не делает)

function getMaxSpeedAndUpdateInfoCar(anotherCar) {
    if ('maxSpeed' in anotherCar) {
        return anotherCar;
    }
    // Просто возвращаем новый объект без лишнего присваивания
    return {...anotherCar, maxSpeed: 280};
}

const updatedCar = getMaxSpeedAndUpdateInfoCar(car);
console.log(updatedCar)


//Написать функцию, которая получает первым аргументом  — объект, 
// а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function getCarProperty(carObj, property) {
    return carObj[property];
}

console.log(getCarProperty(car, 'brand'))

//. Создать массив, который содержит названия продуктов (просто строки)

const products = ['meat', 'bread', 'milk', 'vegetables', 'cheese']

// Создаем массив книг плюс второй массив книг из вселенной Гарри Поттера

const booksRus = [
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967,
        coverColor: "черный",
        genre: "роман",
        
    },
    {
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        year: 1866,
        coverColor: "коричневый",
        genre: "психологический роман",
        
    },
    {
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        coverColor: "зеленый",
        genre: "исторический роман",
        
    }
];

const harryPotterBooks = [
    {
        title: "Гарри Поттер и философский камень",
        author: "Джоан Роулинг",
        year: 1997,
        coverColor: "красный",
        genre: "фэнтези",
        universe: "Гарри Поттер",
    },
    {
        title: "Гарри Поттер и Тайная комната",
        author: "Джоан Роулинг",
        year: 1998,
        coverColor: "зеленый",
        genre: "фэнтези",
        universe: "Гарри Поттер",
    },
    {
        title: "Гарри Поттер и узник Азкабана",
        author: "Джоан Роулинг",
        year: 1999,
        coverColor: "синий",
        genre: "фэнтези",
        universe: "Гарри Поттер",
    },
    {
        title: "Гарри Поттер и Кубок огня",
        author: "Джоан Роулинг",
        year: 2003,
        coverColor: "оранжевый",
        genre: "фэнтези",
        universe: "Гарри Поттер",
    }
];

// Объединяем массивы с помощью spread оператора (...)
const allBooks = [...booksRus, ...harryPotterBooks];

console.log("Объединенный массив всех книг:");
console.log(allBooks);
console.log(`Общее количество: ${allBooks.length} книг\n`);

// Функция с использованием map() для добавления свойства isRare
const isRareBooks = allBooks.map(({...obj}) => ({
    ...obj, 
    isRare: obj.year >= 2000
}));


console.log(isRareBooks)
