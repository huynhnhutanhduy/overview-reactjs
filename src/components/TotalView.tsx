import { useRecoilValue } from "recoil";
import { CartTotal } from "../recoil/CartTotal";

const TotalCost: React.FC = () => {
  const total: number = useRecoilValue(CartTotal);
  // console.log(total);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-10">Your Order</h1>
      {total > 0 && (
        <p className="text-center text-xl">
          Total: <span>{total}</span>
        </p>
      )}
    </div>
  );
};

export default TotalCost;
