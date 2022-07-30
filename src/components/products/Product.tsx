import Image from "next/image";
import { ActionType } from "../../reducers/reducer";
import { useStateValue } from "../../contexts/StateProvider";
import { Item } from "../../ts/items";

const Product = ({ id, title, img, price, rating }: Item) => {
  const [_, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: ActionType.ADD_TO_CART,
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };

  return (
    <div className="flex flex-col items-start w-full p-4 m-3 bg-white border-2 min-w-min hover:cursor-pointer">
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
      <div className="relative w-full mb-4 h-60">
        <Image
          src={img}
          alt="Product Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <button
        onClick={addToCart}
        className="bg-[#FEBD69] rounded-md w-[200px] py-1 m-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
