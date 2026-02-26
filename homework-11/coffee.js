import { Drink } from "./drink.js";

export class Coffee extends Drink {
  constructor(size, price, temperature, beansType, milkType) {
    super("Кофе", size, price, temperature);
    this.milkType = milkType;
    this.beansType = beansType;
  }

  getDetails() {
    return `Тип зерен: ${this.beansType}, Молоко: ${this.milkType}`;
  }
}