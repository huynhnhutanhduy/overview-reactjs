import CartView from "./CartView";
import ProductView from "./ProductView";
import TotalView from "./TotalView";

const Cart: React.FC = () => {
  return (
    <div className="p-10 mx-auto flex flex-col gap-10">
      <ProductView />
      <CartView />
      <TotalView />
    </div>
  );
};

export default Cart;
