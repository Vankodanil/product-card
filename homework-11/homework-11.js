import { Cafe } from "./cafe.js";
import { Coffee } from "./coffee.js";
import { Tea } from "./tea.js";
import { Lemonade } from "./lemonade.js";
import { Cocoa } from "./cocoa.js";

const cafe = new Cafe("Starbuks", "ул. Зорге 15");

console.log(cafe.showInfo(), "\n");

const drink1 = new Coffee("Средний", 150, 70, "Арабика", "Безлактозное молоко");
const drink2 = new Tea("Средний", 100, 50, "Зеленый");
const drink3 = new Lemonade("Большой", 160, 5, "Средняя");
const drink4 = new Cocoa("Маленький", 120, 50, 35);

cafe.orderDrink(drink1);
cafe.orderDrink(drink2);
cafe.orderDrink(drink3);
cafe.orderDrink(drink4);

console.log(drink1.showInfo());
console.log(drink2.showInfo());
console.log(drink3.showInfo());
console.log(drink4.showInfo());