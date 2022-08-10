import { NextPage } from "next";
import Image from "next/image";
import CheckoutAd from "../components/features/payment/CheckoutAd";
import Subtotal from "../components/features/payment/Subtotal";
import ProductSide from "../components/products/ProductSide";
import { useStateValue } from "../contexts/StateProvider";

const Checkout: NextPage = () => {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="flex flex-col items-center justify-start p-4 ">
      <CheckoutAd />
      <div className="flex w-full">
        <div className="w-4/5 p-6 mr-5 bg-white ">
          <div className="pb-4 border-b-2">
            <h2 className="text-3xl ">Shopping Cart</h2>
          </div>

          <div className="">
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
          </div>
        </div>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
