import { Sign } from "crypto";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useStateValue } from "../../contexts/StateProvider";
import { auth } from "../../config/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Header = () => {
  const [{ cart, user }] = useStateValue();
  const router = useRouter();
  console.log(router.pathname);

  const handleAuth = async () => {
    if (user) {
      try {
        await signOut(auth);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <header
      className="bg-[#131921] h-16 w-full flex items-center justify-between  px-5"
      style={{ display: router.pathname === "/payment" ? "none" : "flex" }}
    >
      <Link href="/">
        <div className="pt-3 hover:cursor-pointer">
          <Image
            src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
            alt="logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      </Link>

      <div className="flex w-4/6 h-3/5">
        <input className="w-11/12 h-full p-3 bg-white focus:outline-0" />
        <button className="bg-[#FEBD69] h-full w-1/12 ">
          <div className="flex items-center justify-center">
            <AiOutlineSearch size={25}></AiOutlineSearch>
          </div>
        </button>
      </div>

      <nav className="flex justify-between w-2/12 text-white ">
        <Link href={!user ? "/login" : ""}>
          <div
            onClick={handleAuth}
            className="flex-col truncate hover:cursor-pointer max-w-[90px]"
          >
            <p className="text-xs font-semibold truncate">
              Hello{user && `, ${user?.email}`}
            </p>
            <p className="font-bold">{user ? "Sign Out" : "Sign In"}</p>
          </div>
        </Link>

        <div className="flex-col">
          <p className="text-xs font-semibold">Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="flex-col">
          <p className="text-xs font-semibold">Your</p>
          <p className="font-bold">Prime</p>
        </div>
      </nav>
      <Link href="/checkout">
        <div className="flex items-center justify-center text-white hover:cursor-pointer">
          <AiOutlineShoppingCart size={32}></AiOutlineShoppingCart>
          <span className="ml-3">{cart.length}</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
