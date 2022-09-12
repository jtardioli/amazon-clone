import Image from "next/image";
import React from "react";
import { ActionType } from "../../reducers/reducer";
import { useStateValue } from "../../contexts/StateProvider";
import { Item } from "../../ts/items";
import { URL } from "../../ts/utils";
interface Props {
  id: number;
  title: string;
  img: URL;
  price: number;
  rating: number;
  hideButton?: boolean;
}

const ProductSide = ({ id, title, img, price, rating, hideButton }: Props) => {
  const [_, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({ type: ActionType.REMOVE_FROM_CART, id });
  };
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
        {!hideButton && (
          <button
            onClick={removeFromCart}
            className="bg-[#FEBD69] rounded-md w-[200px] py-1 mt-5"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSide;
