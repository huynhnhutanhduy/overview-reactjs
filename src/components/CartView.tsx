import React from "react";
import { useRecoilState } from "recoil";
import { Cart, CartState } from "../recoil/CartState";
import { Product } from "../recoil/ProductList";

const CartView: React.FC = () => {
  // const cartList = useRecoilValue(CartState);
  const [cart, setCart] = useRecoilState<Cart[]>(CartState);

  // console.log(cart);
  const handleClickDown: (product: Product) => any = (product: Product): any => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // clone
      const newCart: Cart[] = [...cart];
      const index: number = cart.findIndex((item: Cart) => item.id === product.id);
      newCart[index] = {
        ...cart[index],
        quantity: cart[index].quantity - 1 >= 0 ? cart[index].quantity - 1 : 0,
      };
      if (newCart[index].quantity === 0) {
        // console.log(newCart[index]);
        newCart.splice(index, 1);
        // console.log(newCart);
      }
      setCart(newCart);
    };
  };

  const handleClickUp: (product: Product) => any = (product: Product): any => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const newCart: Cart[] = [...cart];
      const index: number = cart.findIndex((item: Cart) => item.id === product.id);
      newCart[index] = {
        ...cart[index],
        quantity: cart[index].quantity + 1,
      };
      // console.log(newCart);
      setCart(newCart);
    };
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-10">Cart Information</h1>
      <div className="flex flex-col gap-5 mx-auto w-full max-w-[500px]">
        {cart &&
          cart.map((item: Cart) => (
            <div className="flex gap-5 items-center text-xl" key={item.id}>
              <h5 className="w-[50%] flex-2">{item.product.title}</h5>
              <span className="w-[20%]">{item.product.price}</span>
              <div className="w-[30%] grid grid-cols-3 gap-5 place-items-center">
                <button
                  className="inline-block px-3 py-1 border rounded-full border-[#ccc]"
                  onClick={handleClickDown(item.product)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="inline-block px-3 py-1 border rounded-full border-[#ccc]"
                  onClick={handleClickUp(item.product)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartView;
