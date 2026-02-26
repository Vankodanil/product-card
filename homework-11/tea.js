import { Drink } from "./drink.js";

export class Tea extends Drink {
  constructor(size, price, temperature, teaType) {
    super("Чай", size, price, temperature);
    this.teaType = teaType;
  }

  getDetails() {
    return `Вид чая: ${this.teaType}`;
  }
}