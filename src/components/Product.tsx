import Image from "next/image";
import { URL } from "../ts/utils";

interface Props {
  title: string;
  img: URL;
  price: number;
  rating: number;
}

const Product = ({ title, img, price, rating }: Props) => {
  return (
    <div className="flex flex-col min-w-min w-full items-start bg-white p-4 m-3 hover:cursor-pointer">
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
      <div className=" w-full h-60  relative mb-4">
        <Image
          src={img}
          alt="Product Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Product;
