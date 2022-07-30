import Image from "next/image";
import React from "react";

const CheckoutAd = () => {
  return (
    <div className="h-2 bg-white w-[850px] h-[140px] border-2 flex items-center justify-between px-6 mb-5">
      <div>
        <Image
          src="https://images-na.ssl-images-amazon.com/images/G/15/credit/img19/CBCC/maple/cacbcc-vc_cardcircle-p._CB463993881_.png"
          alt="Mastercard ad"
          width={100}
          height={100}
        />
      </div>

      <span className="w-3/5 text-[0.95rem]">
        <strong>Josh</strong> get a{" "}
        <span className=" text-[#008000]">$50 Amazon.ca Gift Card</span>{" "}
        instantly, plus up to 5% back for 6 monhs after approval for the
        Amazon.ca Rewards Mastercard
      </span>
      <button className="px-3 py-1 border-2 rounded-lg shadow-sm">
        Learn More
      </button>
    </div>
  );
};

export default CheckoutAd;
