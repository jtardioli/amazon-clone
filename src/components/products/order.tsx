import moment from "moment";
import { userAgent } from "next/server";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../contexts/StateProvider";
import { Item } from "../../ts/items";
import ProductSide from "./ProductSide";

export interface OrderInterface {
  created: number;
  cart: Item[];
  amount: number;
}
interface Props {
  order: {
    id: string;
    data: OrderInterface;
  };
}

const Order = ({ order }: Props) => {
  const [{ user }, dispatch] = useStateValue();
  const { created, cart, amount } = order.data;
  return (
    <div className="flex flex-col mb-2 bg-white border-2 rounded-lg">
      <header className="text-[#565959] flex flex-row justify-between bg-[#EFF2F2] p-3">
        <div className="flex flex-row justify-between w-[55%] text-xs">
          <div className="flex flex-col">
            <p className="uppercase ">Order Placed</p>
            <p className="text-sm ">
              {moment.unix(created).format("MMMM DD, YYYY")}
            </p>
          </div>
          <div>
            <p className="uppercase">Total</p>
            <p className="text-[0.9rem] ">
              <CurrencyFormat
                value={amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"USD$ "}
                decimalScale={2}
              />
            </p>
          </div>
          <div>
            <p className="uppercase">Ship To</p>
            <p className="text-[0.9rem]">{user?.email}</p>
          </div>
        </div>
        <p className="text-[0.9rem]">Order # {order.id}</p>
      </header>
      {cart.map((item) => (
        <ProductSide
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
    </div>
  );
};

export default Order;
