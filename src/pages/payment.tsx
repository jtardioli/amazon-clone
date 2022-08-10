import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { NextPage } from "next";

import React, { ChangeEvent, FormEvent, useState } from "react";
import CurrencyFormat from "react-currency-format";

import OrderSummary from "../components/features/payment/OrderSummary";
import PaymentHeader from "../components/features/payment/PaymentHeader";
import ProductSide from "../components/products/ProductSide";
import { useStateValue } from "../contexts/StateProvider";
import { getCartTotal } from "../services/cartServices";

const Payment: NextPage = () => {
  const [{ cart }] = useStateValue();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    // do stuff
  };

  const handleChange = (e: any) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="w-full bg-white">
      <PaymentHeader />

      <div className="flex px-40 ">
        <div className="w-4/5 p-6 mr-5 ">
          <div className="flex items-start justify-between pb-3 border-b">
            <p className="text-lg font-semibold ">1</p>
            <p className="text-lg font-semibold ">Shipping address</p>
            <div className="w-[65%] ">
              <div className="text-sm max-w-[400px]">
                <p>Joshua Tardioli</p>
                <p>1827 Windflower Way</p>
                <p>ottawa, Ontario K1C 5Z8</p>

                <p>Add delivery instructions</p>
                <p>
                  Change Amazon Hub Icon Or pick up near this address - See
                  nearby pick-up locations
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between py-3">
            <p className="text-lg font-semibold ">2</p>
            <p className="text-lg font-semibold ">Review items and shipping</p>
            <div className="w-[65%] "></div>
          </div>
          {cart.map((item) => {
            const { id, title, img, price, rating } = item;
            return (
              <ProductSide
                key={item.id}
                id={id}
                title={title}
                img={img}
                price={price}
                rating={rating}
              />
            );
          })}
          <div className="flex items-start justify-between py-3 border-b">
            <p className="text-lg font-semibold ">3</p>
            <p className="text-lg font-semibold ">Payment Method</p>
            <div className="w-[65%] ">
              <div className="text-sm max-w-[400px]">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <div className="flex text-lg text-[#B12705] py-4">
                    <h3>
                      Order Total:{" "}
                      <CurrencyFormat
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        decimalScale={2}
                      />
                    </h3>
                  </div>
                  <button className="bg-[#FEBD69] rounded-md w-full py-2 text-sm mb-1">
                    Place your order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};

export default Payment;
