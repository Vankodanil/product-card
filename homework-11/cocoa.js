import { Drink } from "./drink.js";

export class Cocoa extends Drink {
  constructor(size, price, temperature, chocolatPercent) {
    super("Какао", size, price, temperature);
    this.chocolatPercent = chocolatPercent;
  }

  getDetails() {
    return `Процент какао: ${this.chocolatPercent}%`;
  }
}