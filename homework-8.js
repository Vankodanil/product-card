  import { products } from "./products.js";

  // 3 Cоздать и реализовать шаблон для продуктовых карточек

  const productTemplate = document.getElementById('product-template')
  const productItem = document.getElementById('product-item')

  function productCard(productToRender) {
    productToRender.forEach(product => { 
      const productClone = productTemplate.content.cloneNode(true);
      productClone.querySelector('.product-image').src = `/img/${product.image}.png`
      productClone.querySelector('.description').textContent = product.description
      productClone.querySelector('.name').textContent = product.name
      productClone.querySelector('.product-properties').textContent = product.properties
      productClone.querySelector('.composition-list').innerHTML = product.composition.map(item =>`<li>${item}</li>`).join('')
      productClone.querySelector('.product-cost').innerHTML = `${product.price} ₽`;
      productItem.appendChild(productClone)
    });
  }

  // 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productDescription = products.reduce((acc, product,index) => 
index === 0 ? product.name : `${acc}; ${product.name}`, 
  '');

console.log(productDescription);

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const getProductNames = products.reduce((acc, product) => [
  ...acc,
  { [product.name]: product.description } 
], []); 

console.log(getProductNames);

// 6  Реализовать функцию

const getCardsCount = () => {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5")
  const selectedCount = Number(userInput);
  if (selectedCount > 0 && selectedCount <= products.length){
    productCard(products.slice(0,selectedCount))
  } else {
    alert ("Введите число от 1 до 5")
  }
}

getCardsCount()
