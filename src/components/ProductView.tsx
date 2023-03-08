import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Product, ProductList } from "../recoil/ProductList";
import { Cart, CartState } from "../recoil/CartState";

const ProductView: React.FC = () => {
  const productList: Array<Product> = useRecoilValue(ProductList);
  // console.log(productList);
  const [cart, setCart] = useRecoilState<Cart[]>(CartState);
  // console.log(cart);

  const handleClick: (product: Product) => any = (product: Product): any => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      // clone
      const newCart: Array<Cart> = [...cart];
      const index: number = cart.findIndex((item: Cart) => item.id === product.id);

      if (index === -1) {
        // not exist
        // console.log(index);
        newCart.push({
          id: product.id,
          product: product,
          quantity: 1,
        });
      } else {
        // exist
        // console.log(newCart);
        // console.log(index);
        newCart[index] = {
          ...cart[index],
          quantity: cart[index].quantity + 1,
        };
        // console.log(newCart);
      }

      setCart(newCart);
    };
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-10">Product List</h1>
      <div className="flex flex-col gap-5 mx-auto w-full max-w-[500px]">
        {productList &&
          productList.map((item: Product) => (
            <div className="flex gap-5 items-center" key={item.id}>
              <h5 className="w-[50%] text-xl flex-2">{item.title}</h5>
              <span className="w-[20%] text-xl">{item.price}</span>
              <button
                className="w-[30%] p-2 bg-blue-500 border rounded-lg text-white"
                onClick={handleClick(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductView;
