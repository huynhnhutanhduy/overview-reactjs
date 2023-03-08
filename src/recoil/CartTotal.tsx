import { selector } from "recoil";
import { Cart, CartState } from "./CartState";

export const CartTotal = selector({
  key: "CartTotal",
  get: ({ get }) => {
    const cart: Array<Cart> = get(CartState);
    const total: number = cart.reduce(
      (total, current) => total + current.product.price * current.quantity,
      0
    );
    return total;
  },
});
