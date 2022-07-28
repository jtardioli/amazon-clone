import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-[#131921] h-16 w-full flex items-center justify-between  px-5">
      <div className="pt-3">
        <Image
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="logo"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>

      <div className="w-4/6  h-3/5 flex">
        <input className="w-11/12 h-full bg-white focus:outline-0 p-3" />
        <button className="bg-[#FEBD69] h-full w-1/12 ">
          <div className="flex items-center justify-center">
            <AiOutlineSearch size={25}></AiOutlineSearch>
          </div>
        </button>
      </div>

      <nav className=" text-white flex justify-between w-2/12 ">
        <div className="flex-col ">
          <p className="font-semibold  text-xs">Hello, Josh</p>
          <p className="font-bold">Sign In</p>
        </div>
        <div className="flex-col">
          <p className="font-semibold text-xs">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="flex-col">
          <p className="font-semibold text-xs">Your</p>
          <p className="font-bold">Prime</p>
        </div>
      </nav>
      <div className="flex items-center justify-center text-white">
        <AiOutlineShoppingCart size={32}></AiOutlineShoppingCart>
        <span className="ml-3">0</span>
      </div>
    </header>
  );
};

export default Header;
