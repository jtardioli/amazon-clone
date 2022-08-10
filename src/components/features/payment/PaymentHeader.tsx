import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiTwotoneLock } from "react-icons/ai";

const PaymentHeader = () => {
  return (
    <div className="w-full bg-[#F6F6F6] h-20 flex  items-center justify-between px-44 mb-5 ">
      <Link href="/">
        <div className="mt-5 hover:cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
            alt="logo"
            width={100}
            height={100}
            objectFit="contain"
          />
        </div>
      </Link>

      <h3 className="text-3xl">
        Checkout{" "}
        <span className="text-2xl">
          (<span className=" text-sky-700">1 item</span>)
        </span>{" "}
      </h3>
      <AiTwotoneLock color="#b8b8b8" size={35} />
    </div>
  );
};

export default PaymentHeader;
