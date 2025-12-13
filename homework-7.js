import { commentsSocialNetwork } from './comments.js';

//2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1,2,3,4,5,6,7,8,9,10]
const filterNumbers = numbers.filter(num => num >= 5);
console.log(filterNumbers)

//3. Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.

const furniturs = [ "кресло", "диван", "стул", "стол", "кровать", "шкаф"]
const item = "кровать";
console.log(furniturs.includes(item) )

//4. Написать функцию, которая аргументом будет принимать массив
//  и изменять его порядок на противоположный ("переворачивать") 
// . Два вышеуказанных массива с помощью этой функции перевернуть.

function getReversedArray(arr) {
  return arr.reverse();
}

getReversedArray(numbers);
getReversedArray(furniturs);

console.log(numbers);
console.log(furniturs);

//7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

console.log( commentsSocialNetwork.filter(c => c.email.includes(".com")));

//8. Перебрать массив таким образом,
//  что бы пользователи с id меньше или равно 5 имели postId: 2, а те,
//  у кого id больше 5, имели postId: 1

const updatedComments = commentsSocialNetwork.map(comment => ({
  ...commentsSocialNetwork,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments)

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const idNameArray = commentsSocialNetwork.map(comment => ({
  id: comment.id,
  name: comment.name
}));

 console.log(idNameArray)

 // 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
 //  если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false

const result = commentsSocialNetwork.map(c => ({...c, isInvalid: c.body.length > 180}));
console.log(result);

//Уровень 3: 11. Почитать про метод массива reduce. Используя его, 
// вывести массив почт и провернуть тоже самое с помощью метода map

const emailReduce = commentsSocialNetwork.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailReduce)
const emailMap = commentsSocialNetwork.map(comment => comment.email);
console.log( emailMap);

//12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailStr = emailMap.toString();
console.log(emailStr)

// метод join()

const emailJoin = emailMap.join('; ')
console.log(emailJoin)
