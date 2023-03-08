import { atom } from "recoil";
import { Product } from "./ProductList";

// each cart : { id, product, quantity }
export interface Cart {
  id: number;
  product: Product;
  quantity: number;
}

export const CartState = atom({
  key: "cart",
  default: [] as Array<Cart>,
});
