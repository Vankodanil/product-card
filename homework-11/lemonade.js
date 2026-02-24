import { Drink } from "./drink.js";

export class Lemonade extends Drink {
  constructor(size, price, temperature, sweetnessLevel) {
    super("Лимонад",size, price, temperature);
    this.sweetnessLevel = sweetnessLevel;
  }

  getDetails() {
    return `Уровень сладости: ${this.sweetnessLevel}`;
  }
}