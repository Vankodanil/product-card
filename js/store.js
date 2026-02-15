
import { Product } from "./product.js";

const creamMousse = new Product(
  "product1",
  "Крем увлажняющий",
  "Уход",
  "Увлажнение и питание кожи",
  ["Алоэ вера", "Витамин Е", "Масло ши"],
  "550 ₽"
);

const tonik = new Product(
  "product2",
  "Тоник освежающий",
  "Уход",
  "Очищение и сужение пор",
  ["Гамамелис", "Мята", "Зеленый чай"],
  "420 ₽"
);

export const products = [creamMousse, tonik];