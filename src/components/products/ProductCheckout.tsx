import Image from "next/image";
import React from "react";

const ProductCheckout = () => {
  return (
    <div className="flex w-full p-4 border-b-2 bg-red hover:cursor-pointer">
      <div className="relative mb-4 mr-6 h-60 min-w-[250px]">
        <Image
          src={img}
          alt="Product Image"
          objectFit="contain"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill(undefined)
            .map((_, i) => {
              return <p key={i}>⭐️</p>;
            })}
        </div>

        <button
          onClick={removeFromCart}
          className="bg-[#FEBD69] rounded-md w-[200px] py-1 mt-5"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCheckout;
