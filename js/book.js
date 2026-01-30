import { Product } from "./product.js";
export class Book extends Product {
  constructor(image, name, desc, properties, composition, price, author) {
    super(image, name, desc, properties, composition, price);
    this.author = author;
  }
}