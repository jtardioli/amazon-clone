import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
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

const order = ({ order }: Props) => {
  const { created, cart, amount } = order.data;
  return (
    <div>
      <h2>Order</h2>
      <p>{moment.unix(created).format("MMMM do YYYY, h:mma")}</p>
      <p>
        <small>{order.id}</small>
      </p>
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
      <CurrencyFormat
        value={amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />
    </div>
  );
};

export default order;
