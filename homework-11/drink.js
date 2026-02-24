export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
  this.name = name;
  this.size = size;
  this.price = price;
  this.#temperature = temperature;
  }
showInfo() {
  return {
    name: this.name,
    size: this.size,
    price: this.price,
    temperature: this.#temperature
  };
}

getTemperature() {
  return this.#temperature;
}

  setTemperature(newTemperature) {
    this.#temperature = newTemperature;
  }

  #prepare() {
    console.log(`Готовим заказ: ${this.name}...`);
  }

serve() {
  this.#prepare();
  console.log(`${this.name} готов. Отдать клиенту`)
}
  getDetails() {
    return `Напиток: ${this.name}, Размер: ${this.size}`;
  }
}