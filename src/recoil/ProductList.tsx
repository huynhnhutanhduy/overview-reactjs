import { atom } from "recoil";

// each product : { id, title, price }
export interface Product {
  id: number;
  title: string;
  price: number;
}

export const ProductList = atom({
  key: "ProductList",
  default: [
    { id: 1, title: "Áo thun nam", price: 150000 },
    { id: 2, title: "Áo sơ mi nữ", price: 250000 },
    { id: 3, title: "Áo khoác thời trang", price: 300000 },
  ] as Array<Product>,
});
