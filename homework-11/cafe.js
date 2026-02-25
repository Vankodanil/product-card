export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  showInfo() {
    return `Кафе "${this.name}" - находится на ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ: ${drink.name}`);
    console.log(`Уточнение: ${drink.getDetails()}`);
    drink.serve();
  }
}