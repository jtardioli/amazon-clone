import Link from "next/link";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../contexts/StateProvider";
import { getCartTotal } from "../../../services/cartServices";

const OrderSummary = () => {
  const [{ cart }] = useStateValue();
  return (
    <div className="flex flex-col content-between justify-between w-1/4  bg-white border-[1px] border-gray-300 rounded-md overflow-hidden">
      <div className="p-6 pb-2">
        <button className="bg-[#FEBD69] rounded-md w-full py-2 text-sm mb-1">
          Place your order
        </button>
        <p className="mb-4 text-xs text-center">
          By placing your order, you agree to Amazon&apos;s privacy notice and
          conditions of use.
        </p>
        <div className=" border-t-[1px] border-b-[1px] py-4">
          <h4>Order Summary</h4>
          <div className="text-sm">
            <div className="flex items-center justify-between">
              <p>Items:</p>
              <CurrencyFormat
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping & Handling</p>
              <CurrencyFormat
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>Total before tax:</p>
              <CurrencyFormat
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>Estimated GST/HST:</p>
              <CurrencyFormat
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
              />
            </div>
            <div className="flex items-center justify-between">
              <p>Estimated PST/RST/QST:</p>
              <CurrencyFormat
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                decimalScale={2}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg text-[#B12705] py-4">
          <p>Order Total</p>
          <CurrencyFormat
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </div>
      </div>
      <div className="bg-[#F6F6F6] py-4 text-xs  border-t-[1px] border-b-[1px] p-6">
        <p className="mb-2"> How are shipping costs calculated?</p>
        <p>
          Prime Shipping has been applied to the eligible items in your order.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
