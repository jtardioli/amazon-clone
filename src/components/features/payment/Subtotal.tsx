import Link from "next/link";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../contexts/StateProvider";
import { getCartTotal } from "../../../services/cartServices";

const Subtotal = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className="flex flex-col content-between justify-between w-1/4 h-40 p-6 bg-white">
      <p className="text-lg ">
        Subtotal ({cart.length} Item{cart.length > 1 ? "s" : ""}):{" "}
        <strong>
          <CurrencyFormat
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </strong>
      </p>
      <div className="text-sm ">
        <input type="checkbox" className="mr-2 bg-white accent-slate-50" />
        This order contains a gift
      </div>
      <Link href="/payment">
        <button className="bg-[#FEBD69] rounded-md w-full py-1">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default Subtotal;
